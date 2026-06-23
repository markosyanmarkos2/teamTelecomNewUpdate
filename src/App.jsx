import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
function LrahosSlider() {
  return (

    <div className="lrahosSwiper" style={{ width: "100%", padding: "80px", boxSizing: "border-box" }}>
      <div className="text" style={{display:"flex",justifyContent:"center", fontSize:"20px", color:"#2c3843", marginBottom:"20px"}}>
        <h1>ԼՐԱՀՈՍ</h1>
      </div>,
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
          <div style={{
            width: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="https://www.telecomarmenia.am/images/news/1/17787646383268/450x250c-center.png" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>14 may</span>
              <span style={{ fontSize: "25px", fontWeight: "900", color: "#2c3843" }}>Տելեգրաֆից մինչև 5G. Կապի թանգարանը միանում է «Թանգարանների գիշերվան»</span>

            </div>
          </div>

          <div style={{
            width: "400px",
            height: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="https://www.telecomarmenia.am/images/news/1/17786537465042/450x250c-center.png" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>13 may</span>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#2c3843" }}>Team-ի աջակցությամբ տավուշցի հարյուրավոր աշակերտներ մասնակցել են «Սիմֆոնիկ ԴասA» կրթական ծրագրին</span>

            </div>
          </div>
          <div style={{
            width: "400px",
            height: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="https://www.telecomarmenia.am/images/news/1/17768593249213/450x250c-center.jpeg" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>22 April</span>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#2c3843" }}>Բնության հանդեպ հոգատար վերաբերմունքը սկսել ենք մեզնից. Team-ն արժանացել է ISO 14001:2015 հավաստագրի</span>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
          <div style={{
            width: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="https://www.telecomarmenia.am/images/news/2/17764283852327/450x250c-center.png" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>17 April</span>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#2c3843" }}>Սովորի՛ր, խաղա՛ և հաղթի՛ր. Team-ն ու Koreez-ը առաջարկում են կրթական նոր հնարավորություն</span>

            </div>
          </div>
          <div style={{
            width: "400px",
            height: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="https://www.telecomarmenia.am/images/news/1/17757164588017/450x250c-center.jpeg" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>09 April</span>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#2c3843" }}>
                Team-ի 2G-ն ամբողջ Հայաստանում փոխարինվել է նոր տեխնոլոգիաներով
              </span>

            </div>
          </div>
          <div style={{
            width: "400px",
            height: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="https://www.telecomarmenia.am/images/news/1/17756529131443/450x250c-center.png" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>08 April</span>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#2c3843" }}>MOBILE ID Ծառայություն</span>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
          <div style={{
            width: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="https://www.telecomarmenia.am/images/news/1/17740030374784/450x250c-center.png" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>17 April</span>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#2c3843" }}>700 երիտասարդ մեկ հարթակում. Team-ը կրթությանն ու մարզերի զարգացմանն ուղղված «Հզոր համայնք»-ի կողքին է</span>

            </div>
          </div>
          <div style={{
            width: "400px",
            height: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="https://www.telecomarmenia.am/images/news/1/17727147056441/450x250c-center.png" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>09 April</span>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#2c3843" }}>
                Ձեռք բեր սմարթֆոն, ստացիր նաև սմարթ ժամացույց. Team-ի գարնանային ակցիան
              </span>

            </div>
          </div>
          <div style={{
            width: "400px",
            height: "400px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "15px",
            border: "0.5px solid rgb(227, 227, 227)",
            backgroundColor: "#f2f2f2", cursor: "pointer"
          }}>
            <img src="	https://www.telecomarmenia.am/images/news/1/17726087357015/450x250c-center.jpeg" alt="" />
            <div className="paddi">
              <span style={{ color: "#666e75", paddingBottom: "10px" }}>08 April</span>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#2c3843" }}>Անվճար ինտերնետ ռոումինգում Team-ի՝ Մերձավոր Արևելքում գտնվող բաժանորդներին</span>
            </div>
          </div>
        </SwiperSlide>
        <div style={{ width: "50%", marginLeft: "50px", marginTop: "50px" }}></div>
        <div style={{ display: "flex", alignItems: "end", }}>
        </div>
      </Swiper>
    </div>

  )
}

export { LrahosSlider };
function App() {
  return (
    // Քո հիմնական wrapper-ը, որտեղ դրել ես swp class-ը
    <div className="swp" style={{ width: '100%' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
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

export default App;

