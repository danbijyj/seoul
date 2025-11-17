import Header from './modules/header.js';
import mainBanner from './modules/mainBanner.js';
import Section1 from './modules/section1.js';
import Section2 from './modules/section2.js';
import Section3 from './modules/section3.js';
import Section4 from './modules/section4.js';
import Section5 from './modules/section5.js';
import Section6 from './modules/section6.js';
import Section7 from './modules/section7.js';

const scrollEvent = () => {
    window.addEventListener("scroll", function () {
        const topBtn = document.querySelector(".top-btn");
        const scrollTop = window.scrollY; // 현재 스크롤 위치
        const windowHeight = window.innerHeight; // 뷰포트 높이
        const documentHeight = document.documentElement.scrollHeight; // 전체 문서 높이

        const isBottom = scrollTop + windowHeight >= documentHeight - 10;

        if (isBottom) {
            topBtn.style.opacity = 1;
        } else {
            topBtn.style.opacity = 0;
        }

        topBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 부드럽게 스크롤
            });
        })
    });
};

const init = () => {
    gsap.registerPlugin(ScrollTrigger);
    scrollEvent();
    Header.init();
    mainBanner.init();
    Section1.init();
    Section2.init();
    Section3.init();
    Section4.init();
    Section6.init();
    Section5.init();
    Section7.init();
};

init();


