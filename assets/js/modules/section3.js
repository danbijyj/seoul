const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section3 = {
    section3_Swiper: () => {
        var swiper = new Swiper(".section3-swiper", {
            slidesPerView: 1, // 한 번에 1개씩
            loop: true,
            autoplay: {
                delay: 5000,
            },
        });
    },
    init() {
        this.section3_Swiper();
    }
}

export default Section3;