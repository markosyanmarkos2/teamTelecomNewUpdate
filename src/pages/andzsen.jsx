import { Navbar, App, LrahosSlider, Head, Slglv, Foot, Sec } from '../App';
export default function Andzsen() {
    return (
        <>
            <div className="veching">
                <div className="andzmek">
                <div className="fixed">

                    <div className="log" style={{ marginBottom: "60px" }}>
                        <img src="https://www.telecomarmenia.am/myaccount/img/account-logo.png" alt="" />
                    </div>
                    <div className="anbiz">
                        <button className='butis gic'>Անհատներին</button>
                        <button className='butis'>Բիզնես</button>
                    </div>
                    <form className='forum' action="">
                        <div className="anbiz">
                            <button className='butis gic' style={{ padding: "5px" }}>Հեռախոսահամար</button>
                            <button className='butis' style={{ padding: "5px" }}>Էլ. հասցե</button>
                        </div>
                        <div className="inputner">
                            <label htmlFor="mek">Օգտանուն</label>
                            <input className='in' type="number" name='mek' />
                        </div>
                        <div className="inputner">
                            <label htmlFor="erku">Գաղտնաբառ</label>
                            <input className='in' type="pasword" name='erku' />
                        </div>
                        <button className='ayl'>ՄՈՒՏՔ</button>
                        <a style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "10px" }} href="http://">Մոռացե՞լ եք գաղտնաբառը</a>
                        <button className='wht'>Գրանցում</button>
                    </form>
                </div>
            </div>
            <div className="andzerku">
                <div className="mini">
                    <div className="wrp">
                        <h1 style={{ fontSize: "45px", width: "400px", display: "flex", textAlign: "center", color: "#2c3843", fontFamily: "sans-serif" }}>ԱՆՁՆԱԿԱՆ ԳՐԱՍԵՆՅԱԿ</h1>
                    </div>
                    <div className="miniwrp">
                        <div className="store">
                            <a className='store1' href=""></a>
                            <a className='store2' href=""></a>
                        </div>
                        <img src="	https://www.telecomarmenia.am/myaccount/img/mobile-devices.png?v=3" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}