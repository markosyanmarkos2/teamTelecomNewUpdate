import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


import { db } from "./firebase";
import { doc, collection, getDocs, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Anhat from './pages/anhat';
import About from './pages/biznes';
import eshop from './pages/eshop';
import Andzsen from './pages/andzsen';
import Eshop from './pages/eshop';
import Teamtv from './pages/teamtv';
import Myteam from './pages/myteam';
import Teampay from "./pages/teampay"
import Teamenergy from './pages/teamenergy';
import { arr } from "./index"
function Navbar() {
  return (
    <>


      <div id="mas1">
        <NavLink to="/" className="align">Անհատներին</NavLink>
        <NavLink to="/biznes" className="align font">Բիզնես</NavLink>
        <NavLink to="/eshop" className="align gap"><img src="https://www.telecomarmenia.am/img/eshop-icon.svg" alt="E-shop" />E-shop</NavLink>
      </div>
      <div className="mas2">
        <div className="xumb1 ">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "rgb(255, 255, 255)", fontSize: 13 }}
          />
        </div>
        <div className="xumb2">
          <div className="nav">
            <span className="fc" style={{ color: "#f04d4d" }}>
              Հայ
            </span>
            <span className="fc">Рус</span>
            <span className="fc">Eng</span>
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/andzsen">
          <div className="xumb3">
            <div className="ops">
              <i
                className="fa-regular fa-user"
                style={{ color: "rgb(255, 255, 255)" }}
              />
              <span
                style={{
                  color: "white",
                  fontFamily: "monospace",
                  fontSize: 14
                }}
              >
                Անձնական գրասենյակ
              </span>
            </div>
          </div>
        </Link>
      </div>


    </>
  );
}



