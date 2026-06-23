let scrol1 = document.querySelectorAll(".scrol1");
let zind = document.querySelector(".zzz")
window.addEventListener("scroll", () => {
    if (window.scrollY >= 200 && window.scrollY <= 1000) {
        scrol1.forEach(el =>{
            el.classList.add(
            "anim"
        );
        })
    }
});

let scrol2 = document.querySelectorAll(".scrol2")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200 && window.scrollY <= 1000) {
        scrol2.forEach(el =>{
            el.classList.add(
            "animright"
            );
        
        })
    }
});
