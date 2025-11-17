const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);
const data = [
    { cate: "도시", src: "./assets/images/section4/archive_1.png", title: "기후동행카드", tags: ["교통정책", "교통카드"] },
    { cate: "주택", src: "./assets/images/section4/archive_2.png", title: "미리내집", tags: ["SH공사", "미리내집"] },
    { cate: "문화", src: "./assets/images/section4/archive_3.png", title: "한강불빛공연 드론라이트쇼", tags: ["드론라이트쇼", "드론쇼"] },
    { cate: "문화", src: "./assets/images/section4/archive_4.png", title: "쉬엄쉬엄 한강 3종 축제", tags: ["관광정책", "그레이트한강"] },
    { cate: "복지", src: "./assets/images/section4/archive_5.png", title: "손목닥터9988", tags: ["9988", "복지", "손닥"] },
    { cate: "가족", src: "./assets/images/section4/archive_6.png", title: "서울형 키즈카페", tags: ["아이돌봄", "육아정책"] },
    { cate: "도시", src: "./assets/images/section4/archive_7.png", title: "러너스테이션", tags: ["달리기", "러너들의성지"] },
    { cate: "문화", src: "./assets/images/section4/archive_8.png", title: "서울야외도서관", tags: ["광화문책마당", "독서"] }
]

const Section4 = {
    section4_Swiper_setting: () => {
        const target = get('#section4 .section4-swiper .swiper-wrapper');
        let html = '';
        let tags = "";
        data.forEach(item => {
            item.tags.forEach(tag => {
                tags += `<span class="tags">#${tag}</span>`
            })
            html += `
                    <div class="swiper-slide">
                     <span class="cate">${item.cate}</span>
                      <img src=${item.src} alt="" />
                      <strong class="slide-title">${item.title}</strong>
                      <p>
                       ${tags}
                      </p>
                    </div>
            `
            tags = "";
        })
        target.innerHTML = html;
    },
    section4_Swiper: () => {
        var swiper = new Swiper(".section4-swiper", {
            slidesPerView: 4,
            spaceBetween: 80,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".section4-swiper-button-next",
                prevEl: ".section4-swiper-button-prev",
            },
        });
    },
    section4_gsap: () => {
        const target = get('#section4 .bg');

        gsap.from(target, {
            y: 200,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: target,
                start: "top 80%", // 화면의 80% 지점에서 시작
                toggleActions: "play reverse play reverse",
                // markers: true, // ✅ 디버깅용, 화면에 start/end 표시됨
                once: false
            }
        });
    },

    init() {
        this.section4_Swiper_setting();
        this.section4_Swiper();
        this.section4_gsap();
    }
}

export default Section4;