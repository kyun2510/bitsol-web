import { useEffect, useState } from "react";
import api from "../../api/axios";
import DefaultTable from "../../features/DefaultTable";
import ListPagination from "../../features/ListPagination";




export default function QuickList() {

    const [contacts, setContacts] = useState([]);
    const [nav, setNav] = useState({
        page: 1,
        pagerow: 10,
        total_count: 0
    })

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



const fetchQuickContact = async () => {
        try {
            const response = await api.get('/super/inquiry/all', {
                params: {
                    page: nav.page,
                    pagerow: nav.pagerow,
                }
            });
            const resp = response.data;
            // Support two response shapes: { inquiries, total_count } or direct array
            if (resp && Array.isArray(resp)) {
                setContacts(resp);
                setNav({ ...nav, total_count: resp.length });
            } else if (resp && resp.inquiries) {
                setContacts(resp.inquiries || []);
                setNav({ ...nav, total_count: resp.total_count || 0 });
            } else {
                setContacts([]);
                setNav({ ...nav, total_count: 0 });
            }


        } catch (error) {
            console.error('Failed to fetch contacts:', error);
        }
    };

const delInq = async (cst_id) => {
        try {
            if (window.confirm('게시글을 삭제하시겠습니까?')) {
                const { status } = await api.put('/super/inquiry/del', { cst_id });
                if (status === 200) {
                    alert('삭제완료');
                    await fetchQuickContact();
                    window.dispatchEvent(new Event('inquiryStatusChanged'));
                }
            }
        } catch (error) {
            console.error('Failed to delete contact:', error);
        }
    };

    // 문의 상태 토글 (답변완료 ↔ 미답변)
    const handleConfirmInquiry = async (cst_id) => {
        try {
            await api.put('/super/inquiry/status', { cst_id });
            // 상태 업데이트 후 목록 새로고침
            await fetchQuickContact();
            // 사이드바 배지 갱신을 위해 전역 이벤트 발행
            window.dispatchEvent(new Event('inquiryStatusChanged'));
        } catch (error) {
            console.error('Failed to update inquiry status:', error);
        }
    };



    useEffect(() => {
        fetchQuickContact();
    }, [nav.page, nav.pagerow]);


    console.log(contacts, "contacts")


return (
        <section>
            <DefaultTable title='문의내용'>
                <thead>
                    <tr>
                        <th className="table-th-title">번호</th>
                        <th className="table-th-title">답변상태</th>
                        <th className="table-th-title">성함</th>
                        <th className="table-th-title">학년</th>
                        <th className="table-th-title">연락처</th>
                        <th className="table-th-title">상세내용</th>
                        <th className="table-th-title">지점</th>
                        <th className="table-th-title">작성일</th>
                        <th className="table-th-title">관리</th>
                        <th className="table-th-title">삭제</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.length > 0 ? contacts.map((inquiry, index) => {
                        const parsed = parseInquiryContent(inquiry.cst_content, inquiry);
                        return (
                        <tr key={inquiry.cst_id}>
                            <td>{contacts.length - index}</td>
                            <td>
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
                            </td>
                            <td>{inquiry.cst_title}</td>
                            <td>{parsed.field || '정보 없음'}</td>
                            <td>{parsed.phone || '정보 없음'}</td>
                            <td className="flex-start" style={{maxWidth: '480px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{parsed.detail}</td>
                            <td>{getBranchName(inquiry)}</td>
                            <td>{inquiry.cst_regtime ? inquiry.cst_regtime.slice(0, 10) : '정보 없음'}</td>
                            <td>
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
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        delInq(inquiry.cst_id);
                                    }}
                                >삭제하기</button>
                            </td>
                        </tr>
                        )
                    }) : (
                        <tr>
                            <td colSpan="10">문의 내역이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </DefaultTable>



            <div className={'wz-board-pagination-div'}>
                <ListPagination nav={nav} setNav={setNav} />
            </div>

        </section>
    )
}