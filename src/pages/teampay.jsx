import {Get, Chors,Navbar, App, LrahosSlider, Head, Slglv, Foot, Sec,Owl,EshopSlider } from '../App'
export default function Teampay(){
return (
    <>
            <Head />
            <div className="contanier3">
                <div className="headerbottomloc">
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", }}><a style={{ color: "gray" }} href="">Գլխավոր</a> <span style={{
                        display: 'flex',
                        backgroundImage: "url(https://www.telecomarmenia.am/img/sprite.png?v=49)",
                        backgroundPosition: "-132px -84px",
                        width: "5px",
                        height: "8px",
                        backgroundSize: "300px auto"
                    }}></span><span><a style={{ color: "gray" }} href="">Team հավելվածներ</a></span></span>
                </div>
            </div>
            
                <div className="mech mrj">
                    <h1>TeamPay</h1>
                </div>
                <div className="teamplaymarg mrj">
                    <div className="teammek">
                        <img style={{width:"250px", borderRadius:"15px"}} src="https://www.telecomarmenia.am/images/team_apps/1/17691688001842.png" alt="" />
                    </div>
                    <div className="teamerku">
                        <div className="teammekapp">
                            <div className="appstore"></div>
                            <div className="post"><img style={{ height:"50px"}} src='https://www.shutterstock.com/image-vector/three-half-star-rating-illustration-260nw-1383756842.jpg' alt="" /> <span style={{fontSize:"18px"}}>3.5</span></div>
                        </div>
                        <div className="teammekapp">
                            <div className="playmarket"></div>
                            <div className="post"><img style={{ height:"50px"}} src='https://www.shutterstock.com/image-vector/three-half-star-rating-illustration-260nw-1383756842.jpg' alt="" /> <span style={{fontSize:"18px"}}>3.5</span></div>
                        </div>
                    </div>
                    
                </div>
                <div className="ynderku mrj">
                    <span className='ios miev'>IOS</span>
                    <span className='and miev'>Android</span>
                </div>
                <div className="sliderimg mrj">
                    <img style={{width:"290px"}} src="https://www.telecomarmenia.am/images/team_apps/1/17479089596742.png" alt="" />
                    <img style={{width:"290px"}} src="https://www.telecomarmenia.am/images/team_apps/1/17479089597009.png" alt="" />
                    <img style={{width:"290px"}} src="https://www.telecomarmenia.am/images/team_apps/1/1747908959726.png" alt="" />
                    <img style={{width:"290px"}} src="https://www.telecomarmenia.am/images/team_apps/1/17479089597517.png   " alt="" />

                </div>
                <div className="texting mrj">
                    <ul className='ulik'>
                        <li>Էլեկտրոնային դրամապանակ ավելի քան 50 տեսակի վճարումների համար</li>
                        <li>Հատուկ առաջարկեր և ակցիաներ</li>
                    </ul>
                </div>
            <Foot />
        </>
)
}