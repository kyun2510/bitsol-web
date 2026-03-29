import React, {useEffect, useMemo, useRef, useState} from "react";
import "./setting-class.css";
import "./list-pagination.css"
import {Button, Pagination} from "@mui/material";
import {Close, Delete, Edit} from "@mui/icons-material";
import api, {baseURL} from "../../api/axios.js";
import BasicModal from "../basic-modal/Basic-Modal.jsx";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {faqCategoryModalstyle} from "./board-faq.js";
import ReactQuill from 'react-quill';

function SettingClass({
                        title,
                        childArray,
                        openModal,
                        getClsDetail,
                        classAddModal,
                        classAddClose,
                        clsFormData,
                        setClsFormData,
                        ClsCategoryData,
                        handleImageChange,
                        imageUrls,
                        filesUrls,
                        handleFileChange,
                        addClsSubmit,
                        delfile,
                        delClass,
                        nav,
                        pageChange,
                        addDelFile,
                        facData,
                      }) {
  const [clsType, setClsType] = useState({name: 'add', idx: 0})
  const reactQuillRef = useRef(null);
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ]
  const faqToolbarOptions = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{header: [1, 2, 3, 4, 5, false]}],
          ["bold", "underline"],
          ["image", 'link'],
        ],
        handlers: {
          image: imageHandler,
        },
      }
    }
  }, [])
  useEffect(() => {
    if (title === 'FAQ 목록') {
      // getFacData();
    }
  }, []);


  async function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      const formData = new FormData();
      formData.append("files", file);
      try {
        const res = await api.post(`/uploads/faq`, formData);
        console.log(res);
        const editor = reactQuillRef.current.getEditor();
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", baseURL + res.data[0]);
        // 성공적으로 수정되었을 때의 로직 (예: 알림 표시)
      } catch (error) {
        console.error('파일 업로드 실패', error);
        // 실패했을 때의 로직 (예: 에러 메시지 표시)
      }
    })
  }

   return (
    <>
      <div className="setting-class-section">
        <div className="setting-class-top">
          <div className="setting-class-title">{title}</div>
            <button className="add-class-button" onClick={() => {
                setClsType({...clsType, name: 'add', idx: 0})
                openModal()
            }}>+ 추가
            </button>
        </div>
        <div className="setting-class-bottom">
          <div className="class-bottom-header">
            <div className="class-header small">분류</div>
            <div className="class-header">제목</div>
            <div className="class-header xsmall">관리</div>
          </div>
        </div>
        <div className="class-bottom-contents">
          {title === '클래스 상세강좌 관리' && childArray && childArray.map((el, idx) => (
            <div className="bottom-class-box" key={idx}>
              <div className="bottom-class small">{el.class_cat_name}</div>
              <div className="bottom-class">{el.class_name}</div>
              <div className="bottom-class xsmall">
                <button className="bottom-class-button" onClick={() => {
                  setClsType({...clsType, name: 'edit', idx: el.class_idx})
                  getClsDetail(el.class_idx)
                }}>
                  <Edit/>
                </button>
              </div>
            </div>
          ))}
          {title === 'FAQ 목록' && childArray && childArray.map((el, idx) => (
            <div className="bottom-class-box" key={idx}>
              <div className="bottom-class small">{el.fac_title}</div>
              <div className="bottom-class">{el.faq_title}</div>
              <div className="bottom-class xsmall">
                <button className="bottom-class-button" onClick={() => {
                  setClsType({...clsType, name: 'edit', idx: el.faq_idx})
                  getClsDetail(el.faq_idx)
                }}>
                  <Edit/>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="setting-class-pagi">
          <div className={"list-pagination"}>
            <Pagination
              page={nav.page}
              count={Math.floor(nav.total_count / nav.pagerow) + (nav.total_count % nav.pagerow > 0 ? 1 : 0)}
              onChange={(e, page) => {
                pageChange(page);
              }}
              shape="rounded"/>
          </div>
        </div>
      </div>
      {/*모달 --------------------------------------------- */}
      {title === '클래스 상세강좌 관리' && (
        <BasicModal
          cusClass='class-add-modal'
          openState={classAddModal}
          closeState={classAddClose}
        >
          <Box sx={classCategoryModalstyle}>
            <div className="modal-title">
              <span>{clsType.name === 'add' ? '클래스 등록' : '클래스 수정'}</span>
              <button className='close-btn' onClick={classAddClose}><Close/></button>
            </div>
            <div className="modal-content">
              <div className="form-box">
                <div className="form-title">카테고리 선택</div>
                <div className="form-input-wrap">
                  <select
                    className='form-input'
                    defaultValue={clsFormData.class_cat_idx}
                    onChange={(e) => {
                      setClsFormData({
                        ...clsFormData,
                        class_cat_idx: Number(e.target.value)
                      })
                    }}>
                    {ClsCategoryData && ClsCategoryData.map(item => (
                      <option value={item.class_cat_idx} key={item.class_cat_idx}>{item.class_cat_name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-box">
                <div className="form-title">클래스 이름</div>
                <div className="form-input-wrap">
                  <input type="text" className="form-input"
                         value={clsFormData.class_name}
                         placeholder='클래스 이름 입력'
                         onChange={(e) => {
                           setClsFormData({
                             ...clsFormData,
                             class_name: e.target.value
                           })
                         }}
                  />
                </div>
              </div>
              <div className="form-box h290">
                <div className="form-title">클래스 썸네일</div>
                <div className="form-input-wrap">
                  <label htmlFor="image-input" className="upload-zone">
                    여기를 클릭하여, 이미지를 업로드 하세요.<br/>
                    권장 비율 {"{  추후에 안내 드릴 예정}"}
                  </label>
                  <input
                    type="file"
                    id="image-input"
                    name="classCategory"
                    accept="image/*"
                    multiple
                    style={{display: 'none'}}
                    onChange={(e) => {
                      handleImageChange(e, clsType.idx, 'CLASS')
                    }}
                  />
                  {imageUrls.length > 0 && <div className="img-wrap">
                    {/* 업로드된 이미지들을 표시 */}
                    {imageUrls.map((url, index) => (
                      <span key={index}>
                      <span className={'img-delete'} onClick={() => {
                        if(clsType.name === 'edit') {
                          delfile(clsType.idx, {class_thumb: url.att_idx})
                        } else {
                          addDelFile({
                            att_idx : url.att_idx
                          }, 'thumb')
                        }


                      }}>
                        <Close/>
                      </span>
                    <img src={baseURL + url.att_filepath} alt={`upload-${index}`}/>
                    </span>
                    ))}
                  </div>}
                </div>
              </div>
              <div className="form-box">
                <div className="form-title">동영상 URL</div>
                <div className="form-input-wrap">
                  <input type="text" className="form-input"
                         placeholder='동영상 URL 입력'
                         value={clsFormData.class_video_url}
                         onChange={(e) => [
                           setClsFormData({
                             ...clsFormData,
                             class_video_url: e.target.value
                           })
                         ]}
                  />
                </div>
              </div>
              <div className="form-box">
                <div className="form-title">강의 소개</div>
                <div className="form-input-wrap">
                  <ReactQuill
                    modules ={
                      {toolbar: toolbarOptions}
                    }
                    className={'edu-info'}
                    value={clsFormData.class_info}
                    placeholder='강의 소개 입력'
                    onChange={(value) => {
                      // console.log(value);
                      setClsFormData({
                        ...clsFormData,
                        class_info: value
                      })
                    }}
                  />
                </div>
              </div>
              <div className="form-box h290">
                <div className="form-title">강의 자료 업로드</div>
                <div className="form-input-wrap">
                  <label htmlFor="files-input" className="upload-zone">
                    여기를 클릭하여, 자료를 업로드 하세요<br/>
                    권장 용량 {"{추후에 안내 드릴 예정}"}
                  </label>
                  <input
                    type="file"
                    id="files-input"
                    name="classfile"
                    multiple
                    style={{display: 'none'}}
                    onChange={(e) => {
                      handleFileChange(e, clsType.idx, 'CLASS_FILE')
                    }}
                  />
                  {filesUrls.length > 0 && <div className="file-wrap">
                    {/* 업로드된 이미지들을 표시 */}
                    {filesUrls[0].idx !== null && filesUrls.map((url, index) => (
                      <div className={'file-link'} key={index}>
                      <span className={'file-delete'} onClick={() => {
                        const file_input= document.querySelector('[name="classfile"]')
                        file_input.value = '';
                        if(clsType.name === 'edit') {
                          delfile(clsType.idx, {class_files: [url.att_idx]})
                        }else {
                          addDelFile({
                            att_idx : url.att_idx
                          }, 'files')
                        }

                      }}>
                        <Close/>
                      </span>
                        <span>{url.name}</span>
                      </div>
                    ))}
                  </div>}
                </div>
              </div>
            </div>
            <Divider component="li" style={{margin: '16px 0 10px'}}/>
            <div className="btn-wrap">
              {clsType.name === 'add'
                ? <Button variant={'contained'} onClick={() => {
                  addClsSubmit(clsType.idx)
                }}>등록하기</Button>
                : <Button variant={'contained'} onClick={() => {
                  addClsSubmit(clsType.idx)
                }}>수정하기</Button>
              }
              {clsType.name === 'edit' && <Button variant={'contained'} color='error' onClick={() => {
                delClass(clsType.idx)
              }}>삭제하기</Button>}
              <Button variant={'outlined'} onClick={classAddClose}>취소</Button>
            </div>
          </Box>
        </BasicModal>
      )}
      {title === 'FAQ 목록' && (
        <BasicModal
          cusClass='faq-add-modal'
          openState={classAddModal}
          closeState={classAddClose}
        >
          <Box sx={faqCategoryModalstyle}>
            <div className="modal-title">
              <span>FAQ 등록</span>
              <button className='close-btn' onClick={classAddClose}><Close/></button>
            </div>
            <div className="modal-content">
              <div className="form-box">
                <div className="form-title">카테고리 선택</div>
                <div className="form-input-wrap">
                  <select className='form-input'
                          value={clsFormData.fac_idx}
                          onChange={(e) => {
                            setClsFormData({
                              ...clsFormData,
                              fac_idx: e.target.value,
                            })
                          }}>
                    {facData && facData.map(row => (
                      <option key={row.fac_idx} value={row.fac_idx}>{row.fac_title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-box">
                <div className="form-title">FAQ 제목</div>
                <div className="form-input-wrap">
                  <input type="text" className="form-input" placeholder='글제목 입력'
                         value={clsFormData.faq_title}
                         onChange={(e) => {
                           setClsFormData({
                             ...clsFormData,
                             faq_title: e.target.value
                           })
                         }}
                  />
                </div>
              </div>
              <div className="form-box">
                <div className="form-title">FAQ 내용</div>
                <div className="form-input-wrap">
                  <ReactQuill
                    modules ={
                      faqToolbarOptions
                    }
                    className={'faq-info'}
                    value={clsFormData.faq_content}
                    placeholder='강의 소개 입력'
                    ref={reactQuillRef}
                    onChange={(value) => {
                      // console.log(value);
                      setClsFormData({
                        ...clsFormData,
                        faq_content: value
                      })
                    }} />

                </div>
              </div>
            </div>
            <Divider component="li" style={{margin: '16px 0 10px'}}/>
            <div className="btn-wrap">
              {clsType.name === 'add'
                ? <Button variant={'contained'} onClick={() => {
                  addClsSubmit()
                }}>등록하기</Button>
                : <Button variant={'contained'} onClick={() => {
                  addClsSubmit(clsType.idx)
                }}>수정하기</Button>
              }
              {clsType.name === 'edit' && <Button variant={'contained'} color='error' onClick={() => {
                delClass(clsType.idx)
              }}>삭제하기</Button>}
              <Button variant={'outlined'} onClick={classAddClose}>취소</Button>
            </div>
          </Box>
        </BasicModal>
      )}
      {title === '상품문의 관리' && (
        <BasicModal
          cusClass='faq-add-modal'
          openState={classAddModal}
          closeState={classAddClose}
        >
          <Box sx={faqCategoryModalstyle}>
            <div className="modal-title">
              <span>클래스 등록</span>
              <button className='close-btn' onClick={classAddClose}><Close/></button>
            </div>
            <div className="modal-content">
              <div className="form-box">
                <div className="form-title">문의 상품</div>
                <div className="form-input-wrap">
                  <input type="text" className="form-input" placeholder='글제목 입력'
                         value={clsFormData.cst_title}
                         onChange={(e) => {
                           setClsFormData({
                             ...clsFormData,
                             cst_title: e.target.value
                           })
                         }}
                  />
                </div>
              </div>
              <div className="form-box">
                <div className="form-title">문의 내용</div>
                <div className="form-input-wrap">
                            <textarea className='form-input'
                                      value={clsFormData.cst_content}
                                      onChange={(e) => {
                                        setClsFormData({
                                          ...clsFormData,
                                          cst_content: e.target.value
                                        })
                                      }}
                            ></textarea>
                </div>
              </div>
              <div className="form-box">
                <div className="form-title">답변</div>
                <div className="form-input-wrap">
                            <textarea className='form-input'
                              // value={clsFormData.faq_content}
                              // onChange={(e) => {
                              //     setClsFormData({
                              //         ...clsFormData,
                              //         faq_content: e.target.value
                              //     })
                              // }}
                            ></textarea>
                </div>
              </div>
            </div>
            <Divider component="li" style={{margin: '16px 0 10px'}}/>
            <div className="btn-wrap">
              {clsType.name === 'add'
                ? <Button variant={'contained'} onClick={() => {
                  addClsSubmit()
                }}>등록하기</Button>
                : <Button variant={'contained'} onClick={() => {
                  addClsSubmit(clsType.idx)
                }}>수정하기</Button>
              }
              {clsType.name === 'edit' && <Button variant={'contained'} color='error' onClick={() => {
                delClass(clsType.idx)
              }}>삭제하기</Button>}
              <Button variant={'outlined'} onClick={classAddClose}>취소</Button>
            </div>
          </Box>
        </BasicModal>
      )}
    </>
  );
}

export default SettingClass;
