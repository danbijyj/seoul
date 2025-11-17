const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section1 = {
    section1_Swiper: () => {
        var swiper = new Swiper(".section1-swiper", {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            // loopAdditionalSlides: 1,
            // spaceBetween: -800,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className}"></span>`;
                },
            },
            navigation: {
                nextEl: '.section1_swiper-button-next',
                prevEl: '.section1_swiper-button-prev',
            },
            // autoplay: {
            //     delay: 5000,
            // },
        });

    },

    init() {
        this.section1_Swiper();
    }
}

export default Section1;