const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const data = [
    [
        {
            title: "새소식",
            subItems: [
                "분야별 새소식",
                "문화참여 달력",
                "행사 및 축제",
                "참여 신청",
                "자치구 주요뉴스",
                "강좌 교육",
                "시정소식 문자알림서비스",
                "인사발령"
            ]
        },
        {
            title: "서울시 정책 뉴스",
            subItems: []
        },
        {
            title: "서울시 영상",
            subItems: []
        },
        {
            title: "공고",
            subItems: [
                "입찰공고",
                "수의계약내역",
                "채용시험",
                "서울시보",
                "고시공고",
                "도시관리계획안 열람공고",
                "석면해체·제거일정"
            ]
        },
        {
            title: "보도ㆍ해명자료",
            subItems: [
                "보도자료",
                "해명자료"
            ]
        },
        {
            title: "내 손안에 서울",
            subItems: []
        },
        {
            title: "서울사랑",
            subItems: []
        },
    ],
    [{
        title: "시민청원/제안",
        subItems: [
            "시민제안(상상대로 서울)",
            "예산낭비 신고센터",
            "불합리한 규제 신고센터",
            "규제 입증 요청",
            "참여입법"
        ]
    },
    {
        title: "시민감사옴부즈만위원회",
        subItems: []
    },
    {
        title: "시민의견",
        subItems: [
            "자유게시판",
            "칭찬합시다"
        ]
    },
    {
        title: "온라인여론조사",
        subItems: []
    },
    {
        title: "공모전",
        subItems: []
    },],
    [{
        title: "주택",
        subItems: []
    },
    {
        title: "경제",
        subItems: []
    },
    {
        title: "교통",
        subItems: []
    },
    {
        title: "환경",
        subItems: []
    },
    {
        title: "복지",
        subItems: []
    },
    {
        title: "안전",
        subItems: []
    },
    {
        title: "문화",
        subItems: []
    },
    {
        title: "행정",
        subItems: []
    },],
    [{
        title: "서울의 상징물(조례)",
        subItems: [
            "휘장",
            "브랜드",
            "해치 심벌",
            "해치 캐릭터",
            "꽃 · 나무 · 새"
        ]
    },
    {
        title: "서울의 상징",
        subItems: [
            "슬로건",
            "색",
            "서체"
        ]
    },
    {
        title: "서울의 역사",
        subItems: [
            "서울의 역사",
            "역대서울시장",
            "시의회변천"
        ]
    },
    {
        title: "서울정보",
        subItems: [
            "서울정보",
            "서울인포그래픽+",
            "스토리인서울",
            "데이터로 본 서울",
            "사진으로 본 서울",
            "영상으로 본 서울",
            "서울 통계"
        ]
    },
    {
        title: "시민상 · 시민표창",
        subItems: []
    },
    {
        title: "서울홍보대사",
        subItems: []
    },
    {
        title: "서울시청 선수단 소개",
        subItems: []
    },],
    [
        {
            title: "시청안내",
            subItems: [
                "조직도",
                "본부 · 사업소",
                "공사 · 출연기관",
                "자원봉사센터",
                "시의회",
                "자치구",
                "자치구별 동 현황",
                "찾아오시는 길",
                "청사안내"
            ]
        },],
    [{
        title: "원문정보",
        subItems: []
    },
    {
        title: "사전공개",
        subItems: []
    },
    {
        title: "공개청구",
        subItems: []
    },
    {
        title: "시정정보",
        subItems: []
    },
    {
        title: "통계정보",
        subItems: []
    },
    {
        title: "시민소통",
        subItems: []
    }],
    [{
        title: "민원신청",
        subItems: []
    },
    {
        title: "민원결과",
        subItems: []
    },
    {
        title: "민원사례",
        subItems: []
    },
    {
        title: "정보제공",
        subItems: []
    },
    {
        title: "응답소 이용안내",
        subItems: []
    }],

];

const Header = {

    navMenuHandler: () => {
        const navs = getAll('.nav ul li');
        const bottomNav = get('.bottom-nav');
        const target = get('#header .bottom-nav .inner .category');
        let html = '';
        navs.forEach((item, idx) => {
            item.addEventListener('mouseenter', () => {
                navs.forEach(i => i.classList.remove('on'));

                item.classList.add('on');
                if (item.classList.contains('on')) {
                    bottomNav.style.display = 'block';
                }
                // category 재설정
                target.innerHTML = '';
                data[idx].forEach(item => {
                    html += `<div class="category-item">${item.title}`
                    if (item.subItems.length > 0) {
                        html += `<ul class="depth2">`;
                        item.subItems.forEach(li => {
                            html += `<li>${li}</li>`;
                        })
                        html += `</ul>`;
                    }
                    html += '</div>';
                })

                target.innerHTML = html;
                html = '';
            })
        });
        bottomNav.addEventListener('mouseleave', () => {
            navs.forEach(i => i.classList.remove('on'));
            bottomNav.style.display = 'none';
        })
    },

    init() {
        this.navMenuHandler();
    }
}

export default Header;