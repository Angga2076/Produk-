const texts = [
    "I am a professional bot developer",
    "I create Telegram, Discord, and custom bots",
    "Automation is my passion",
    "Let's build something amazing together"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;
    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            setTimeout(type, 500);
        }, 1500);
    } else {
        setTimeout(type, 100);
    }
})();
