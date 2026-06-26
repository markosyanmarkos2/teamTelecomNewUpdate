import React, { useEffect } from 'react';
import { Navbar, App, LrahosSlider, Head, Slglv, Foot,Sec} from '../App';
export default function About() {
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
    <>
      <header>
        <div className="fix">
          <Head />
        </div>
      </header>
      <div id="swp">
        <Slglv />
      </div>
      <div className="contanier3 grid">
        <Sec />
      </div>
      <footer>
        <Foot />
      </footer>
    </>
  )
}