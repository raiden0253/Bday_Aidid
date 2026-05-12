const screens = document.querySelectorAll(".screen");

const noBtn = document.getElementById("no-btn");

const messageText = document.getElementById("message-text");

let currentMessage = 0;

const messages = [

`dear my abiy the best man i met..

HAPPY BIRTHDAY SAYANG KU
HAFIZ AIDID BIN
MUHAMMAD BAZLIHAFIZ ❤️

YAAY MY ABIY DH 18
THUN THIS YEAR!!`,

`CONGRATULATIONS SAYANG ❤️

abiy ku dh berhadapn byk
rintangan byk halangan
byk cabaran byk mental
digunakn for faces`,

`i hope so you doing fine
doing well without me ❤️

i love you know so far
i very grateful i with you`,

`I will pray your name ❤️

i akn tunggu you smpai
you dh ready

i selalu ad utk you`,

`kmu menjadi jodo ku ❤️

aku sayang bgt sma kmu
kerna kmu perfect di mata ku`,

`your smile like light ✨

always shine bright
make me smile with you ❤️`,

`I LOVE YOU SAYANGG ❤️

HAFIZ AIDID BIN
MUHAMMAD BAZLIHAFIZ

HAPPY BIRTHDAY YAHH! ❤️`

];

function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

function startApp() {

    const music =
        document.getElementById("bg-music");

    music.play();

    showScreen("question-screen");
}

function goMenu() {
    showScreen("menu-screen");
}

function openMessage() {

    currentMessage = 0;

    messageText.innerText = messages[currentMessage];

    showScreen("message-screen");
}

function nextMessage() {

    currentMessage++;

    if(currentMessage < messages.length) {

        messageText.innerText = messages[currentMessage];

    } else {

        openGallery();
    }
}

function openGallery() {
    showScreen("gallery-screen");
}

function openVideos() {
    showScreen("video-screen");
}

function openThanks() {
    showScreen("thanks-screen");
}

noBtn.addEventListener("mouseover", () => {

    noBtn.style.position = "absolute";

    noBtn.style.left =
        Math.random() * 80 + "%";

    noBtn.style.top =
        Math.random() * 80 + "%";
});