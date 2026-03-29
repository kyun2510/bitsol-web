import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { FilledInput, FormControl, InputAdornment } from "@mui/material";
import { Person, Lock } from "@mui/icons-material";

import "../../assets/css/members/login_v2.css";

export default function Login_V2() {
  const [values, setValues] = useState({
    id: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.id.trim() || !values.password.trim()) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const authChk = await api.post("members/auth/check", {
        loginId: values.id,
        loginPass: values.password,
      });

      if (authChk.status === 200 && authChk.data.mem_auth >= 7) {
        const response = await api.post("members/authorize", {
          loginId: values.id,
          loginPass: values.password,
        });

        if (response.status === 200) {
          // 로그인 성공
          dispath(
            login({
              id: response.data.userData.id,
              name: response.data.userData.name,
              email: "",
              auth: response.data.userData.auth,
            })
          );
          sessionStorage.setItem("at", response.data.accessToken);
          sessionStorage.setItem("rt", response.data.refreshToken);
          sessionStorage.setItem("ud", JSON.stringify(response.data.userData));

          // 대시보드로 리다이렉트
          navigate("/");
        } else {
          alert("로그인에 실패했습니다. 다시 시도해주세요.");
        }
      } else {
        alert("관리자 권한이 없습니다.");
      }
    } catch (error) {
      console.error("로그인 중 에러 발생:", error);
      if (error.response?.status === 400) {
        alert(error.response.data.error || "아이디 또는 비밀번호가 틀렸습니다.");
      } else if (error.response?.status === 503) {
        alert("회원 정보를 찾을 수 없습니다.");
      } else {
        alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className="form-warp">
      <div className="ready-card">
        <span className={"ready-card-text"}>빛솔학원 ADMIN</span>
        <div className={"ready-card-back"}>
          <img src="/admin/logo/1.png" alt="배경이미지" />
        </div>
      </div>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">Log In</div>
          <div className="form-sub-title">
            관리자 계정으로 로그인하세요
          </div>
          <FormControl sx={{ marginBottom: "20px" }} variant="standard">
            <FilledInput
              id="user-id"
              type="text"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
              autoComplete="off"
              autoFocus={true}
              placeholder="ID"
              name="id"
              onChange={handleChange}
              value={values.id}
            />
          </FormControl>
          <FormControl sx={{ marginBottom: "20px" }} variant="standard">
            <FilledInput
              id="user-pw"
              type="password"
              disableUnderline={true}
              autoComplete="off"
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </FormControl>
          {/*<label>*/}
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    name="id"*/}
          {/*    value={values.id}*/}
          {/*    onChange={handleChange}*/}
          {/*    placeholder="ID를 입력해주세요."*/}
          {/*  />*/}
          {/*</label>*/}
          {/*<label>*/}
          {/*  <input*/}
          {/*    type="password" // 비밀번호 필드이므로 type을 "password"로 변경*/}
          {/*    name="password"*/}
          {/*    value={values.password}*/}
          {/*    onChange={handleChange}*/}
          {/*    placeholder="PassWord를 입력해주세요."*/}
          {/*  />*/}
          {/*</label>*/}
          <button type="submit">Log - in</button>
        </form>
      </div>
    </div>
  );
}
