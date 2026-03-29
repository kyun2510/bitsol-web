import React, {useEffect, useState} from 'react'
import "./board-faq.css";
import SettingCategory from "../../../features/SettingCategory/SettingCategory";
import SettingClass from "../../../features/SettingClass/SettingClass";
import api from "../../../api/axios.js";

const BoardFaq = () => {
  const userData = JSON.parse(sessionStorage.getItem('ud'))
  const access_token = sessionStorage.getItem('at')

  const [facData, setFacData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [nav, setNav] = useState({
    page: 1,
    pagerow: 10,
    total_count: 0
  })
  useEffect(() => {
    getFaqData()
  }, [nav.page]);

  useEffect(() => {
    getFacData();
    // getFaqData();
  }, []);

  function pageChange(page) {
    setNav({
      ...nav,
      page: page
    })
  }

  async function getFacData() {
    try {
      const {data} = await api.get(`faq/category`)
      // console.log(data);
      setFacData(data);
      setFaqFormData({
        ...faqFormData,
        fac_idx: data[0].fac_idx
      })
      // setFaqData({
      //
      // })
    } catch (e) {
      console.error(e);
      alert('불러오기 실패')
    }
  }

  async function getFaqData() {
    try {
      const {data} = await api.get(`faq/post/list/all?page=${nav.page}`)
      // console.log(data);
      setFaqData(data.list);
      setNav({
        ...nav,
        total_count: data.totalCount
      })

    } catch (e) {
      console.error(e);
      alert('불러오기 실패')
    }
  }

  //카테고리 모달
  const [faqCategoryModal, setFaqCategoryModal] = useState(false);
  const [faqCategoryFormData, setFaqCategoryFormData] = useState({
    fac_title: '',
  })

  const faqCategoryOpen = () => setFaqCategoryModal(true)
  //카테고리 모달 닫기
  const faqCategoryClose = () => setFaqCategoryModal(false)

  //FAQ 카테고리 등록
  async function addFaqCatSubmit() {
    try {
      const formData = new FormData();

      formData.append('mem_idx', userData.id)
      formData.append('fac_title', faqCategoryFormData.fac_title)

      // console.log(formData);
      const result = await api.post('/faq/category/add', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      if (result.status === 200) {
        faqCategoryClose();
        getFacData();
        getFaqData()
        setFaqCategoryFormData({
          fac_title: '',

        })
      }

      console.log(result);
    } catch (e) {
      console.error('클래스 카테고리 등록 실패 : ', e)
    }
  }

  async function editFaqCatSubmit(fac_idx) {
    try {
      console.log('fac_idx::' + fac_idx)
      const formData = new FormData();
      formData.append('fac_title', faqCategoryFormData.fac_title)
      formData.append('upd_user', userData.id)
      formData.append('fac_idx', fac_idx)
      console.log(formData);
      const result = await api.put(`/faq/category`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      if (result.status === 200) {
        faqCategoryClose();
        getFacData();
        getFaqData()
        setFaqCategoryFormData({
          fac_title: '',

        })
      }
      console.log(result);
    } catch (e) {
      console.error('클래스 카테고리 수정 실패 : ', e)
    }
  }

  async function delFaqCatSubmit(fac_idx) {
    try {
      if (window.confirm(`분류를 삭제하시겠습니까?`)){
        const formData = {
          faqIds: [fac_idx]
        }

        const result = await api.post(`/faq/category/delete`, formData)
        if (result.status === 200) {
          faqCategoryClose();
          getFacData();
          getFaqData()
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  //FAQ 모달
  const [faqAddModal, setFaqAddModal] = useState(false);
  const [faqFormData, setFaqFormData] = useState({
    faq_title: '',
  })

  const faqAddOpen = () => setFaqAddModal(true)
  const faqAddClose = () => setFaqAddModal(false)

  //FAQ 등록 & 수정
  async function addFaqSubmit(faq_idx = null) {
    try {

      if (faq_idx === null) { //새 글 등록
        const formData = new FormData();

        formData.append('mem_idx', userData.id)
        formData.append('faq_title', faqFormData.faq_title)
        formData.append('faq_content', faqFormData.faq_content)
        formData.append('fac_idx', faqFormData.fac_idx)

        // console.log(formData);
        const result = await api.post('/faq/post', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        if (result.status === 200) {
          setFaqFormData({
            faq_title: '',
          })
          faqAddClose();
          getFaqData();
        }
      } else if (faq_idx) { //글 수정
        const formData = new FormData();

        formData.append('mem_idx', userData.id)
        formData.append('faq_title', faqFormData.faq_title)
        formData.append('faq_content', faqFormData.faq_content)
        formData.append('fac_idx', faqFormData.fac_idx)
        formData.append('faq_idx', faq_idx)

        const result = await api.put(`/faq/post`, formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        if (result.status === 200) {
          setFaqFormData({
            faq_title: '',
          })
          faqAddClose();
          getFaqData();

        }
      }

    } catch (e) {
      console.error('클래스 카테고리 등록 실패 : ', e)
    }
  }

  async function delFaq(faq_idx) {
    try {
      if (window.confirm(`게시글을 삭제하시겠습니까?`)){
        const formData = {
          faq_idx: faq_idx
        }
        const {status} = await api.post(`faq/post/delete`, formData)
        if (status === 200) {
          faqAddClose();
          getFaqData();
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function getFaqDetail(idx) {
    try {
      const {status, data} = await api.get(`/faq/post/${idx}`)

      if (status === 200) {
        setFaqFormData({
          faq_idx: data.faq_idx,
          fac_idx: data.fac_idx,
          fac_title: data.fac_title,
          faq_status: data.faq_status,
          faq_title: data.faq_title,
          faq_content: data.faq_content,
          reg_datetime: data.reg_datetime,
        })
      }
      faqAddOpen();

      // console.log(data);
    } catch (e) {
      console.log('클래스 상세 불러오기 실패')
    }
  }

  return (
    <div className="board-faq-section">
      <SettingCategory
        title={"FAQ 분류"}
        openModal={faqCategoryOpen}
        classCategoryClose={faqCategoryClose}
        classCategoryModal={faqCategoryModal}
        clsCategoryFormData={faqCategoryFormData}
        editClsCatSubmit={editFaqCatSubmit}
        delClsCatSubmit={delFaqCatSubmit}
        setData={setFaqCategoryFormData}
        submit={addFaqCatSubmit}
        childArray={facData}
      />
      <SettingClass
        title={"FAQ 목록"}
        childArray={faqData}
        openModal={faqAddOpen}
        getClsDetail={getFaqDetail}
        classAddModal={faqAddModal}
        classAddClose={faqAddClose}
        facData={facData}
        clsFormData={faqFormData}
        setClsFormData={setFaqFormData}
        getFaqData={getFaqData}
        // ClsCategoryData={FaqCategoryData}
        addClsSubmit={addFaqSubmit}
        pageChange={pageChange}
        nav={nav}
        delClass={delFaq}
      />
      {/*모달 설정*/}
    </div>
  );
};

export default BoardFaq;
