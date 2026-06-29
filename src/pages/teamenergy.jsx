import {Get, Chors,Navbar, App, LrahosSlider, Head, Slglv, Foot, Sec,Owl,EshopSlider } from '../App'
export default function Teamenergy(){
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
                    <h1>Team Energy</h1>
                </div>
                <div className="teamplaymarg mrj">
                    <div className="teammek">
                        <img style={{width:"250px", borderRadius:"15px"}} src="https://www.telecomarmenia.am/images/team_apps/1/17116228874075.png" alt="" />
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
                    <img style={{width:"290px"}} src="https://www.telecomarmenia.am/images/team_apps/1/17116228874283.jpeg" alt="" />
                    <img style={{width:"290px"}} src="https://www.telecomarmenia.am/images/team_apps/1/17116228874409.jpeg" alt="" />
                    <img style={{width:"290px"}} src="https://www.telecomarmenia.am/images/team_apps/1/1711622887455.jpeg" alt="" />
                </div>
                <div className="texting mrj">
                    <span className='innyvec' style={{fontFamily:"sans-serif",color:"#666e75",}}>Team Energy հավելվածի միջոցով կարող եք գտնել մոտակա էլեկտրական լիցքավորման կայանը, հետևելով քայլերի հաջորդականությանը՝ հեշտությամբ լիցքավորել մեքենան և կատարել էլեկտրոնային վճարում նախընտրած տարբերակով։</span>
                    <ul className='ulik'>
                        <li>Ժամանակակից TV միշտ քեզ հետ</li>
                        <li>Մինչև 200 ալիք</li>
                        <li>Ավելի քան 5000 ֆիլմ տեսադարանում</li>
                        <li>Դիտում 5 սարքավորումներով</li>
                        <li>Մինչև 7 օր catch-up</li>
                        <li>Հավելյալ ալիքների և փաթեթների գնում</li>
                        <li>YouTube հեռուստացույցով</li>
                        <li>EPG - Հաղորդումների էլեկտրոնային ցանկ</li>
                    </ul>
                </div>
            <Foot />
        </>
)
}