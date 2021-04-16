const navShow = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navLinks');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        header.classList.toggle('header-active');
    });
}

const imgHover = () => {
    const img1 = document.querySelector(".gridImg1");
    const img2 = document.querySelector(".gridImg2");
    const img3 = document.querySelector(".gridImg3");
    const img4 = document.querySelector(".gridImg4");

    const btn1 = document.querySelectorAll(".gridImg")[0].parentElement.querySelector("button");
    const btn2 = document.querySelectorAll(".gridImg")[2].parentElement.querySelector("button");
    const btn3 = document.querySelectorAll(".gridImg")[1].parentElement.querySelector("button");
    const btn4 = document.querySelectorAll(".gridImg")[3].parentElement.querySelector("button");

    const arrow1 = document.querySelector('.arrow1');
    const arrow2 = document.querySelector('.arrow2');
    const arrow3 = document.querySelector('.arrow3');
    const arrow4 = document.querySelector('.arrow4');

    [btn1, img1].forEach( (e) =>{
        e.addEventListener("mouseover", () =>{
            btn1.classList.toggle('gridBtn-active');
            document.querySelectorAll(".gridImg")[0].parentElement.querySelector(".arrow").style.opacity = "1";
            arrow1.style.filter = 'invert(18%) sepia(100%) saturate(2931%) hue-rotate(243deg) brightness(82%) contrast(122%)';
        });
    });
    [btn1, img1].forEach( (e) =>{
        e.addEventListener("mouseout", () =>{
            btn1.classList.remove('gridBtn-active');
            document.querySelectorAll(".gridImg")[0].parentElement.querySelector(".arrow").style.opacity = "0";
            arrow1.style.filter = 'invert(81%) sepia(31%) saturate(13%) hue-rotate(270deg) brightness(100%) contrast(103%)';
        });
    });

    [btn2, img2].forEach(function(e){
        e.addEventListener("mouseover", () =>{
            btn2.classList.toggle('gridBtn-active');
            document.querySelectorAll(".gridImg")[2].parentElement.querySelector(".arrow").style.opacity = "1";
            arrow3.style.filter = 'invert(18%) sepia(100%) saturate(50000%) hue-rotate(243deg) brightness(100%) contrast(500%)';
        });
    });
    [btn2, img2].forEach( (e) =>{
        e.addEventListener("mouseout", () =>{
            btn2.classList.remove('gridBtn-active');
            document.querySelectorAll(".gridImg")[2].parentElement.querySelector(".arrow").style.opacity = "0";
            arrow3.style.filter = 'invert(81%) sepia(31%) saturate(13%) hue-rotate(270deg) brightness(100%) contrast(103%)';
        });
    });

    [btn3, img3].forEach( (e) =>{
        e.addEventListener("mouseover", () =>{
            btn3.classList.toggle('gridBtn-active');
            document.querySelectorAll(".gridImg")[1].parentElement.querySelector(".arrow").style.opacity = "1";
            arrow2.style.filter = 'invert(18%) sepia(100%) saturate(50000%) hue-rotate(243deg) brightness(100%) contrast(500%)';
        });
    });
    [btn3, img3].forEach( (e) =>{
        e.addEventListener("mouseout", () =>{
            btn3.classList.remove('gridBtn-active');
            document.querySelectorAll(".gridImg")[1].parentElement.querySelector(".arrow").style.opacity = "0";
            arrow2.style.filter = 'invert(81%) sepia(31%) saturate(13%) hue-rotate(270deg) brightness(100%) contrast(103%)';
        });
    });

    [btn4, img4].forEach( (e) =>{
        e.addEventListener("mouseover", () =>{
            btn4.classList.toggle('gridBtn-active');
            document.querySelectorAll(".gridImg")[3].parentElement.querySelector(".arrow").style.opacity = "1";
            arrow4.style.filter = 'invert(18%) sepia(100%) saturate(50000%) hue-rotate(243deg) brightness(100%) contrast(500%)';
        });
    });
    [btn4, img4].forEach( (e) =>{
        e.addEventListener("mouseout", () =>{
            btn4.classList.remove('gridBtn-active');
            document.querySelectorAll(".gridImg")[3].parentElement.querySelector(".arrow").style.opacity = "0";
            arrow4.style.filter = 'invert(81%) sepia(31%) saturate(13%) hue-rotate(270deg) brightness(100%) contrast(103%)';
        });
    });
}

const app = () => {
    navShow();
    imgHover();
}

app();