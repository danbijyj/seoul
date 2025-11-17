const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const mainBanner = {
    mainBanner_Swiper: () => {
        var swiper = new Swiper(".mainBanner-swiper", {
            slidesPerView: "auto",
            loop: true,
            autoplay: {
                delay: 5000,
            },
            on: {
                slideChange: (swiper) => {
                    const slideOn = get('#main-banner .slider-on');
                    const totalSlides = swiper.slides.length;
                    const percent = 300 / totalSlides;
                    slideOn.style.transform = `translateX(${swiper.realIndex * percent}%)`;
                }
            }
        });
    },

    init() {
        this.mainBanner_Swiper();
    }
}

export default mainBanner;