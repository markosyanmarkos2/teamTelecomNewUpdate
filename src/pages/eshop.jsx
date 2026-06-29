
import {Get, Chors,Navbar, App, LrahosSlider, Head, Slglv, Foot, Sec,Owl,EshopSlider } from '../App';

export default function Eshop() {
  return (
    <>
        <header>
            <Head />
        </header>
        <EshopSlider />
        <div className="contanier3">
        <Chors />
        </div>
        <div className="contanier3">
            <Get /> 
        </div>
        <footer>
            <Foot />
        </footer>
    </>
  );
}