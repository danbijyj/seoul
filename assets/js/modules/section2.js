const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);


const Section2 = {

    arrowHandler: () => {
        const btns = getAll('#section2 .inner .cards li article .arrow')
        btns.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const arrow = item.querySelector('svg');
                gsap.fromTo(arrow, {
                    left: '100px'
                }, { left: '6px', duration: 0.5 });
            })
        })
    },
    section2_gsap: () => {
        const targets = getAll('#section2 .cards li');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#section2 .cards',
                start: 'top 80%',
                toggleActions: "play reverse play reverse",
            }
        });

        targets.forEach((el, index) => {
            tl.from(el, {
                y: 100,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            }, index * 0.2); // timeline 내에서 딜레이
        });
    },


    init() {
        this.arrowHandler();
        this.section2_gsap();
    }
}

export default Section2;