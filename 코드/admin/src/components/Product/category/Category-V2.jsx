import React, {useEffect, useMemo, useState} from 'react'
import api, { baseURL } from "../../../api/axios.js";
import './Category-V2.css';
import './setting-category.css';
import './setting-class.css'
import './list-pagination.css'
import { ArrowRight, Close, Edit } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { faqCategoryModalstyle } from "../../../features/SettingCategory/board-faq.js";
import Divider from "@mui/material/Divider";
import { Button, Pagination, Modal, Select, TextField, MenuItem } from "@mui/material";
import BasicModal from "../../../features/basic-modal/Basic-Modal.jsx";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const CategoryV2 = () => {
  const userData = JSON.parse(sessionStorage.getItem('ud'))
  const [maincategory, setMaincategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [prdData, setPrdData] = useState(null)
  const [maincategoryModal, setMaincategoryModal] = useState(false)
  const [prdModal, setprdModal] = useState(false)
  const [imgUrls, setimgUrls] = useState([])
  const [thumbnail, setThumbnail] = useState([])
  const [alertModal, setalertModal] = useState(false)
  const [prdalertModal, setprdalertModal] = useState(false)
  const [catFormData, setcatFormData] = useState({})
  const [prdFormData, setprdFormData] = useState({})
  const [catType, setCatType] = useState({
    title: '카테고리 추가',
    btn_name: '등록하기'
  })
  const [nav, setNav] = useState({
    page: 1,
    pagerow: 10,
    total_count: 0
  })
  //제품 상세 리액트 quill
  const quillModule = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{'header': [1, 2, 3, 4, false]}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          // ['image'],
          ['clean']
        ],
        handlers: {
          // image: imageHandler,
        },
      }
    }
  }, [])

  useEffect(() => {
    getData();
  }, [prdModal]);

  useEffect(() => {
    getMainCategory()
  }, [maincategoryModal])

  function pageChange(page) {
    setNav({
      ...nav,
      page: page
    })
  }


  // 대분류 가져오기
  async function getMainCategory() {
    try {
      const { data, status } = await api.get(`/products/main_category/list?page=${1}`)
      // console.log(data, status);
      setMaincategory(data.list)
      setprdFormData({
        ...prdFormData,
        cat_id: data.list[0].cat_id
      })
    } catch (e) {
      console.error(e);
      alert('카테고리 불러오기 실패')
    }
  }

  // 대분류 상세가져오기
  async function getMainCategoryDetail(cat_idx) {
    try {
      const { data, status } = await api.get(`/products/main_category/list/${cat_idx}`)
      console.log(data, status);
      if (status === 200) {
        setcatFormData({
          ...catFormData,
          cat_idx: data.cat_id,
          cat_title: data.cat_title
        })
        MainCategoryOpen()
      }

    } catch (e) {
      console.error(e);
      alert('카테고리 불러오기 실패')
    }
  }
  //대분류 등록
  async function addMainCategory() {
    try {
      const { status } = await api.post('/products/main_category', catFormData)
      if (status === 200) {
        MainCategoryClose()
      }

    } catch (e) {
      console.error(e)
    }
  }
  //대분류 수정
  async function editMainCategory() {

    try {
      const { status } = await api.put(`/products/main_category/${catFormData.cat_idx}`, catFormData)
      if (status === 200) {
        setcatFormData({})
        MainCategoryClose()
      }

    } catch (e) {
      console.error(e)
    }
  }
  //대분류 삭제
  async function delMainCategory() {
    try {
      const { status } = await api.delete(`/products/main_category/${catFormData.cat_idx}`)
      if (status === 200) {
        setalertModal(false)
        MainCategoryClose()
        setcatFormData({})
      }

    } catch (e) {
      console.error(e)
    }
  }

  // 제품 가져오기
  async function getData() {
    try {
      const { data, status } = await api.get('/products/list', {
        params: {
          page: nav.page
        }
      })
      setPrdData(data.products);
      setNav({
        ...nav,
        total_count: data.totalCount
      })
      console.log(data);
    } catch (e) {
      console.error('데이터 가져오기 실패', e)
    }
  }
  //제품 상세 가져오기
  async function getDataDatail(prd_id) {
    try {
      const { data, status } = await api.get(`/products/detail/${prd_id}`)
      if (status === 200) {
        setprdFormData({
          ...prdFormData,
          prd_idx: data.prd_idx,
          cat_id: data.cat_id,
          prd_name: data.prd_name,
          prd_price: data.prd_price,
          prd_content : data.prd_content,
          prd_thumbnail: data.prd_thumbnail
        })
        if (data.files) {
          setimgUrls(data.files)
        }else {
          setimgUrls([])
        }
        if(data.thumb_file) {
          setThumbnail(data.thumb_file)
        }else {
          setThumbnail([]);
        }

        prdModalOpen()
      }
    } catch (e) {
      // console.error(e)
    }
  }
  // 제품 등록
  async function addData() {
    try {
      const { data, status } = await api.post('products/add')
      if (status === 200) {

        setprdFormData({
          ...prdFormData,
          prd_idx: data.prd_idx
        })
        prdModalOpen()
      }

    } catch (e) {
      // console.error(e)
    }
  }
  //제품 이미지 등록
  async function addImg(e) {
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append('files', file);
    formData.append('att_target', prdFormData.prd_idx)
    formData.append('att_target_type', 'PRODUCTS')
    try {
      const { data, status } = await api.post('/uploads/products', formData)
      if(status === 200) {

        getDataDatail(prdFormData.prd_idx)
      }
      console.log(data);
    } catch (e) {
      console.error('등록 오류')
    }
  }

  //제품 이미지 등록
  async function addThumbImg(e) {
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append('files', file);
    formData.append('att_target', 0)
    formData.append('att_target_type', 'PRODUCTS')
    try {
      const { data, status } = await api.post('/uploads/products', formData)
      if(status === 200 ){
        data[0]['att_filepath'] = data[0]['att_filepath'].split(baseURL)[1]
        console.log(data[0]['att_filepath'])
        setThumbnail(data)
        setprdFormData({
          ...prdFormData,
          prd_thumbnail: data[0].att_idx
        })
      }



      console.log(data);
    } catch (e) {
      console.error('등록 오류')
    }
  }

  // 제품 수정
  async function editData() {
    const formData = new FormData()

    formData.append('prd_status', 'Y')
    formData.append('cat_id', prdFormData.cat_id)
    formData.append('prd_idx', prdFormData.prd_idx)
    formData.append('prd_name', prdFormData.prd_name)
    formData.append('prd_price', prdFormData.prd_price)
    formData.append('upd_user', userData.id)
    formData.append('prd_content', prdFormData.prd_content)
    formData.append('prd_thumbnail', prdFormData.prd_thumbnail)

    try {
      const { data, status } = await api.put('/products/write', formData)
      if(status === 200) {
        alert('수정이 완료 되었습니다.')
        prdModalClose()
      }
    } catch (e) {
      console.error('수정 에러')
    }
  }
  // 제품 삭제
  async function delData() {
    try {
      const { data, status } = await api.put('/products/del', prdFormData)
      if(status === 200) {
        setprdalertModal();
        prdModalClose()
        alert('삭제 완료 되었습니다.')
      }
    } catch (e) {
      console.error('수정 에러')
    }
  }
  // 이미지 삭제
  async function delImg(att_idx) {
    try {
      const {data, status} = await api.delete(`/products/delImg/${att_idx}`)
      getDataDatail(prdFormData.prd_idx)
      alert(data.msg)
    }catch (e) {
      console.error(e);
    }
  }

  //카테고리 모달 열기
  const MainCategoryOpen = () => setMaincategoryModal(true)
  //카테고리 모달 닫기
  const MainCategoryClose = () => setMaincategoryModal(false)
  //제품 모달 열기
  const prdModalOpen = () => setprdModal(true)
  //제품 모달 닫기
  const prdModalClose = () => {
    setprdFormData({
      cat_id: maincategory[0].cat_id
    })
    setimgUrls([])
    setprdModal(false)
  }


  if (!maincategory || !prdData) {
    return <></>
  }

  return (
    <div className="board-faq-section">
      <div className='categoryV2-inner'>
        <div className="setting-category-section">
          <div className="setting-category-top">
            <div className="setting-category-title">카테고리 분류</div>
            <button className="add-category-button" onClick={() => {
              setCatType({
                title: '카테고리 추가',
                btn_name: '등록하기'
              })
              MainCategoryOpen()
            }}>+ 추가</button>
          </div>
          <div className="setting-category-bottom">
            <div className="category-bottom-header">
              <div className="prd-category">분류</div>
              <div className="prd-category small">관리</div>
            </div>
            <div className="category-bottom-contents">
              {maincategory && maincategory.map((el, idx) => (
                <div className={"bottom-category-box"} key={idx}>
                  <div className="bottom-category" onClick={() => {

                  }}>{el.cat_title}</div>
                  <div className="bottom-category small">
                    <button className="bottom-category-button" onClick={() => {
                      setCatType({
                        title: '카테고리 수정',
                        btn_name: '수정하기'
                      })
                      getMainCategoryDetail(el.cat_id)
                    }}>
                      <Edit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
      <div className="setting-class-section prd-table">
        <div className="setting-class-top">
          <div className="setting-class-title">제품 관리</div>
          <button className="add-class-button" onClick={() => {
            addData()

          }}>+ 추가
          </button>
        </div>
        <div className="setting-class-bottom">
          <div className="class-bottom-header">
            <div className="prd-header small">분류</div>
            <div className="prd-header">제목</div>
            <div className="prd-header">가격</div>
            <div className="prd-header xsmall">관리</div>
          </div>
        </div>
        <div className="class-bottom-contents">
          {prdData.map((el, idx) => (
            <div className="bottom-class-box" key={idx}>
              <div className="bottom-class small">{el.cat_title}</div>
              <div className="bottom-class">{el.prd_name}</div>
              <div className="bottom-class">{el.prd_price.toLocaleString()}</div>
              <div className="bottom-class xsmall">
                <button className="bottom-class-button" onClick={() => {
                  getDataDatail(el.prd_idx)

                }}>
                  <Edit />
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
              shape="rounded" />
          </div>
        </div>
      </div>

      {/*카테고리 모달 설정*/}
      <BasicModal
        cusClass='faq-category-modal'
        openState={maincategoryModal}
        closeState={MainCategoryClose}

      >
        <Box sx={faqCategoryModalstyle}>
          <div className="modal-title">
            <span>{catType.title}</span>
            <button className='close-btn' onClick={MainCategoryClose}><Close /></button>
          </div>
          <div className="modal-content">
            <div className="form-box">
              <div className="form-title">카테고리 분류</div>
              <div className="form-input-wrap">
                <input defaultValue={catFormData.cat_title} type="text" className="form-input" name='cat_title' onChange={(e) => {
                  setcatFormData({
                    ...catFormData,
                    cat_title: e.target.value
                  })
                }} />

              </div>
            </div>
          </div>
          <Divider component="li" style={{ marginBottom: '16px' }} />
          <div className="btn-wrap">
            <Button variant={'contained'} onClick={() => {
              if (catType.btn_name === '등록하기') {
                addMainCategory();
              } else if (catType.btn_name === '수정하기') {
                editMainCategory()
              }
            }}>
              {catType.btn_name}
            </Button>
            {catType.btn_name === '수정하기' && <Button variant={'outlined'} color='error' onClick={() => { setalertModal(true) }}>삭제하기</Button>}


            <Button variant={'outlined'} onClick={MainCategoryClose}>취소</Button>
          </div>
        </Box>
      </BasicModal>
      {/* 삭제 경고 */}
      <Modal
        className={'faq-category-modal'}
        open={alertModal}
        onClose={() => { setalertModal(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 200,
          bgcolor: 'background.paper',
          borderRadius: '5px',
          boxShadow: 24,
          p: 0,
          overflow: 'hidden',
        }}>
          <div className="modal-title alert">
            <span>카테고리 삭제</span>
            <button className='close-btn' onClick={() => { setalertModal(false) }}><Close /></button>
          </div>
          <div className='prd_alert_inner'>
            <div>삭제 하시겠습니까?</div>
            <div>
              <Button className='prd_alert_btn mr-10' variant={'outlined'} color='primary' onClick={() => { delMainCategory() }}>확인</Button>
              <Button className='prd_alert_btn' variant={'outlined'} color='error' onClick={() => { setalertModal(false) }}>취소</Button>
            </div>
          </div>
        </Box>

      </Modal>
      {/*제품 모달 설정*/}
      <BasicModal
        cusClass='prd-modal'
        openState={prdModal}
        closeState={prdModalClose}

      >
        <Box sx={faqCategoryModalstyle}>
          <div className="modal-title">
            <span>제품 관리</span>
            <button className='close-btn' onClick={prdModalClose}><Close /></button>
          </div>
          <div className="modal-content">
            <div className="form-box">
              <div className="form-title">제품 분류</div>
              <div className="form-input-wrap">
                <Select name="cat_id" fullWidth size='small' defaultValue={prdFormData.cat_id} onChange={(e) => {
                  setprdFormData({
                    ...prdFormData,
                    cat_id: e.target.value
                  })
                }}>
                  {maincategory.map((cat_item, idx) => (
                    <MenuItem key={idx} value={cat_item.cat_id}>{cat_item.cat_title}</MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">제품 썸네일</div>
              <div className="form-input-wrap flex">
                <div className={'slide-img-wrap'}>
                  {thumbnail.length > 0 && thumbnail.map((img, idx) => (
                    <span key={idx}>
                      <span className={'img-delete'} onClick={() => {
                        delImg(img.att_idx)
                      }}>
                        <Close/>
                      </span>
                      <img className='form-input-img' src={baseURL + img.att_filepath} alt={'admin-img'}/>
                    </span>

                  ))}
                </div>
                <TextField className='form-input' size='small' type='file' name='prd_thumb' fullWidth
                           onChange={addThumbImg}
                ></TextField>
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">제품 사진</div>
              <div className="form-input-wrap flex">
                <div className={'slide-img-wrap'}>
                {imgUrls.length > 0 && imgUrls.map((img, idx) => (
                  <span key={idx}>
                      <span className={'img-delete'} onClick={() => {
                        delImg(img.att_idx)
                      }}>
                        <Close/>
                      </span>
                      <img className='form-input-img' src={baseURL + img.att_filepath} alt={'admin-img'}/>
                    </span>

                ))}
                </div>
                <TextField className='form-input' size='small' type='file' name='prd_thumb' fullWidth
                  onChange={addImg}
                ></TextField>
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">제품 이름</div>
              <div className="form-input-wrap">
                <TextField className='form-input' value={prdFormData.prd_name ?? ''} size='small' placeholder='제품명을 입력해주세요.' name='prd_name' fullWidth onChange={(e) => {
                  setprdFormData({
                    ...prdFormData,
                    prd_name: e.target.value
                  })
                }}></TextField>
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">제품 가격</div>
              <div className="form-input-wrap">
                <TextField className='form-input' value={prdFormData.prd_price ?? 0} size='small' placeholder='제품가격을 쉼표 없이 입력해주세요.' name='prd_price' fullWidth onChange={(e) => {

                  setprdFormData({
                    ...prdFormData,
                    prd_price: e.target.value
                  })
                }}></TextField>
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">상세내용</div>
              <div className="form-input-wrap">
                {<ReactQuill
                  className={'prd_content_quill'}
                  modules={quillModule}
                  theme="snow"
                  value={prdFormData.prd_content ?? ''}
                  placeholder='상세 설명글을 넣어주세요.'
                  onChange={(value) => {
                    setprdFormData({
                      ...prdFormData,
                      prd_content: value,
                    })
                  }}>
                </ReactQuill> }

              </div>
            </div>
          </div>
          <Divider component="li" style={{ marginBottom: '16px' }} />
          <div className="btn-wrap">
            <Button variant={'contained'} onClick={() => {
              editData()
            }}>
              수정하기
            </Button>
            <Button variant={'outlined'} color='error' onClick={() => { setprdalertModal(true) }}>삭제하기</Button>
            <Button variant={'outlined'} onClick={prdModalClose}>취소</Button>
          </div>
        </Box>
      </BasicModal>
      {/* 제품 삭제 경고 */}
      <Modal
        className={'prd-modal'}
        open={prdalertModal}
        onClose={() => { setprdalertModal(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 200,
          bgcolor: 'background.paper',
          borderRadius: '5px',
          boxShadow: 24,
          p: 0,
          overflow: 'hidden',
        }}>
          <div className="modal-title alert">
            <span>제품 삭제</span>
            <button className='close-btn' onClick={() => { setprdalertModal(false) }}><Close /></button>
          </div>
          <div className='prd_alert_inner'>
            <div>삭제 하시겠습니까?</div>
            <div>
              <Button className='prd_alert_btn mr-10' variant={'outlined'} color='primary' onClick={() => { delData() }}>확인</Button>
              <Button className='prd_alert_btn' variant={'outlined'} color='error' onClick={() => { setprdalertModal(false) }}>취소</Button>
            </div>
          </div>
        </Box>

      </Modal>
    </div>
  );
};

export default CategoryV2;
