import React, { useEffect, useState } from "react";
import png from '../assets/1.png'
import ballon1 from '../assets/balloon1.png'
import ballon2 from '../assets/balloon2.png'
import decorate from '../assets/decorate.png'
import decoFlowers from '../assets/decorate_flower.png'
import hat from '../assets/hat.png'
import smileIcon from '../assets/smiley_icon.png'
import BookCanvas from "../components/BookCanvas";
import SmallLetter from "../components/SmallLetter";
import profileImg from "../assets/IMG_2234.jpg";

const Home = () => {
    // ------------------- Hooks 
    const [Active, SetActive] = useState(true)

    useEffect(() => {
        let datetxt = "17 Jul";
        let charArrDate = datetxt.split('');
        let currentIndex = 0;
        let date__of__birth = document.querySelector(".date__of__birth span");
        let typedText = "";

        setTimeout(function () {
            let timeDatetxt = setInterval(function () {
                if (currentIndex < charArrDate.length) {
                    typedText += charArrDate[currentIndex];
                    date__of__birth.textContent = typedText; // set fresh each time
                    currentIndex++;
                } else {
                    clearInterval(timeDatetxt);
                    if (!date__of__birth.classList.contains("svg-added")) {
                        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                        svg.setAttribute("width", "24");
                        svg.setAttribute("height", "24");
                        svg.setAttribute("viewBox", "0 0 24 24");
                        svg.innerHTML = `<path fill="#a31414" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"/> <path fill="#a31414" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" opacity="0.5"/>`;
                        let container = document.querySelector(".date__of__birth");
                        container.prepend(svg);
                        container.appendChild(svg.cloneNode(true));
                        date__of__birth.classList.add("svg-added");
                    }
                }
            }, 100);
        }, 12000);
    }, []);


    return (
        <>
            <div id="wrapper">
                <div className="flag__birthday">
                    <img src={png} alt="" width="350" className="flag__left" />
                    <img src={png} alt="" width="350" className="flag__right" />
                </div>

                <div className="content">
                    <div className="left">
                        <div className="title">
                            <h1 className="happy">
                                <span style={{ "--t": "4s" }}>H</span>
                                <span style={{ "--t": "4.2s" }}>a</span>
                                <span style={{ "--t": "4.4s" }}>p</span>
                                <span style={{ "--t": "4.6s" }}>p</span>
                                <span style={{ "--t": "4.8s" }}>y</span>
                            </h1>
                            <h1 className="birthday">
                                <span style={{ "--t": "5s" }}>B</span>
                                <span style={{ "--t": "5.2s" }}>i</span>
                                <span style={{ "--t": "5.4s" }}>r</span>
                                <span style={{ "--t": "5.6s" }}>t</span>
                                <span style={{ "--t": "5.8s" }}>h</span>
                                <span style={{ "--t": "6s" }}>d</span>
                                <span style={{ "--t": "6.2s" }}>a</span>
                                <span style={{ "--t": "6.4s" }}>y</span>
                            </h1>
                            <div className="hat">
                                <img src={hat} alt="" width="130" />
                            </div>
                        </div>

                        <div className="date__of__birth">
                            <span></span>
                        </div>

                        <div className="btn flex justify-center">
                            <div id="FromAditya" className="touch-friendly-btn">
                                <span className="flex items-center gap-2 md:text-[1rem] text-sm text-white">
                                    <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                                        <path fill="#fff" d="M65.086 55.5H6.878A2.877 2.877 0 0 1 4 52.623V17.248A2.25 2.25 0 0 1 6.248 15h59.446A2.306 2.306 0 0 1 68 17.306v35.28a2.914 2.914 0 0 1-2.914 2.914" />
                                        <path fill="#ea5a47" d="M47.064 33.552A5.885 5.885 0 0 0 36 30.755a5.885 5.885 0 0 0-11.064 2.797c0 1.398.49 2.68 1.304 3.69l-.002.002L36 49.342l9.762-12.098l-.003-.002a5.86 5.86 0 0 0 1.305-3.69" />
                                        <g fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M65.086 55.5H6.878A2.877 2.877 0 0 1 4 52.623V17.248A2.25 2.25 0 0 1 6.248 15h59.446A2.306 2.306 0 0 1 68 17.306v35.28a2.914 2.914 0 0 1-2.914 2.914" />
                                            <path strokeLinecap="round" d="m5 16l15 16m47-16L52 32" />
                                            <path strokeLinejoin="round" d="M47.064 33.552A5.885 5.885 0 0 0 36 30.755a5.885 5.885 0 0 0-11.064 2.797c0 1.398.49 2.68 1.304 3.69l-.002.002L36 49.342l9.762-12.098l-.003-.002a5.86 5.86 0 0 0 1.305-3.69z" />
                                        </g>
                                    </svg>
                                    From Aditya
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="box__account">
                            <div className="image">
                                <img src={profileImg} alt="" />
                            </div>
                            <div className="name">
                                <i className="fa-solid fa-heart"></i>
                                <span>Dear Riddhima</span>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className="balloon_one">
                                <img width="100px" src={ballon1} alt="" />
                            </div>
                            <div className="balloon_two">
                                <img width="100px" src={ballon2} alt="" />
                            </div>
                        </div>

                        <div className="cricle">
                            <div className="text__cricle">
                                {["h", "a", "p", "p", "y", "-", "b", "i", "r", "t", "h", "d", "a", "y", "-"].map(
                                    (char, i) => (
                                        <span key={i} style={{ "--i": i + 1 }}>
                                            {char}
                                        </span>
                                    )
                                )}
                            </div>
                            <i className="fa-solid fa-heart"></i>
                        </div>
                    </div>
                </div>

                {[1, 2, 3, 4, 5].map((n, i) => (
                    <div key={i} className={`decorate_star star${n}`} style={{ "--t": `${15 + i * 0.2}s` }}></div>
                ))}

                <div className="decorate_flower--one" style={{ "--t": "15s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>
                <div className="decorate_flower--two" style={{ "--t": "15.3s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>
                <div className="decorate_flower--three" style={{ "--t": "15.6s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>

                <div className="decorate_bottom">
                    <img src={decorate} alt="" width="100" />
                </div>

                <div className="smiley__icon">
                    <img src={smileIcon} alt="" width="100" />
                </div>






                {/* =========================== BoxMail Canvas =============================== */}
                <BookCanvas active={Active} setActive={SetActive} />

                {/* ========================== Small letter from rajib ========================= */}
                <section className="smallLetter absolute md:-bottom-26 -bottom-40 md:left-[45%] left-[50%] -translate-x-1/2" style={{ "--t": "15.6s" }}>
                    <SmallLetter />
                </section>
            </div>
        </>
    );
};

export default Home;
