import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ty-u-header.css";

export default function TyUHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="ty-u-header">
            <div className="ty-u-header-container">
                <div className="ty-u-header-logo">
                    <Link to="/">
                        <h1>
                            <img src={"/images/ty-u-header/logo.png"} alt="빛솔학원 로고" />
                        </h1>
                    </Link>
                </div>
                <div className={`ty-u-header-hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
                </div>
                <ul className="ty-u-header-right-wrap">
                    <li className="ty-u-header-right">
                        <Link to="/about">학원소개</Link>
                    </li>
                    <li className="ty-u-header-right">
                        <Link to="/vision">학원비전</Link>
                    </li>
                    <li className="ty-u-header-right">
                        <Link to="/recruitment">모집안내</Link>
                    </li>
                    <li className="ty-u-header-right">
                        <Link to="/contact">
                            문의하기
                        </Link>
                    </li>
                    <li className="ty-u-header-right">
                        <Link className={`link-color-black`} to="/notice">
                            공지사항
                        </Link>
                    </li>

                </ul>
                <nav className={`ty-u-header-menu ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li onClick={toggleMenu}>
                            <Link to="/about">학원소개</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="/vision">학원비전</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="/recruitment">모집안내</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="/contact">문의하기</Link>
                        </li>
                        <li onClick={toggleMenu}>
                            <Link to="/notice">공지사항</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}