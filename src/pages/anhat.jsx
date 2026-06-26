import React, { useEffect } from 'react';
import { Navbar, App, LrahosSlider, Head, Foot } from '../App';
export default function Anhat() {
    useEffect(() => {
        let scrol1 = document.querySelectorAll(".scrol1");
        let scrol2 = document.querySelectorAll(".scrol2");

        let handleScroll = () => {
            if (window.scrollY >= 200 && window.scrollY <= 1000) {
                scrol1.forEach(el => el.classList.add("anim"));
                scrol2.forEach(el => el.classList.add("animright"));
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <>
                <div id="main">
                    <header>
                        <div className="fix">
                            <Head />
                        </div>
                    </header>
                    <div id="swp">
                        <App />
                    </div>
                    <div className="contanier3 grid">
                        <div className="sectionmek">
                            <div className="marg">
                                <div className="mek scrol1">
                                    <span
                                        style={{ color: "white", fontSize: 30, fontFamily: "sans-serif" }}
                                    >
                                        <strong>Բջջային կապ</strong>
                                    </span>
                                    <span className="hov">
                                        Ավելին <span style={{ color: "#f04d4d" }}>&gt;</span>
                                    </span>
                                </div>
                                <div className="erku">
                                    <img
                                        src="https://www.telecomarmenia.am/images/promo/1/16509682370213.png"
                                        style={{ borderRadius: 15 }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="marg">
                                <div className="mek scrol2">
                                    <span
                                        style={{ color: "white", fontSize: 30, fontFamily: "sans-serif" }}
                                    >
                                        <strong>Ֆիքսված կապ</strong>
                                    </span>
                                    <span className="hov">
                                        Ավելին <span style={{ color: "#f04d4d" }}>&gt;</span>
                                    </span>
                                </div>
                                <div className="erku">
                                    <img
                                        src="https://www.telecomarmenia.am/images/promo/1/1650969068409.png"
                                        style={{ borderRadius: 15 }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sectionerku">
                            <div className="marg">
                                <div className="mek scrol1">
                                    <span
                                        style={{ color: "white", fontSize: 30, fontFamily: "sans-serif" }}
                                    >
                                        <strong>Հավելվածներ</strong>
                                    </span>
                                    <span className="hov">
                                        Ավելին <span style={{ color: "#f04d4d" }}>&gt;</span>
                                    </span>
                                </div>
                                <div className="erku">
                                    <img
                                        src="https://www.telecomarmenia.am/images/promo/1/16509690498367.png"
                                        style={{ borderRadius: 15 }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="marg nk" style={{ position: "relative" }}>
                                <div className="mek scrol2" style={{ width: "100%" }}>
                                    <span
                                        className="zzz"
                                        style={{
                                            color: "white",
                                            fontSize: 30,
                                            fontFamily: "sans-serif",
                                            position: "relative",
                                            zIndex: 900
                                        }}
                                    >
                                        <strong>Ինտերնետ և TV</strong>
                                    </span>
                                    <span className="hov">
                                        Ավելին <span style={{ color: "#f04d4d" }}>&gt;</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arajark">
                    <h1
                        style={{
                            fontSize: 50,
                            color: "white",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            marginBottom: 15
                        }}
                    >
                        ԴԱՐՁԵՔ TEAM ՀԱՃԱԽՈՐԴ
                    </h1>
                    <p style={{ fontSize: 18, color: "white", marginBottom: 20 }}>
                        Միացե՛ք մեզ ձեր համարով և օգտվեք Team-ի բոլոր առավելություններից:
                    </p>
                    <button
                        style={{
                            width: 250,
                            padding: 10,
                            borderRadius: 20,
                            backgroundColor: "#f04d4d",
                            color: "white",
                            border: 0,
                            fontSize: 18,
                            fontFamily: "sans-serif",
                            cursor: "pointer"
                        }}
                    >
                        ՄԻԱՆԱԼ
                    </button>
                </div>
                <div id="lrahosswiper" style={{ position: "relative" }}>
                    <LrahosSlider />
                </div>
                <div />
                <div className="appsblock">
                    <div className="contanier3 min">
                        <div className="appsblockleft">
                            <h1
                                style={{
                                    fontSize: 55,
                                    color: "#2c3843",
                                    fontFamily: "sans-serif",
                                    marginBottom: 30,
                                    marginTop: 55
                                }}
                            >
                                Հավելված My Team
                            </h1>
                            <p
                                style={{
                                    color: "#2c3843",
                                    fontFamily: "sans-serif",
                                    marginBottom: 21
                                }}
                            >
                                Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար
                            </p>
                            <p
                                style={{
                                    color: "#2c3843",
                                    fontFamily: "sans-serif",
                                    marginBottom: 21
                                }}
                            >
                                Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ
                                հնարավորություններից
                            </p>
                            <div className="appsblocklink">
                                <div className="qr">
                                    <img
                                        width="90px"
                                        height="90px"
                                        src="https://www.telecomarmenia.am/img/redesign/qr.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="gogapp">
                                    <img
                                        style={{ cursor: "pointer" }}
                                        src="https://www.telecomarmenia.am/img/redesign/app_store.png"
                                        alt=""
                                    />
                                    <img
                                        style={{ cursor: "pointer" }}
                                        src="https://www.telecomarmenia.am/img/redesign/google_play.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="appsblockright"></div>
                    </div>
                </div>
                <footer>
                    <Foot />
                </footer>
                {/* vsyo */}
            </>

        </div>
    );
}
