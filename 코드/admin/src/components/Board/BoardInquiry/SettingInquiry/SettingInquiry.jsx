import React, {useEffect, useState} from "react";
import "./setting-inquiry.css";
import {Button, Pagination} from "@mui/material";
import api from "../../../../api/axios.js";
import BasicModal from "../../../../features/basic-modal/Basic-Modal.jsx";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {Close} from "@mui/icons-material";
import {inquiryModalstyle} from "../board-inquiry.js";

const SettingInquiry = () => {
    const userData = JSON.parse(sessionStorage.getItem('ud'))
    const pageNum = 1;

    const [inquiryModal, setInquiryModal] = useState(false);
    const inquiryModalOpen = () => setInquiryModal(true)
    const inquiryModalClose = () => {
        setInquiryModal(false);
        setInquiryDetail(null);
    }


    /* 문의 목록 데이터 ------------------------------- */
    const [inquiryList, setInquiryList] = useState([]);
    const [inquiryDetail, setInquiryDetail] = useState(null);
    const [answerData, setAnswerData] = useState(null);
    const [nav, setNav] = useState({
        page: 1,
        // pagerow: 10,
        total_count : 0
    })

    function ChangeRegDateTimeFormat(cst_regtime) {
        const date = new Date(cst_regtime);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

        return formattedDate
    }

    // 지점 정보를 한글로 변환하는 함수
    const getBranchName = (inquiry) => {
        // 1. cst_ext1에서 직접 읽기
        if (inquiry.cst_ext1) {
            if (inquiry.cst_ext1.includes('gamil')) {
                return '감일종합';
            } else if (inquiry.cst_ext1.includes('self-study')) {
                return '독학재수관';
            } else if (inquiry.cst_ext1.includes('main')) {
                return '빛솔본점';
            }
        }

        // 2. cst_content에서 파싱
        if (inquiry.cst_content) {
            const branchMatch = inquiry.cst_content.match(/지점:\s*([^\n]*)/);
            if (branchMatch && branchMatch[1]) {
                const branchValue = branchMatch[1].trim();
                if (branchValue.includes('gamil')) {
                    return '감일종합';
                } else if (branchValue.includes('self-study')) {
                    return '독학재수관';
                } else if (branchValue.includes('main') || branchValue === '') {
                    return '빛솔본점';
                }
                return branchValue; // 다른 값이면 그대로 반환
            }
        }

        return '빛솔본점'; // 기본값
    };

    // cst_content에서 학년, 연락처, 상세내용 추출
    const parseInquiryContent = (content, inquiry) => {
        if (!content) {
            return {
                field: inquiry.cst_field || '정보 없음',
                phone: inquiry.cst_phone || '정보 없음',
                detail: '정보 없음'
            };
        }
        const fieldMatch = content.match(/학년\/?나이\s*:\s*([^\n\r]*)/i) || content.match(/학년\s*:\s*([^\n\r]*)/i) || content.match(/나이\s*:\s*([^\n\r]*)/i);
        const phoneMatch = content.match(/연락처\s*:\s*([^\n\r]*)/i);
        const detailMatch = content.match(/문의 내용\s*:\s*([\s\S]*?)(?:문의 접수 시간|$)/i);

        return {
            field: (fieldMatch && fieldMatch[1].trim()) || (inquiry.cst_field || '정보 없음'),
            phone: (phoneMatch && phoneMatch[1].trim()) || (inquiry.cst_phone || '정보 없음'),
            detail: (detailMatch && detailMatch[1].trim()) || (inquiry.cst_content || '정보 없음')
        };
    };

const getInquiryList = async () => {
        try {
                const response = await api.get(`/super/inquiry/all?page=${nav.page}`);
                const resp = response.data;
                if (resp && Array.isArray(resp)) {
                    setInquiryList(resp);
                    setNav({ ...nav, total_count: resp.length });
                } else if (resp && resp.inquiries) {
                    setInquiryList(resp.inquiries || []);
                    setNav({ ...nav, total_count: resp.total_count || 0 });
                } else {
                    setInquiryList([]);
                    setNav({ ...nav, total_count: 0 });
                }

            console.log(response.data,'datadata')
        } catch (error) {
            console.error('공지사항 조회 중 오류 발생:', error);
        }
    };

    useEffect(() => {
        getInquiryList()
    }, [nav.page]);

    /* 문의 목록 데이터 끝------------------------------- */
    /* 문의 상세 데이터 ------------------------------- */

    async function getInquiryDetail(idx) {
        try {
            const formData = {
                cst_id: idx
            }
            const {status, data} = await api.post(`/inquiry/details`, formData)

            if(status === 200) {
                setInquiryDetail(data)
            }

            // console.log(data);
        }catch (e) {
            console.log('클래스 상세 불러오기 실패')
        }
    }

    /* 문의 상세 데이터 끝 ------------------------------- */


    //문의 답변 등록
    async function addAnswerSubmit() {
        try {
            const formData = {
                cst_id: inquiryDetail.cst_id,
                csa_content: answerData.csa_content,
                reg_user: userData.id,
            }

            // console.log(formData,'민정ㅇ');
            // console.log(formData);
            const result = await api.post('/super/inquiry', formData,)
            if(result.status === 200) {
                inquiryModalClose();
                getInquiryList();
            }

            console.log(result);
        }catch (e) {
            console.error('클래스 카테고리 등록 실패 : ', e)
        }
    }

    async function delInq(cst_id) {
        console.log(cst_id)
        try {
            if (window.confirm(`게시글을 삭제하시겠습니까?`)){
                const formData = {
                    cst_id: cst_id
                }
                const {status} = await api.put(`/super/inquiry/del`, formData)
                if (status === 200) {
                    await getInquiryList()
                    window.dispatchEvent(new Event('inquiryStatusChanged'));
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    // 문의 상태 토글 (답변완료 ↔ 미답변)
    async function handleConfirmInquiry(cst_id) {
        try {
            const { status } = await api.put('/super/inquiry/status', { cst_id });
            if (status === 200) {
                await getInquiryList();
                // 사이드바 배지 갱신
                window.dispatchEvent(new Event('inquiryStatusChanged'));
            }
        } catch (e) {
            console.error('Failed to update inquiry status:', e);
        }
    }

    return (
    <div className="setting-inquiry-section">
      <div className="setting-inquiry-title">A/S 문의관리</div>
            <div className="setting-inquiry-header">
                <div className="inquiry-header-text inquiry-title1">번호</div>
                <div className="inquiry-header-text inquiry-title2">답변상태</div>
                <div className="inquiry-header-text inquiry-title3">성함</div>
                <div className="inquiry-header-text inquiry-title4">학년</div>
                <div className="inquiry-header-text inquiry-title5">연락처</div>
                <div className="inquiry-header-text inquiry-title6">상세내용</div>
                <div className="inquiry-header-text inquiry-title7">지점</div>
                <div className="inquiry-header-text inquiry-title8">작성일</div>
                <div className="inquiry-header-text inquiry-title9">관리</div>
                <div className="inquiry-header-text inquiry-title10">삭제</div>
            </div>          {/* 맵 돌릴 부분 */}
        {inquiryList && inquiryList.map((inquiry, index) => (
            <div className="setting-inquiry-list" key={index}>

<div className="inquiry-list-text inquiry-title1">{inquiryList.length - index}</div>
                <div className="inquiry-list-text inquiry-title2">
                    <div className={`inquiry-status-box ${inquiry && inquiry.cst_step === '답변완료' ? 'finish' : ''}`}
                         style={{
                            backgroundColor: inquiry && inquiry.cst_step === '답변완료' ? '#4CAF50' : '#9e9e9e',
                            color: '#fff',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            display: 'inline-block',
                            fontWeight: 'bold'
                         }}>
                        {inquiry && inquiry.cst_step === '답변대기' ? '미답변' : '답변완료'}
                    </div>
                </div>
                {(() => {
                    const parsed = parseInquiryContent(inquiry.cst_content, inquiry);
                    return (
                        <>
                            <div className="inquiry-list-text inquiry-title3">{inquiry.cst_title}</div>
                            <div className="inquiry-list-text inquiry-title4">{parsed.field || '정보 없음'}</div>
                            <div className="inquiry-list-text inquiry-title5">{parsed.phone || '정보 없음'}</div>
                            <div className="inquiry-list-text inquiry-title6 flex-start" style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '540px'}}>{parsed.detail}</div>
                            <div className="inquiry-list-text inquiry-title7">{getBranchName(inquiry)}</div>
                            <div className="inquiry-list-text inquiry-title8">{ChangeRegDateTimeFormat(inquiry.cst_regtime)}</div>
                        </>
                    )
                })()}
<div className="inquiry-list-text inquiry-title8">
                    <button
                    onClick={() => handleConfirmInquiry(inquiry.cst_id)}
                    style={{
                        backgroundColor: '#2196F3',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}
                    >확인</button>
                </div>
                <div className="inquiry-list-text inquiry-title8">
                    <button
                    onClick={() => {
                        delInq(inquiry.cst_id);
                    }}
                    >삭제하기</button>
                </div>
            </div>
        ))}

      <div className="setting-inquiry-pagi">
        <Pagination
          count={pageNum}
          variant="outlined"
          shape="rounded"
          color="primary"
          showFirstButton
          showLastButton
        />
      </div>
      <div>

    </div>

        <BasicModal
            cusClass='faq-add-modal'
            openState={inquiryModal}
            closeState={inquiryModalClose}
        >
            <Box sx={inquiryModalstyle}>
                <div className="modal-title">
                    <span> 답변 입력 </span>
                    <button className='close-btn' onClick={inquiryModalClose}><Close/></button>
                </div>
                <div className="modal-content">
                    <div className="form-box">
                        <div className="form-title">문의 상품</div>
                        <div className="form-input-wrap">
                            <input type="text" className="form-input"
                                   value={inquiryDetail ? inquiryDetail?.cst_title : ''}
                                   disabled={true}
                            />
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="form-title">문의 사진</div>
                        <div className="form-input-wrap">
                            {inquiryDetail && inquiryDetail.cst_ext1 && (
                              <img src={inquiryDetail.cst_ext1} alt=""/>
                            )}
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="form-title">문의 내용</div>
                        <div className="form-input-wrap">
                            <textarea className='form-input'
                                      value={inquiryDetail ? inquiryDetail?.cst_content : ''}
                                      disabled={true}></textarea>
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="form-title">답변</div>
                        <div className="form-input-wrap">
                            <textarea className='form-input'
                                      placeholder='답변 내용'
                                      defaultValue={inquiryDetail ? inquiryDetail.answer?.csa_content : ''}
                                      onChange={(e) => {
                                          setAnswerData({
                                              ...answerData,
                                              csa_content: e.target.value
                                          })
                                      }}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <Divider component="li" style={{margin: '16px 0 10px'}}/>
                <div className="btn-wrap">
                    { inquiryDetail && inquiryDetail?.cst_step === '답변대기'
                        ? <Button variant={'contained'} onClick={addAnswerSubmit}>등록하기</Button>
                        : <Button variant={'contained'} onClick={inquiryModalClose}>확인</Button>
                    }
                    <Button variant={'outlined'} onClick={inquiryModalClose}>취소</Button>
                </div>
            </Box>
        </BasicModal>

    </div>
  );
};

export default SettingInquiry;
