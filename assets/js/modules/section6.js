const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section6 = {
    section6_gsap: () => {
        const atags = getAll('#section6 .inner .cards li a');
        atags.forEach(item => {
            const target = item.querySelector('img')
            item.addEventListener('mouseenter', () => {
                gsap.from(target, {
                    y: -50,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    // scrollTrigger: {
                    //     trigger: target,
                    //     start: "top 80%", // 화면의 80% 지점에서 시작
                    //     toggleActions: "play reverse play reverse",
                    //     // markers: true, // ✅ 디버깅용, 화면에 start/end 표시됨
                    //     once: false
                    // }
                });
            });
        })
    },
    section6_swiper: () => {
        var swiper = new Swiper(".section6-swiper", {
            slidesPerView: "auto",
            loopAdditionalSlides: 1,
            loop: true,
            spaceBetween: 50,
            navigation: {
                nextEl: '.section6_swiper-button-next',
                prevEl: '.section6_swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
        });

        const slides = document.querySelectorAll('.section6-swiper .swiper-slide');

        slides.forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                gsap.to(slide, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            slide.addEventListener('mouseleave', () => {
                gsap.to(slide, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    },
    init() {
        this.section6_gsap();
        this.section6_swiper();
    }
}

export default Section6;