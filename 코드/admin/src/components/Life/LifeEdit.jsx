import { useEffect, useState, useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios.js";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function LifeEdit() {
  const { not_id } = useParams();
  const navigate = useNavigate();
  const reactQuillRef = useRef(null);

  const [noticeData, setNoticeData] = useState(null);
  const [imgpath, setImgpath] = useState("");
  const [formData, setFormData] = useState({
    not_id: parseInt(not_id),
    not_title: "",
    not_subtitle: "",
    not_content: "",
    thumb_filepath: "",
  });

  const quillModule = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          ["image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  useEffect(() => {
    getData();
  }, [not_id]);

  async function getData() {
    try {
      const { data } = await api.get(`notice/post/${not_id}`);
      setNoticeData(data);
      setFormData({
        not_id: data.not_id,
        not_title: data.not_title,
        not_subtitle: data.not_subtitle,
        not_content: data.not_content,
        thumb_filepath:
          data.thumb_filepath?.att_filepath || data.thumb_filepath || "",
      });
      if (data.thumb_filepath) {
        setImgpath(data.thumb_filepath.att_filepath || data.thumb_filepath);
      }
    } catch (e) {
      alert("Failed to load data");
      console.error(e);
      navigate(-1);
    }
  }

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
        const res = await api.post("uploads/notice", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          Accept: "*/*",
        });
        const editor = reactQuillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", res.data[0].att_filepath);
      } catch (error) {
        console.error("Failed to upload file", error);
      }
    });
  }

  async function thumbnailHandler(file) {
    try {
      const formData = new FormData();
      formData.append("files", file);
      formData.append("att_target_type", "NOTICE");
      formData.append("att_target", parseInt(not_id));

      const res = await api.post("uploads/notice", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        Accept: "*/*",
      });

      // 응답 데이터 로그 출력
      console.log("API Response:", res.data);

      if (res && res.data && res.data.length > 0) {
        const filePath = res.data[0].att_filepath;
        console.log("File Path:", filePath); // 파일 경로 로그 출력
        setImgpath(filePath);
        setFormData((prevFormData) => ({
          ...prevFormData,
          thumb_filepath: filePath,
        }));
      } else {
        console.error("Unexpected response structure:", res.data);
      }
    } catch (error) {
      console.error("Failed to upload file", error);
    }
  }

  async function submit() {
    try {
      const updatedFormData = {
        ...formData,
        thumb_filepath: imgpath,
      };
      const { status } = await api.put("notice/edit", updatedFormData);
      if (status === 200) {
        alert("작성완료");
        navigate(-1);
      }
    } catch (e) {
      alert("업데이트 실패");
      console.error(e);
    }
  }

  function inputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  if (!noticeData) return <div>Loading....</div>;
  return (
    <section className="tip-edit-section">
      <h2 className="title">
        <span>학교생활</span>
        <div className="btn-wrap">
          <Button
            color={"primary"}
            variant={"outlined"}
            size={"small"}
            onClick={() => navigate(-1)}
          >
            뒤로하기
          </Button>
        </div>
      </h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={"edit-th"}>제목</TableCell>
            <TableCell className={"edit-td"}>
              <TextField
                fullWidth
                label="제목"
                variant="standard"
                name={"not_title"}
                value={formData.not_title}
                onChange={inputChange}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={"edit-th"}>부 제목</TableCell>
            <TableCell className={"edit-td"}>
              <TextField
                fullWidth
                label="부제목"
                variant="standard"
                name="not_subtitle"
                value={formData.not_subtitle}
                onChange={inputChange}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={"edit-th"}>내용</TableCell>
            <TableCell className={"edit-td"}>
              <ReactQuill
                ref={reactQuillRef}
                modules={quillModule}
                theme="snow"
                value={formData.not_content}
                onChange={(value) =>
                  setFormData({ ...formData, not_content: value })
                }
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={"edit-th"}>썸네일 이미지</TableCell>
            <TableCell className={"edit-td"}>
              {!!imgpath && (
                <div className={"img-wrap"}>
                  <img src={imgpath} alt="Thumbnail" />
                </div>
              )}
              <TextField
                fullWidth
                type={"file"}
                variant="standard"
                name="thumb_filepath"
                onChange={(e) => {
                  const file = e.target.files[0];
                  thumbnailHandler(file);
                }}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="btn-wrap">
        <Button variant={"contained"} color={"primary"} onClick={submit}>
          수정하기
        </Button>
      </div>
    </section>
  );
}
