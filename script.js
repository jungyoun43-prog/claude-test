// 옛 성현들의 명언 배열
const quotes = [
    {
        text: "배우고 때때로 익히면 또한 기쁘지 아니한가.",
        author: "공자 (孔子)"
    },
    {
        text: "천리 길도 한 걸음부터 시작된다.",
        author: "노자 (老子)"
    },
    {
        text: "아는 것을 안다 하고 모르는 것을 모른다 하는 것이 참된 앎이다.",
        author: "공자 (孔子)"
    },
    {
        text: "너 자신을 알라.",
        author: "소크라테스 (Socrates)"
    },
    {
        text: "우리는 우리가 반복적으로 하는 행동의 결과이다. 따라서 탁월함은 행동이 아니라 습관이다.",
        author: "아리스토텔레스 (Aristotle)"
    },
    {
        text: "모든 사람은 태어날 때부터 알고자 하는 욕망을 가지고 있다.",
        author: "아리스토텔레스 (Aristotle)"
    },
    {
        text: "덕은 지식이며, 악은 무지이다.",
        author: "소크라테스 (Socrates)"
    },
    {
        text: "작은 일에 성실하지 않으면 큰 일에도 성실하지 못한다.",
        author: "맹자 (孟子)"
    },
    {
        text: "하루를 헛되이 보내면 백 년의 후회를 남긴다.",
        author: "퇴계 이황 (李滉)"
    },
    {
        text: "물은 낮은 곳으로 흐르고, 사람은 높은 곳을 향한다.",
        author: "맹자 (孟子)"
    }
];

// 랜덤 명언 표시 함수
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    // 페이드 아웃 효과
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';

    setTimeout(() => {
        quoteText.textContent = selectedQuote.text;
        quoteAuthor.textContent = selectedQuote.author;

        // 페이드 인 효과
        quoteText.style.transition = 'opacity 0.5s ease-in';
        quoteAuthor.style.transition = 'opacity 0.5s ease-in';
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 300);
}

// 페이지 로드 시 랜덤 명언 표시
window.addEventListener('load', displayRandomQuote);
