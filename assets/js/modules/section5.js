const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const data = [
    [
        { text: "소규모 세탁소 VOCs 저감시설 설치 지원 세탁소 선정 공고", date: "2025.07.25" },
        { text: "용마배수지 공급관 밸브 설치공사 부단수 차단 공법 선정 1차(정량적) 평가 결과 공고", date: "2025.07.21" },
        { text: "서울시립대 시간선택제임기제공무원(양성평등상담용원) 채용 서류전형 합격자 발표 및 면접시험 계획 공고", date: "2025.07.10" },
        { text: "우리동네 개발정보, `서울플랜＋`에 몽땅 모았수다", date: "2025.07.06" },
    ],
    [
        { text: "뭐가 나와도 꿀잼, 여름 휴가는 서울!", date: "2025.07.22" },
        { text: "2025년 하반기 '서울형 다시서기 4.0 프로젝트' 신청 안내", date: "2025.07.21" },
        {
            text: "서울시 고립은둔청년 지킴이 교육 2기 참여자 모집(~7.28.월요일)", date: "2025.07.21"
        },
        { text: "에너지정보 누리집 설문조사하고, 기프티콘 받으세요~", date: "2025.07.10" },
    ],
    [
        { text: "2025 해치마당 미디어월 여름 전시", date: "2025.07.01" },
        { text: "[선유도공원] 2025 전시 프로젝트 《선유도 : 조용한 공존》", date: "2025.06.30" },
        { text: "서울공예박물관 공예협력전 《염원을 담아 실로 새겨 부처에 이르다》", date: "2025.06.16" },
        { text: "[서울시립 미술아카이브] 《우리는 끊임없이 다른 강에 스며든다》", date: "2025.05.21" },
    ],
];

const Section5 = {
    section5_eventHandler: () => {
        const lis = getAll('#section5 .section4-nav li');
        const target = get('#section5 .inner .con-box ul');
        let html = '';
        lis.forEach((item, idx) => {
            item.addEventListener('click', () => {
                lis.forEach(item2 => item2.classList.remove('active'));
                item.classList.add('active');

                target.innerHTML = '';

                data[idx].forEach((item) => {
                    html += ` <li>
                    <a href="#"
                      >${item.text}</a
                    >
                    <span>${item.date}</span>
                  </li>`;
                })
                target.innerHTML = html;
                html = '';
            })
        })

    },

    init() {
        this.section5_eventHandler();

    }
}

export default Section5;