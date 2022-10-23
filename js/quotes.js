const words = [
    {
        word: "seize",
        translate: "압수하다",
    },
    {
        word: "desolate",
        translate: "황량한, 적막한",
    },
    {
        word: "sweeping",
        translate: "전면적인, 광범위한",
    },
    {
        word: "imminent",
        translate: "목전의, 임박한",
    },
    {
        word: "fascinate",
        translate: "매료하다",
    },
    {
        word: "dominate",
        translate: "지배하다, 군림하다",
    },
    {
        word: "skilled",
        translate: "숙련된",
    },
    {
        word: "brisk",
        translate: "날씨가 차갑지만 상쾌한",
    },
    {
        word: "transform",
        translate: "바꾸어놓다",
    },
    {
        word: "proponent",
        translate: "지지자",
    },
];

    const word = document.querySelector("#word span:first-child");
    const translate = document.querySelector("#word span:last-child");
    const todaysword = words[Math.floor(Math.random() * words.length)];

    word.innerText = todaysword.word;
    translate.innerText = todaysword.translate;