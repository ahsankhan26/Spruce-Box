const navShow = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navLinks');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        header.classList.toggle('header-active');
    });
}

const btnHover = () => {
    const img1 = document.querySelector(".gridImg1");
    const img2 = document.querySelector(".gridImg2");
    const img3 = document.querySelector(".gridImg3");
    const img4 = document.querySelector(".gridImg4");

    const btn1 = document.querySelectorAll(".gridImg")[0].parentElement.querySelector("button");
    const btn2 = document.querySelectorAll(".gridImg")[2].parentElement.querySelector("button");
    const btn3 = document.querySelectorAll(".gridImg")[1].parentElement.querySelector("button");
    const btn4 = document.querySelectorAll(".gridImg")[3].parentElement.querySelector("button");

    img1.addEventListener("mouseover", () =>{
        btn1.classList.toggle('gridBtn-active');
        document.querySelectorAll(".gridImg")[0].parentElement.querySelector(".arrow").style.opacity = "1";

    });
    img1.addEventListener("mouseout", () =>{
        btn1.classList.remove('gridBtn-active');
        document.querySelectorAll(".gridImg")[0].parentElement.querySelector(".arrow").style.opacity = "0";
    });

    img2.addEventListener("mouseover", () =>{
        btn2.classList.toggle('gridBtn-active');
        document.querySelectorAll(".gridImg")[2].parentElement.querySelector(".arrow").style.opacity = "1";
    });
    img2.addEventListener("mouseout", () =>{
        btn2.classList.remove('gridBtn-active');
        document.querySelectorAll(".gridImg")[2].parentElement.querySelector(".arrow").style.opacity = "0";
    });

    img3.addEventListener("mouseover", () =>{
        btn3.classList.toggle('gridBtn-active');
        document.querySelectorAll(".gridImg")[1].parentElement.querySelector(".arrow").style.opacity = "1";
    });
    img3.addEventListener("mouseout", () =>{
        btn3.classList.remove('gridBtn-active');
        document.querySelectorAll(".gridImg")[1].parentElement.querySelector(".arrow").style.opacity = "0";
    });

    img4.addEventListener("mouseover", () =>{
        btn4.classList.toggle('gridBtn-active');
        document.querySelectorAll(".gridImg")[3].parentElement.querySelector(".arrow").style.opacity = "1";
    });
    img4.addEventListener("mouseout", () =>{
        btn4.classList.remove('gridBtn-active');
        document.querySelectorAll(".gridImg")[3].parentElement.querySelector(".arrow").style.opacity = "0";
    });
}

const app = () => {
    navShow();
    btnHover();
}

app();