import React, {useEffect, useState} from "react";
import "./setting-category.css"
import {Close, Edit} from "@mui/icons-material";
import api, {baseURL} from "../../api/axios.js";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {Button} from "@mui/material";
import BasicModal from "../basic-modal/Basic-Modal.jsx";
import {faqCategoryModalstyle} from "./board-faq.js";

const SettingCategory = ({
                           title,
                           childArray,
                           classCategoryModal,
                           submit,
                           setData,
                           openModal,
                           classCategoryClose,
                           clsCategoryFormData,
                           editClsCatSubmit,
                           delClsCatSubmit,
                           authList,
                           setSearchData,
                           searchData
                         }) => {
  const [imageUrls, setImageUrls] = useState([]);

  const [catType, setCatType] = useState('add')




  //이미지 업로드
  const handleImageChange = (e) => {

    const files = Array.from(e.target.files);
    setData(prev => {
      return {
        ...prev,
        class_cat_thumb: e.target.files[0]
      }
    })
    console.log(e.target.files)
    // 각 파일에 대해 FileReader를 사용하여 URL을 얻음
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 로드 완료 시, 상태에 URL 추가
        setImageUrls(prevUrls => [reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  async function getClsCategoryDetail(id) {
    try {
      const {status, data} = await api.get(`/super/class_category/detail/${id}`)

      console.log(data[0]);
      if (status === 200) {
        setData({
          class_cat_idx : data[0].class_cat_idx,
          class_cat_name: data[0].class_cat_name,
          class_cat_auth: data[0].class_cat_auth,
          class_cat_decription: data[0].class_cat_decription
        })
        if(data[0].att_filepath !== null) {
          setImageUrls([`${baseURL + data[0].att_filepath}`])
        }else {
          setImageUrls([])
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function getFaqCategoryDetail(id) {
    try {
      const {status, data} = await api.get(`/faq/category/${id}`)
      if (status === 200) {
        setData({
          fac_title : data.fac_title,
          fac_idx: data.fac_idx
        })
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="setting-category-section">
        <div className="setting-category-top">
          <div className="setting-category-title">{title}</div>
          <button className="add-category-button" onClick={() => {
            setCatType('add')
            openModal()
          }}>+ 추가</button>
        </div>
        <div className="setting-category-bottom">
          <div className="category-bottom-header">
            <div className="category-header">분류</div>
            <div className="category-header small">관리</div>
          </div>
          <div className="category-bottom-contents">
            {title === '클래스 관리' && childArray && childArray.length > 0 && childArray.map((el, idx) => (
              <div className="bottom-category-box" key={idx}>
                <div className="bottom-category">{el.class_cat_name}</div>
                <div className="bottom-category small">
                  <button className="bottom-category-button" onClick={() => {
                    getClsCategoryDetail(el.class_cat_idx);

                    setCatType('edit')
                    openModal()
                  }}>
                    <Edit/>
                  </button>
                </div>
              </div>
            ))}
            {title === 'FAQ 분류' && childArray && childArray.length > 0 && childArray.map((el, idx) => (
              <div className={"bottom-category-box" + (String(el.fac_idx) === searchData ? ' active' : '')} key={idx}>
                <div className="bottom-category" onClick={() => {
                  setSearchData(`${el.fac_idx}`)
                }}>{el.fac_title}</div>
                <div className="bottom-category small">
                  <button className="bottom-category-button"onClick={() => {
                    getFaqCategoryDetail(el.fac_idx);

                    setCatType('edit')
                    openModal()
                  }}>
                    <Edit/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 {/*모달 --------------------------------------------- */}

      {title === '클래스 관리' && <BasicModal
        cusClass='class-category-modal'
        openState={classCategoryModal}
        closeState={classCategoryClose}
      >
        <Box sx={classCategoryModalstyle}>
          <div className="modal-title">
            <span>카테고리 추가</span>
            <button className='close-btn' onClick={classCategoryClose}><Close/></button>
          </div>
          <div className="modal-content">
            <div className="form-box">
              <div className="form-title">카테고리 분류</div>
              <div className="form-input-wrap">
                <input type="text"
                  className="form-input"
                  onChange={(e) => {
                    setData((prev) => {
                      return {
                        ...prev,
                        class_cat_name: e.target.value
                      }
                    })
                  }}
                  placeholder='카테고리 분류 입력'
                  value={clsCategoryFormData.class_cat_name}
                />
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">보기 권한</div>
              <div className="form-input-wrap">
                <select
                  className='form-input'
                  value={clsCategoryFormData.class_cat_auth}
                  onChange={(e) => {
                  setData((prev) => {
                    return {
                      ...prev,
                      class_cat_auth: e.target.value
                    }
                  })
                }}>
                  {authList && authList.map(item => (
                    <option value={item.ath_idx} key={item.ath_idx}>{item.ath_type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-box h290">
              <div className="form-title">썸네일 등록</div>
              <div className="form-input-wrap">
                <label htmlFor="image-input" className="upload-zone">
                  여기를 클릭하여, 이미지를 업로드 하세요.<br/>
                  권장 비율 {"{추후에 안내 드릴 예정}"}
                </label>
                <input
                  type="file"
                  id="image-input"
                  name="classCategory"
                  accept="image/*"
                  multiple
                  style={{display: 'none'}}
                  onChange={handleImageChange}
                />
                {imageUrls.length > 0 && <div className="img-wrap">
                  {/* 업로드된 이미지들을 표시 */}
                  {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`upload-${index}`}/>
                  ))}
                </div>}
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">강의 요약</div>
              <div className="form-input-wrap">
                <textarea
                  className='form-input'
                  placeholder='강의 요약 입력'
                  value={clsCategoryFormData.class_cat_decription}
                  onChange={(e) => {
                  setData(prev => {
                    return {
                      ...prev,
                      class_cat_decription: e.target.value
                    }
                  })
                }}></textarea>
              </div>
            </div>
          </div>
          <Divider component="li" style={{marginBottom: '16px'}}/>
          <div className="btn-wrap">
            {catType === 'add' && <Button variant={'contained'} onClick={() => {
              submit();
              setImageUrls([])
            }}>
               등록하기
            </Button>}
            {catType === 'edit' && <Button variant={'contained'} onClick={() => {
              editClsCatSubmit(clsCategoryFormData.class_cat_idx)
              setImageUrls([])
            }}>
              수정하기
            </Button>}
            {catType === 'edit' && (
              <Button variant={'contained'} color='error' onClick={() => {
                setImageUrls([])

                delClsCatSubmit(clsCategoryFormData.class_cat_idx)
              }}>삭제하기</Button>
            )}
            <Button variant={'outlined'}>취소</Button>
          </div>
        </Box>
      </BasicModal>}

      {title === 'FAQ 분류' &&  <BasicModal
          cusClass='faq-category-modal'
          openState={classCategoryModal}
          closeState={classCategoryClose}

      >
        <Box sx={faqCategoryModalstyle}>
          <div className="modal-title">
            <span>카테고리 추가</span>
            <button className='close-btn' onClick={classCategoryClose}><Close/></button>
          </div>
          <div className="modal-content">
            <div className="form-box">
              <div className="form-title">카테고리 분류</div>
              <div className="form-input-wrap">
                <input type="text" className="form-input"
                       value={clsCategoryFormData.fac_title}
                       onChange={(e) => {
                         setData(prev => {
                           return {
                             ...prev,
                             fac_title: e.target.value
                           }
                         })
                       }}/>
              </div>
            </div>
          </div>
          <Divider component="li" style={{marginBottom: '16px'}}/>
          <div className="btn-wrap">
            {catType === 'add' && <Button variant={'contained'} onClick={() => {
              submit();
              setImageUrls([])
            }}>
              등록하기
            </Button>}
            {catType === 'edit' && <Button variant={'contained'} onClick={() => {
              editClsCatSubmit(clsCategoryFormData.fac_idx)
              setImageUrls([])
            }}>
              수정하기
            </Button>}
            {catType === 'edit' && (
                <Button variant={'contained'} color='error' onClick={() => {
                  setImageUrls([])

                  delClsCatSubmit(clsCategoryFormData.fac_idx)
                }}>삭제하기</Button>
            )}            <Button variant={'outlined'}>취소</Button>
          </div>
        </Box>
      </BasicModal>}
        </>
  );
};
export default SettingCategory;
