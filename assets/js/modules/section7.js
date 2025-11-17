const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section7 = {

    section7_swiper: () => {
        var swiper = new Swiper(".section7-swiper", {
            slidesPerView: "auto",
            // centeredSlides: true,
            loop: true,
            // spaceBetween: 30, // ← 겹치는 정도 줄임
            navigation: {
                nextEl: '.section7_swiper-button-next',
                prevEl: '.section7_swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
        });

    },

    init() {
        this.section7_swiper();
    }
}

export default Section7;