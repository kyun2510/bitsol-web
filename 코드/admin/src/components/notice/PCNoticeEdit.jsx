import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, NativeSelect, Table, TableBody, TableCell, TableRow, TextField} from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import api from "../../api/axios.js";
// import DefaultModal from "../../../features/DefaultModal.jsx";
// import Alert from "../../../features/Alert.jsx";

export default function PCNoticeEdit() {
    const reactQuillRef = useRef(null);
    const quillModule = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{'header': [1, 2, 3, 4, false]}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    ['image'],
                    ['clean']
                ],
                handlers: {
                    image: imageHandler,
                },
            }
        }
    }, [])

    async function imageHandler() {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.addEventListener("change", async () => {
            const file = input.files?.[0];
            const formData = new FormData();
            formData.append("files", file);
            formData.append("att_target_type", "PC_NOTICE");

            try {
                const res = await api.post(`uploads/notice_desktop`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                const editor = reactQuillRef.current.getEditor();
                const range = editor.getSelection();
                // 가져온 위치에 이미지를 삽입한다
                editor.insertEmbed(range.index, "image", res.data[0].att_filepath);
                // 성공적으로 수정되었을 때의 로직 (예: 알림 표시)
            } catch (error) {
                console.error('파일 업로드 실패', error);
                // 실패했을 때의 로직 (예: 에러 메시지 표시)
            }
        })
    }

    async function thumbImg (e) {
        const target = e.target.files[0]

        const imgForm = new FormData();
        imgForm.append('files', target)
        imgForm.append('att_target_type', 'PC_NOTICE')

        try {
            const res = await api.post(`uploads/notice_desktop`, imgForm);
            console.log(res);
           setFormData({
               ...formData,
               thumb_filepath: res.data[0].att_filepath
           })
        } catch (error) {
            console.error('파일 업로드 실패', error);
            // 실패했을 때의 로직 (예: 에러 메시지 표시)
        }
    }


    const {not_id} = useParams();
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem('ud'))
    const [tipData, setTipData] = useState(null)
    const [couponList, setCouponList] = useState(null)
    const [couponPage, setCouponPage] = useState({
        page: 1,
        pageRow: 4,
        totalCount: 0,
    })
    const [couponModal, setCouponModal] = useState(false)
    const [selectCoupon, setSelectCoupon] = useState({
        cou_id : 0,
        cou_name : '',
    })
    const [imgpath, setImgpath] = useState('')
    const [formData, setFormData] = useState({
        "tip_idx": not_id,
        "tip_title": "",
        "tip_sub_title": "",
        "tip_content": "",
        "ox_content": "",
        "ox_answer": "",
        "ox_comment": "",
        "reg_user": userData.id,
        "tip_status" : "Y",
    })

    useEffect(() => {
        pageMove()
    }, [couponPage.page]);
    useEffect(() => {
        getData();
        getcouponLIst();

    }, []);

    //건강팁 상세 내역 불러오기
    async function getData() {
        try {
            const {data} = await api.get(`noticedesktop/${not_id}`)

            setTipData(data.current);
            setFormData({
                ...formData,
                tip_title: data.current.tip_title,
                tip_type: data.current.tip_type,
                tip_sub_title: data.current.tip_sub_title,
                tip_content: data.current.tip_content,
                thumb_filepath: data.current.thumb_filepath,
                "ox_content": data.current.ox_content,
                "ox_answer": data.current.ox_answer,
                "ox_comment": data.current.ox_comment,
            })
            setSelectCoupon({
                cou_id: data.current.cou_id,
                cou_name : data.current.cou_name
            })
            if (data.current.thumb_filepath) {
                setImgpath(data.current.thumb_filepath);
            }
            // console.log(data);
        } catch (e) {
            alert('불러오기 실패')
            console.log(e);
            navigate(-1);
        }
    }

    async function getcouponLIst() {
        try {
            const {data} = await api.get(`coupon/list?page=${couponPage.page}`)
            // console.log(data);
            setCouponList(data);
            setCouponPage({
                ...couponPage,
                totalCount: data.totalcount,

            })

        } catch (e) {
            alert('쿠폰 목록 불러오기 실패')
            // navigate(-1)
        }
    }

    async function pageMove() {
        try {
            const {data} = await api.get(`coupon/list?page=${couponPage.page}`)
            // console.log(data);
            setCouponList(data);
            setCouponPage({
                ...couponPage,
            })
        }catch (e) {
            alert('쿠폰 목록 불러오기 실패')

        }
    }

    //수정 하기 서버에 전송
    async function Submit() {
        formData.cou_id = selectCoupon.cou_id
        // console.log(formData);
        try {
            const {status} = await api.put('noticedesktop', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (status === 200) {
                alert('수정 성공')
                getData();
            }
        } catch (e) {
            alert('수정 실패')
            console.error(e);
        }
    }

    function inputChange(e) {
        // console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (!tipData) return <div>Loading....</div>
    return (
        <section className='tip-edit-section'>
            <h2 className="title">
                <span>뉴스 상세 관리</span>
                <div className="btn-wrap">
                    <Button color={"primary"} variant={'outlined'} size={'small'} onClick={() => {
                        navigate(-1)
                    }}>뒤로하기</Button>
                </div>
            </h2>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className={'edit-th'}>제목</TableCell>
                        <TableCell className={'edit-td'}>
                            <TextField fullWidth id="standard-basic" label="제목" variant="standard" name={'tip_title'}
                                       defaultValue={tipData.tip_title} onChange={inputChange}/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={'edit-th'}>부 제목</TableCell>
                        <TableCell className={'edit-td'}>
                            <TextField fullWidth id="standard-basic" label="부제목" variant="standard" name='tip_sub_title'
                                       defaultValue={tipData.tip_sub_title} onChange={inputChange}/>
                        </TableCell>
                    </TableRow>
                    {formData.tip_type === 'QUIZ' && <TableRow>
                        <TableCell className={'edit-th'}>적용 쿠폰</TableCell>
                        <TableCell className={'edit-td'}>
                            <div className={'tip-coupon'}>
                                <span style={{marginRight: '20px'}}>{selectCoupon.cou_name}</span>
                                <button className='btn' onClick={() => {
                                    setCouponModal(true)
                                }}>변경하기
                                </button>
                            </div>
                        </TableCell>
                    </TableRow>}
                    {/*<TableRow>*/}
                    {/*    <TableCell className={'edit-th'}>타입</TableCell>*/}
                    {/*    <TableCell className={'edit-td'}>*/}
                    {/*        <NativeSelect*/}
                    {/*            fullWidth*/}
                    {/*            defaultValue={tipData.tip_type}*/}
                    {/*            inputProps={{*/}
                    {/*                name: 'tip_type',*/}
                    {/*            }}*/}
                    {/*            onChange={inputChange}*/}
                    {/*        >*/}
                    {/*            <option value={'MAIN'}>메인 노출</option>*/}
                    {/*            <option value={'ALL'}>일반</option>*/}
                    {/*            /!*<option value={'QUIZ'}>OX 퀴즈</option>*!/*/}
                    {/*        </NativeSelect>*/}
                    {/*    </TableCell>*/}
                    {/*</TableRow>*/}
                    {formData.tip_type === 'QUIZ' && <TableRow>
                        <TableCell className={'edit-th'}>정답</TableCell>
                        <TableCell className={'edit-td'}>
                            <NativeSelect
                                fullWidth
                                defaultValue={tipData.ox_answer}
                                inputProps={{
                                    name: 'ox_answer',
                                }}
                                onChange={inputChange}
                            >
                                <option value={'O'}>O</option>
                                <option value={'X'}>X</option>
                            </NativeSelect>
                        </TableCell>
                    </TableRow>}
                    <TableRow>
                        <TableCell className={'edit-th'}>내용</TableCell>
                        <TableCell className={'edit-td'}>
                            {formData.tip_type !== 'QUIZ' && <ReactQuill
                                ref={reactQuillRef}
                                modules={quillModule}
                                theme="snow"
                                defaultValue={tipData.tip_content}
                                onChange={(value) => {
                                    setFormData({
                                        ...formData,
                                        [tipData.tip_type === 'QUIZ' ? 'ox_content' : 'tip_content']: value,
                                    })
                                }}>
                            </ReactQuill> }
                            {formData.tip_type === 'QUIZ' && <textarea className={'ox_content'} defaultValue={tipData.ox_content} onChange={(e) => {

                                setFormData({
                                    ...formData,
                                    ox_content: e.target.value,
                                })

                            }}></textarea>}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={'edit-th'}>썸네일 이미지</TableCell>
                        <TableCell className={'edit-td'}>
                            {!!formData.thumb_filepath && (
                                <div className={'img-wrap'}>
                                    <img src={formData.thumb_filepath}/>
                                </div>
                            )}
                            <TextField fullWidth type={'file'} label="Standard" variant="standard" name='thumb_filepath'
                                       onChange={(e) => {
                                           thumbImg(e)
                                       }}/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="btn-wrap">
                <Button variant={'contained'} color={'primary'} onClick={Submit}>수정하기</Button>
            </div>
            {couponModal && <DefaultModal setView={setCouponModal} width={'500px'} height={'500px'}>
                <table>
                    <thead>
                    <tr>
                        <th>이름</th>
                        <th>관리</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>쿠폰 없음</td>
                        <td>
                            <div className="btn-wrap">
                                <button onClick={() => {
                                    setSelectCoupon({
                                        cou_id: 0,
                                        cou_name: null,
                                    })
                                    setCouponModal(false)
                                }}>적용하기</button>
                            </div>
                        </td>
                    </tr>
                    {couponList && couponList.list.map(coupon => (
                        <tr key={coupon.cou_id}>
                            <td>{coupon.cou_name}</td>
                            <td>
                                <div className="btn-wrap">
                                    <button onClick={() => {
                                        setSelectCoupon({
                                            cou_id: coupon.cou_id,
                                            cou_name: coupon.cou_name,
                                        })
                                        setCouponModal(false)
                                    }}>적용하기</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className='coupon-pagination'>
                    <Pagination currentPage={couponPage.page}
                                pageSize={couponPage.pageRow}
                                totalCount={couponPage.totalCount}
                    />
                </div>
            </DefaultModal>}

        </section>
    );

    function Pagination ({ currentPage, pageSize, totalCount }) {
        const totalPages = Math.ceil(totalCount / pageSize);

        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <div key={i} className={`coupon-page ${currentPage === i ? 'active' : ''}`} onClick={() => {
                    setCouponPage({
                        ...couponPage,
                        page: i
                    })
                }}>
                    {i}
                </div>
            );
        }

        return <div className='coupon-pagination'>{pages}</div>;
    }

}