function Apps() {
  return (
    <Routes>
      <Route path="/" element={<Anhat />} />
      <Route path="/biznes" element={<About />} />
      <Route path="/eshop" element={<Eshop />} />
      <Route path='/andzsen' element={<Andzsen />}></Route>
      <Route path='/teamtv' element={<Teamtv />}></Route>
      <Route path='/myteam' element={<Myteam />}></Route>
      <Route path='/teampay' element={<Teampay />}></Route>
      <Route path='/teamenergy' element={<Teamenergy />}></Route>
    </Routes>
  );
}
function FooterRoute() {
  return (
  <>
  <li className="hoverion"><Link to="/teamtv" > TeamTv</Link></li>
  <li className="hoverion"><Link to="/myteam">My Team</Link></li>
  <li className="hoverion"><Link to="/teampay">Team Pay</Link></li>
  <li className="hoverion"><Link to="/teamenergy">Team Energy</Link></li>
    
    
    
    
    
  </>
  )
}
function Head() {
  return (
    <>
      <div className="contanier">
        <div className="headeriTop">
          <Navbar />
        </div>
      </div>
      <div className="contanier2">
        <div className="headerBottom">
          <div id="mas1">
            <img
              src="https://www.telecomarmenia.am/img/logo.svg?v=1"
              width="131px"
              height="54px"
            />
          </div>
          <div id="mas2">
            <nav style={{ display: "flex", height: 58 }} className="navig">
              <div className="diver">
                <span>Սակագներ</span>
                <div className="taqnvacmas">
                  <ul
                    style={{
                      listStyle: "none",
                      borderBottomLeftRadius: 10,
                      backgroundColor: "aliceblue",
                      borderBottomRightRadius: 10
                    }}
                  >
                    <li className="ggg">Բջջային կապ</li>
                    <li className="ggg">Ինտերնետ և TV - ԿՈՍՄՈ</li>
                    <li className="ggg">Ինտերնետ և TV - ԿՈՄԲՈ</li>
                    <li style={{ padding: 10 }}>Ֆիքսված հեռախոսակապ</li>
                  </ul>
                </div>
              </div>
              <div className="diver">
                <span>Ինտերնետ</span>
                <div className="taqnvacmas">
                  <ul
                    style={{
                      listStyle: "none",
                      borderBottomLeftRadius: 10,
                      backgroundColor: "aliceblue",
                      borderBottomRightRadius: 10
                    }}
                  >
                    <li className="ggg">Սմարթֆոնի համար</li>
                    <li className="ggg">Տան համար - ԿՈՍՄՈ</li>
                    <li className="ggg">Տան համար - ԿՈՄԲՈ</li>
                    <li className="ggg">համակարգչի/պլանշետի համար</li>
                    <li style={{ padding: 10 }}>Team 5G</li>
                  </ul>
                </div>
              </div>
              <div className="diver">
                <span>Ծառայություններ</span>
                <div className="taqnvacmas">
                  <ul
                    style={{
                      listStyle: "none",
                      borderBottomLeftRadius: 10,
                      backgroundColor: "aliceblue",
                      borderBottomRightRadius: 10
                    }}
                  >
                    <li className="ggg">TeamTV</li>
                    <li className="ggg">վճարում և համալրում</li>
                    <li className="ggg">Զվարճանք</li>
                    <li className="ggg">Զանգեր և անվտանգություն</li>
                    <li style={{ padding: 10 }}>Ֆիքսված հեռախոսակապ</li>
                  </ul>
                </div>
              </div>
              <div className="diver">
                <span>Ռոումինգ</span>
                <div className="taqnvacmas">
                  <ul
                    style={{
                      listStyle: "none",
                      borderBottomLeftRadius: 10,
                      backgroundColor: "aliceblue",
                      borderBottomRightRadius: 10
                    }}
                  >
                    <li className="ggg">Ռոումինգ</li>
                    <li className="ggg">Միջազգային կապ</li>
                    <li className="ggg">Օգտակար տեղեկատվություն</li>
                    <li style={{ padding: 10 }}>Ծառայություններ</li>
                  </ul>
                </div>
              </div>
              <div className="diver">
                <span>Առցանց խանութ</span>
                <div className="taqnvacmas">
                  <ul
                    style={{
                      listStyle: "none",
                      borderBottomLeftRadius: 10,
                      backgroundColor: "aliceblue",
                      borderBottomRightRadius: 10
                    }}
                  >
                    <li className="ggg">E-shop</li>
                    <li className="ggg">Առցանց ապառիկ</li>
                    <li style={{ padding: 10 }}>Բաժանորդագրություն</li>
                  </ul>
                </div>
              </div>
              <div className="diver">
                <span>Առաջարկներ</span>
                <div className="taqnvacmas">
                  <ul
                    style={{
                      listStyle: "none",
                      borderBottomLeftRadius: 10,
                      backgroundColor: "aliceblue",
                      borderBottomRightRadius: 10
                    }}
                  >
                    <li className="ggg">Շեյքիր և Շահիր</li>
                    <li className="ggg">Team Բոնուս</li>
                    <li className="ggg">Ակցիաներ</li>
                    <li className="ggg">MobiBattle</li>
                    <li className="ggg">GeForce Games</li>
                    <li style={{ padding: 10 }}>Koreez</li>
                  </ul>
                </div>
              </div>
              <div className="diver">
                <span>Օգնություն</span>
                <div className="taqnvacmas">
                  <ul
                    style={{
                      listStyle: "none",
                      borderBottomLeftRadius: 10,
                      backgroundColor: "aliceblue",
                      borderBottomRightRadius: 10
                    }}
                  >
                    <li className="ggg">Հաճախ տրվող հարցեր</li>
                    <li className="ggg">Սարքերի կարգավորումներ</li>
                    <li className="ggg">Բաժանորդային սպասարկում</li>
                    <li style={{ padding: 10 }}>
                      USSD <br /> Հրահանգներ և օգտակար համարներ
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div id="mas3">
            <div className="vec">
              <i
                className="fa-brands fa-cc-visa"
                style={{ color: "rgb(0, 0, 0)", fontSize: 25 }}
              />
              <span className="vec-text">Վճարումներ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Owl() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 20,
    },
  });

  // return (

  // );
}
function EshopSlider() {
  let [eshop, setNews] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let fetch = async () => {
      try {
        let eshopSlider = collection(db, "eshop");
        let querySnapshot = await getDocs(eshopSlider);

        let allslide = [];

        querySnapshot.docs.forEach((doc) => {
          let docData = doc.data();

          let currentDocArray = Object.values(docData);

          allslide = [...allslide, ...currentDocArray];
        });

        setNews(allslide);
      } catch (error) {
        console.error("Տվյալները ստանալիս սխալ տեղի ունեցավ: ",);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);
  return (
    <div className="swp" style={{ width: '100%' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        loop={true}
      >
        {eshop.map((el) => (
          <SwiperSlide className='jst'><img src={el} alt="" /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
function Get() {
  let [appo, setNews] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let fetchNews = async () => {
      try {
        let appo = collection(db, "apranqnerslider");
        let querySnapshot = await getDocs(appo);

        let allNewsData = [];

        querySnapshot.docs.forEach((doc) => {
          allNewsData.push({
            ...doc.data(),
          });
        });

        setNews(allNewsData);
      } catch (error) {
        console.error("Տվյալները ստանալիս սխալ տեղի ունեցավ: ",);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 25,
    },
  });
  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <>
    
      <div ref={sliderRef} className='keen-slider essl'>
        {appo.map((el) => (
          <div className='keen-slider__slide yndi ' style={{
          }}>
            <div className="ynd">
              <div className="mas1eshop pd">
              <h2>{el.title}</h2>
            </div>
            <div className="mas2eshop pd">
              <span>
                <input type="checkbox" />
                {el.span}
              </span>
            </div>
            <div className="mas3eshop pd">
                <img src={el.img} alt="" />
            </div>
            <div className="mas4eshop pd">
              <div className="gnayin">{el.gin}</div>
            </div>
            <div className="mas5eshop pd">
              <div className="bt" style={{marginTop:"20px"}}>
                <span className='zamb'></span>
                <span >Ավելացնել զամբյուղ</span>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
function LrahosSlider() {
  let [info, setNews] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    let fetchNews = async () => {
      try {
        let infoCollection = collection(db, "info");
        let querySnapshot = await getDocs(infoCollection);

        let allNewsData = [];

        querySnapshot.docs.forEach((doc) => {
          let docData = doc.data();

          let currentDocArray = Object.values(docData);

          allNewsData = [...allNewsData, ...currentDocArray];
        });

        setNews(allNewsData);
      } catch (error) {
        console.error("Տվյալները ստանալիս սխալ տեղի ունեցավ: ",);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 30,
    },
  });
  if (loading) {
    return <div className="spinner" style={{ display: "flex", alignItems: "center" }}>Սպասեք, տվյալները բեռնվում են...</div>;
  }
  console.log(info);

  return (
    <div className="lrahosSwiper" style={{ maxWidth: "1300px", margin: "auto", padding: "80px 0", boxSizing: "border-box" }}>
      <div className="text" style={{ display: "flex", justifyContent: "center", fontSize: "20px", color: "#2c3843", marginBottom: "20px" }}>
        <h1>ԼՐԱՀՈՍ</h1>
      </div>
      <button
        onClick={() => instanceRef.current?.prev()}
        style={btnLeft}
      >
        ‹
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        style={btnRight}
      >
        ›
      </button>
      <div ref={sliderRef} className='keen-slider'>
        {info.map((el) => (
          <div className='keen-slider__slide' style={{
            maxWidth: "300px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2",
            cursor: "pointer",

          }}>
            <img src={el.img} alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>{el.data}</span>
              <span className='wegb' style={{ fontSize: "25px", fontWeight: "900", color: "#2c3843", }}>{el.title}</span>
            </div>
          </div>
        ))}
      </div>
      {/* {info.map((el) => (
          <SwiperSlide style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
            {el.map((item) => {
              return (
                <div style={{
                  width: "400px",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  border: "0.5px solid rgb(227, 227, 227)",
                  backgroundColor: "#f2f2f2",
                  cursor: "pointer"
                }}>
                  <img src={item.img} alt="" />
                  <div className="paddi">
                    <span style={{ color: "#666e75", paddingBottom: "10px" }}>{item.data}</span>
                    <span className='wegb' style={{ fontSize: "25px", fontWeight: "900", color: "#2c3843", }}>{item.title}</span>
                  </div>
                </div>
              );
            })}

          </SwiperSlide>
        ))} */}

    </div>
  );
}
function Chors() {
  return (
    <div className="chors">
      {arr.map((el) => {
        return (
          <div className="dver">
            <img src={el.img} alt="" />
            <span>{el.text}</span>
          </div>
        )
      })}

    </div>

  )
}
const btnLeft = {
  position: "absolute",
  left: "70px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  background: "#000",
  color: "#fff",
  border: "none",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
};

const btnRight = {
  position: "absolute",
  right: "70px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  background: "#000",
  color: "#fff",
  border: "none",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
};
function Slglv() {
  let [sliderglavni, setNews] = useState([]);

  useEffect(() => {
    let fetchNews = async () => {
      try {
        let sliderCollection = collection(db, "sliderglavni");
        let querySnapshot = await getDocs(sliderCollection);

        let allNewsData = [];
        querySnapshot.docs.forEach((doc) => {
          // Տվյալները վերցնում ենք որպես մաքուր օբյեկտ
          allNewsData.push({ ...doc.data() });
        });

        setNews(allNewsData);
      } catch (error) {
        console.error("Տվյալները ստանալիս սխալ տեղի ունեցավ: ", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="swp" style={{ width: '100%' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
      >
        {sliderglavni.map((el) => {
          return (
            <SwiperSlide key={el.id} style={{ cursor: "pointer" }}>
              <div
                style={{
                  height: '560px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '24px',
                  borderRadius: '8px',
                  backgroundImage: `url(${el.bgimg || ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="contanier3">
                  <div className="mas1sl">
                    <span className='ft'>{el.title}</span>

                    {el.span ? <div className='span'>{el.span}</div> : null}

                    <div className="spanner">
                      {el.spanner ? Object.values(el.spanner).map((mekmek, idx) => {

                        return (

                          <>
                            {mekmek} <br />
                          </>

                        )
                      }) : null}
                    </div>
                    <button className='but'>{el.button}</button>
                  </div>
                  <div className="mas2sl">
                    <img src={el.img} alt={el.title} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
function App() {
  return (
    <div className="swp" style={{ width: '100%' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: '#3498db',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px',
            backgroundImage: "url('https://www.telecomarmenia.am/images/advanced_slider/2/17786566226019.png')"
          }}>
            <div className="contanier3">
              <div className="mas1sl">
                <span className='ft'>Արի՛ Team Place՝ քո արտոնությունների հետևից</span>
                <button className='but'>Ավելին</button>
              </div>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17786566223832.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: 'white',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px', borderRadius: '8px'
          }}>
            <div className="contanier3">
              <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17784978911155.jpeg" alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: '#ffeeec',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px'
          }}>
            <div className="contanier3">
              <div className="mas1sl">
                <span className='mecf'>ԿՈՍՄՈ 4` 25% զեղչով</span>
                <span className='poqrf'>Տունը այնտեղ է, որտեղ միասին ենք</span>
                <button className='butkarm' style={{ backgroundColor: "#f04d4d", color: "white" }}>Ավելին</button>
              </div>
              <div className="mas2sl">
                <img src="http://telecomarmenia.am/images/advanced_slider/2/17760603211125.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: '#ffeeec',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px'
          }}>
            <div className="contanier3">
              <div className="mas1sl">
                <span className='mecf'>Լիցքավորի՛ր առցանց</span>
                <span className='poqrf2'>Կատարիր վճարումներդ My Team հավելվածի և մեր կայքի միջոցով։</span>
                <button className='butkarm' style={{ backgroundColor: "#f04d4d", color: "white" }}>Ավելին</button>
              </div>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17714010168919.jpeg" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: 'white',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px', borderRadius: '8px'
          }}>
            <div className="contanier3">
              <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17788264270257.jpeg" alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: '#ffeeec',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px'
          }}>
            <div className="contanier3">
              <div className="mas1sl">
                <span className='mecf'>Honor 600 Lite</span>
                <span className='poqrf2' style={{ fontSize: "35px" }}>Քո հաջողության մեկնարկը</span>
                <button className='butkarm' style={{ backgroundColor: "#f04d4d", color: "white" }}>Ավելին</button>
              </div>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17788321273365.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: '#ffeeec',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px'
          }}>
            <div className="contanier3">
              <div className="mas1sl">
                <span className='mecf' style={{ fontSize: "50px" }}>Ռոումինգ, որ գալիս է քեզ հետ</span>
                <button className='butkarm' style={{ backgroundColor: "#f04d4d", color: "white" }}>Ավելին</button>
              </div>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17708821913808.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: '#ffeeec',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px',
            backgroundImage: "url('https://www.telecomarmenia.am/images/advanced_slider/2/17400318090138.jpeg')"
          }}>
            <div className="contanier3">
              <div className="mas1sl">
                <span className='mecf' style={{ fontSize: "50px", color: "white" }}>Շեյքի՛ր և Շահի՛ր</span>
                <span style={{ fontSize: "30px", fontFamily: "sans-serif" }}>Բազմաթիվ  նվերներ</span>
                <button className='butkarm'>Միանալ</button>
              </div>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17400318089669.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: '#ffeeec',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px',
            backgroundImage: "url(`https://www.telecomarmenia.am/images/advanced_slider/2/17785885976419.jpeg`)",
            backgroundPosition: "left top    "
          }}>
            <div className="contanier3">
              <div className="mas1sl">
                <span className='mecf'>Ցանկացած սմարթֆոն</span>
                <span className='poqrf2' style={{ fontSize: "35px" }}>0% - 0% - 0% Be Free-ին միանալու դեպքում</span>
                <button className='butkarm' style={{ backgroundColor: "#f04d4d", color: "white" }}>Ավելին</button>
              </div>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/1778588597332.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px',
            backgroundImage: "url('https://www.telecomarmenia.am/images/advanced_slider/2/17551722211925.png')",
            backgroundPosition: "right top"
          }}>
            <div className="contanier3" style={{ gap: "100px" }}>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17551722211701.png" alt="" />
              </div>
              <div className="mas1sl">
                <span className='mecf' style={{ color: "white", fontSize: "3.15rem" }}>Խաղից դուրս արագություն </span>
                <button className='butkarm' style={{ marginLeft: "30px" }}>Ավելին</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px',
            backgroundImage: "url('https://www.telecomarmenia.am/images/advanced_slider/2/17548278386697.jpeg')",
            backgroundPosition: "right top"
          }}>
            <div className="contanier3" style={{ gap: "100px" }}>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17574203779594.jpeg" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px',
            backgroundImage: "url('https://www.telecomarmenia.am/images/advanced_slider/2/17775254731213.jpeg')",
            backgroundPosition: "right top"
          }}>
            <div className="contanier3" style={{ gap: "100px" }}>
              <div className="mas1sl" style={{ alignItems: "center" }}>
                <span className='mecf'>ԿՈՍՄՈ</span>
                <span className='poqrf' style={{ textAlign: "center" }}>Առաջին ամիսն ԱՆՎՃԱՐ՝ առցանց միանալու դեպքում։</span>
                <button className='butkarm' style={{ backgroundColor: "#f04d4d", color: "white" }}>Ավելին</button>
              </div>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17775254728686.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ cursor: "pointer" }}>
          <div style={{
            background: '#ffeeec',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            borderRadius: '8px',
            backgroundImage: "url(`https://www.telecomarmenia.am/images/advanced_slider/2/1749451228057.jpeg`)",
            backgroundPosition: "left top    "
          }}>
            <div className="contanier3">
              <div className="mas1sl">
                <span className='mecf'>Be Free 3500</span>
                <span className='poqrf2' style={{ fontSize: "35px" }}>Անսահմանափակ ինտերնետ</span>
                <button className='butkarm' style={{ backgroundColor: "#f04d4d", color: "white" }}>Ավելին</button>
              </div>
              <div className="mas2sl">
                <img src="https://www.telecomarmenia.am/images/advanced_slider/2/17494512279093.jpeg" style={{ borderRadius: "35px" }} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
function Foot() {
  return (
    <>
      <div className="footerblock">
        <div className="contanier32">
          <div className="footermek">
            <a href="">
              <img
                style={{ marginBottom: 30 }}
                src="https://www.telecomarmenia.am/img/logo-light.svg?v=1"
                alt=""
              />
            </a>
            <div className="social">
              <div className="facebook">
                <img
                  style={{ cursor: "pointer" }}
                  src="https://www.noy.am/icons/facebook-white.svg"
                  alt=""
                />
              </div>
              <div className="inst">
                <img
                  style={{ cursor: "pointer" }}
                  src="https://www.noy.am/icons/instagram-white.svg"
                  alt=""
                />
              </div>
              <div className="youtube">
                <i
                  className="fa-brands fa-youtube"
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontSize: 26,
                    cursor: "pointer"
                  }}
                />
              </div>
            </div>
            <div>
              <span className="telblock " href="tel:100">
                <div className="tel " />
                <a href="" className="hoverik">
                  100
                </a>
              </span>
              <span
                className="telblock "
                href="mailto:"
                style={{ gap: 15, paddingLeft: 5, marginBottom: 40 }}
              >
                <i
                  className="fa-regular fa-envelope"
                  style={{ color: "rgb(255, 255, 255)", fontSize: 18 }}
                />
                <a href="" className="hoverik">
                  info@telecomarmenia.am
                </a>
              </span>
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
                    style={{
                      cursor: "pointer",
                      backgroundColor: "white",
                      borderRadius: 15
                    }}
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
              <div className="mysocial">
                <img
                  style={{ cursor: "pointer" }}
                  width="64px"
                  height="64px"
                  src="https://www.telecomarmenia.am/img/redesign/iso_1.png"
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  width="64px"
                  height="64px"
                  src="https://www.telecomarmenia.am/img/redesign/iso_2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="footerlist">
            <div className="listmek">
              <img
                width="45px"
                height="45px"
                src="https://www.telecomarmenia.am/files/icons/1/16511388037707/45x45.png"
                alt=""
              />
              <strong
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  margin: "15px 0"
                }}
              >
                Ընկերության մասին
              </strong>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10
                }}
              >
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Մեր մասին
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Կապի թանգարան
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Նորություններ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Աշխատանք Տելեկոմ Արմենիայում
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Արդյունքներ և հաշվետվություններ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Գործարար Էթիկա և Կոմպլայենս
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Կայուն զարգացում
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Բաժնետերերին
                </li>
              </ul>
            </div>
            <div className="listerku">
              <img
                width="45px"
                height="45px"
                src="https://www.telecomarmenia.am/files/icons/1/16511387478667/45x45.png"
                alt=""
              />
              <strong
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  margin: "15px 0"
                }}
              >
                Ընկերության մասին
              </strong>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10
                }}
              >
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Ընդհանուր դրույթներ և պայմաններ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Անվտանգություն
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  E-shop պայմաններ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Ապառիկ վաճառքի պայմաններ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Առաքման պայմաններ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Վաճառքի և սպասարկման կենտրոններ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Ծածկույթ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Բջջային ցանցի ծածկույթ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Team ինտերնետի հասանելիության ծածկույթ
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Օգտակար փաստաթղթեր
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Գործընկերներին և մատակարարներին
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  Գաղտնիության քաղաքականություն
                </li>
                <li
                  className="hoverion"
                  style={{ color: "rgb(255, 255, 255,0.5)" }}
                >
                  ՀՀ մարզերի կոդեր
                </li>
              </ul>
            </div>
            <div className="listerku">
              <img
                width="45px"
                height="45px"
                src="https://www.telecomarmenia.am/files/icons/1/16511387748123/45x45.png"
                alt=""
              />
              <strong
                style={{
                  color: "white",
                  fontFamily: "sans-serif",
                  margin: "15px 0"
                }}
              >
                Team հավելվածներ
              </strong>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10
                }}
              >
                <FooterRoute />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbottom">
        <div style={{ justifyContent: "center" }} className="contanier32">
          <p style={{ color: "white" }}>
            © 2026 Տելեկոմ Արմենիա ԲԲԸ։ Բոլոր իրավունքները պաշտպանված են։ Մշակվել
            է Թիմ Սոլյուշնս ՓԲԸ կողմից։
          </p>
        </div>
      </div>
    </>
  )
}
function Sec() {
  return (
    <>
      <div className="sectionmek">
        <div className="marg nk4">
          <div className="mek scrol1">
            <span
              style={{ color: "white", fontSize: 30, fontFamily: "sans-serif" }}
            >
              <strong className='strs'>Կորպորատիվ ցանցեր</strong>
            </span>
            <span className='poqrspan'>Տեղեկատվության փոխանակման ապահով համակարգ</span>
            <span className="hov">
              Ավելին <span style={{ color: "#f04d4d" }}>&gt;</span>
            </span>
          </div>

        </div>
        <div className="marg nk3">
          <div className="mek scrol2" style={{ width: "100%" }}>
            <span
              style={{ color: "white", fontSize: 30, fontFamily: "sans-serif" }}
            >
              <strong>Mobile ID</strong>
            </span>
            <span className='poqrspan'>Վճարումներ և նույնականացում բջջային հեռախոսի միջոցով</span>
            <span className="hov">
              Ավելին <span style={{ color: "#f04d4d" }}>&gt;</span>
            </span>
          </div>

        </div>
      </div>
      <div className="sectionerku">
        <div className="marg nk2">
          <div className="mek scrol1 ">
            <span
              style={{ color: "white", fontSize: 30, fontFamily: "sans-serif" }}
            >
              <strong>M2M լուծումներ</strong>
            </span>
            <div className="poqrspan">Տվյալների հուսալի փոխանցում</div>
            <span className="hov">
              Ավելին <span style={{ color: "#f04d4d" }}>&gt;</span>
            </span>
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
              <strong>SMS-ինֆո</strong>
            </span>
            <div className="poqrspan">Զանգվածային SMS տարածման ծառայություն</div>
            <span className="hov">
              Ավելին <span style={{ color: "#f04d4d" }}>&gt;</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export { Get, Chors, LrahosSlider, App, Navbar, Apps, Head, Slglv, Foot, Sec, Owl, EshopSlider };

