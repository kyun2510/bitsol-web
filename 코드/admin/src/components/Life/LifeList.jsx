import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import api from "../../api/axios.js";
import { NavLink, useNavigate } from "react-router-dom";
import Alert from "../../features/Alert.jsx";
import Box from "@mui/material/Box";
import { faqCategoryModalstyle } from "../../features/SettingCategory/board-faq.js";
import { Close } from "@mui/icons-material";
// import ReactQuill from "react-quill";
import Divider from "@mui/material/Divider";
import BasicModal from "../../features/basic-modal/Basic-Modal.jsx";

export default function LifeList() {
  const userData = JSON.parse(sessionStorage.getItem("ud"));
  const navigate = useNavigate();
  const [noticeData, setNoticeData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [delObj, setDelObj] = useState({});
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [delAlert, setDelAlert] = useState({
    active: false,
    idx: 0,
  });
  const [tempFormData, setTempFormData] = useState({
    tip_type: "TIP",
    not_title: "제목",
    tip_sub_title: "부제목",
    tip_content: "팁 콘텐트",
    ox_content: "",
    ox_comment: "",
    reg_user: userData.id,
  });
  useEffect(() => {
    getData();
    console.log();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  let status;

  // async function getData() {
  //   try {
  //     let { data } = await api.get('notice/list');
  //     if (data && data.length > 0) { setNoticeData(data); }
  //   } catch (e) {
  //     alert('불러오기 오류');
  //     console.error(e);
  //   }
  // }

  // 제품 등록
  //제품 모달 닫기
  const prdModalClose = () => {
    setPrdFormData({
      not_title: "",
      not_subtitle: "",
      not_content: "",
      thumb_filepath: "",
      reg_user: userData.id,
    });
    setprdModal(false);
  };
  //제품 모달 열기
  const prdModalOpen = () => setprdModal(true);
  const [prdModal, setprdModal] = useState(false);
  const [prdFormData, setPrdFormData] = useState({
    not_title: " ",
    not_subtitle: " ",
    not_content: " ",
    thumb_filepath: " ",
    reg_user: userData.id,
  });

  async function getData() {
    try {
      const { data } = await api.get("notice/list", {
        params: {
          page: page + 1, // pages are 1-indexed on the server
          itemsPerPage: rowsPerPage,
        },
      });
      if (data) {
        setNoticeData(data.posts || []);
        setTotalCount(data.totalCount || 0);
      }
    } catch (e) {
      alert("불러오기 오류");
      console.error(e);
    }
  }

  async function addData() {
    try {
      const { data, status } = await api.post("notice/write", {
        title: prdFormData.not_title,
        subtitle: prdFormData.not_subtitle,
        content: prdFormData.not_content,
      });

      // console.log(data , "data??")

      if (status === 200) {
        setPrdFormData({
          ...prdFormData,
          not_id: data.not_id,
        });
        navigate(`/board/life/${data}`);
      }
    } catch (e) {
      alert("등록 실패");
      console.error(e);
    }
  }

  async function delSubmit() {
    const formData = {
      deleteIdxsList: [],
    };
    for (let key in delObj) {
      if (delObj[key]) {
        console.log(formData, "?");

        formData.deleteIdxsList.push(key);
      }
    }

    try {
      const { status } = await api.put("notice/delete", formData);
      // console.log(res);
      if (status === 200) {
        alert("삭제 성공");
        setDelAlert({
          ...delAlert,
          active: false,
        });
        getData();
      }
    } catch (e) {
      alert("삭제 실패");
      console.error(e);
    }
  }

  console.log(noticeData, "noticeData ??");

  if (!noticeData)
    return (
      <section className={"tip-list-section"}>
        <h2 className="title">
          <span>학원생활</span>
          <div className="btn-wrap">
            <Button
              color={"primary"}
              variant={"outlined"}
              size={"small"}
              onClick={() => {
                setDelAlert({
                  ...delAlert,
                  active: true,
                });
              }}
            >
              선택 삭제하기
            </Button>
          </div>
        </h2>
        <div>Loading....</div>
      </section>
    );
  return (
    <section className={"tip-list-section"}>
      <h2 className="title">
        <span>학원생활</span>
        <div className="btn-wrap">
          <button
            className="add-class-button"
            onClick={() => {
              addData();
            }}
          >
            + 추가
          </button>
          <Button
            color={"primary"}
            variant={"outlined"}
            size={"small"}
            onClick={() => {
              setDelAlert({
                ...delAlert,
                active: true,
              });
            }}
          >
            선택 삭제하기
          </Button>
        </div>
      </h2>
      <div>
        <Table className={"tip-table"}>
          <TableHead className={"t-head"}>
            <TableRow className={"list-tr"}>
              <TableCell align={"center"} className={"list-th"}></TableCell>
              <TableCell align={"center"} className={"list-th"}>
                번호
              </TableCell>
              <TableCell align={"center"} className={"list-th"}>
                썸네일
              </TableCell>
              <TableCell align={"center"} className={"list-th"}>
                제목
              </TableCell>
              <TableCell align={"center"} className={"list-th"}>
                부 제목
              </TableCell>
              <TableCell align={"center"} className={"list-th"}>
                작성일자
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {noticeData.map((row) => (
              <TableRow key={row.not_id}>
                <TableCell align={"center"} className={"list-td"}>
                  <Checkbox
                    size={"small"}
                    onChange={(e) => {
                      setDelObj({
                        ...delObj,
                        [row.not_id]: e.target.checked,
                      });
                    }}
                  />
                </TableCell>
                <TableCell align={"center"} className={"list-td"}>
                  {row.not_id}
                </TableCell>
                <TableCell align={"center"} className={"list-td"}>
                  <div className="img-wrap">
                    {row.thumb_filepath && <img src={row.thumb_filepath} />}
                  </div>
                </TableCell>
                <TableCell align={"center"} className={"list-td"}>
                  <NavLink className={"list-link"} to={`${row.not_id}`}>
                    {row.not_title}
                  </NavLink>
                </TableCell>
                <TableCell align={"center"} className={"list-td"}>
                  {row.not_subtitle}
                </TableCell>
                <TableCell align={"center"} className={"list-td"}>
                  {row.not_datetime.slice(0, 10)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={noticeData.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={"보여질 글 수"}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      {delAlert.active && (
        <Alert setView={setDelAlert} delapi={delSubmit}>
          삭제하시겠습니까?
        </Alert>
      )}

      <BasicModal
        cusClass="prd-modal"
        openState={prdModal}
        closeState={prdModalClose}
      >
        <Box sx={faqCategoryModalstyle}>
          <div className="modal-title">
            <span>제품 관리</span>
            <button className="close-btn" onClick={prdModalClose}>
              <Close />
            </button>
          </div>
          <div className="modal-content">
            <div className="form-box">
              <div className="form-title">제품 사진</div>
              <div className="form-input-wrap flex">
                <div className={"slide-img-wrap"}>
                  <input type={"file"} />
                </div>
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">제품 이름</div>
              <div className="form-input-wrap">
                {/*<input type={'text'} onChange={setNewNotice(...prev, name : e.target.value)}/>*/}
              </div>
            </div>
            <div className="form-box">
              <div className="form-title">상세내용</div>
              <div className="form-input-wrap">
                <input type={"text"} />
              </div>
            </div>
          </div>
          <Divider component="li" style={{ marginBottom: "16px" }} />
          <div className="btn-wrap">
            <Button
              variant={"contained"}
              onClick={() => {
                addData();
              }}
            >
              추가하기
            </Button>
            {/*<Button variant={'outlined'} color='error' onClick={() => { setprdalertModal(true) }}>삭제하기</Button>*/}
            <Button variant={"outlined"} onClick={prdModalClose}>
              취소
            </Button>
          </div>
        </Box>
      </BasicModal>
    </section>
  );
}
