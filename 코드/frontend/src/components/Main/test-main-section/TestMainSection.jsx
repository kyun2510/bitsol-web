import React from 'react'
import "./test-main-section.css";
// import gsap from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

export default function TestMainSection(props) {
    const {
        windowWidth
    } = props

    // gsap.registerPlugin(ScrollTrigger);

    return (
        <section className={'test-main-section'}>
            Hello World
        </section>
    )
}


