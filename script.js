const message = `Every heartbeat of mine whispers your name.
You are my today, my tomorrow, and my forever.
              Love you baby 🫶
In this life and all the seven births to come,
you are my one and only fiancée,
the love, my soul will always choose.
            💝`;

const speed = 60; // typing speed in ms
let index = 0;
let noBtnInterval = null;

const typeEl = document.getElementById("typewriter");
const noBtn = document.getElementById("noBtn");


// Initial No button setup
// noBtn.style.position = "fixed";
// noBtn.style.zIndex = "9999";

function typeWriter() {
    if (index < message.length) {
        typeEl.textContent += message.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        // ✅ Typewriter finished → start No button movement
        startNoButtonMovement();
    }
}

typeWriter();

/* =========================
   NO BUTTON MOVEMENT LOGIC
   ========================= */

function startNoButtonMovement() {
    if (noBtnInterval) return; // prevent multiple intervals

    noBtn.style.position = "fixed";
    noBtn.style.zIndex = "9999";

    noBtnInterval = setInterval(moveNoButton, 800);
}

function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.transition = "left 0.6s ease, top 0.6s ease";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Extra: instant escape on interaction (mobile + desktop)
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseenter", moveNoButton);

const yesBtn = document.getElementById("yesBtn");
const loveModal = document.getElementById("loveModal");
const loveAudio = document.getElementById("loveAudio");
const closeModalBtn = document.getElementById("closeModal");

closeModalBtn.addEventListener("click", () => {
    loveModal.classList.add("hidden");
    loveAudio.pause();
    loveAudio.currentTime = 0; // reset audio
});

document.addEventListener("click", (e) => {
    if (!loveModal.contains(e.target) && !yesBtn.contains(e.target)) {
        loveModal.classList.add("hidden");
        loveAudio.pause();
        loveAudio.currentTime = 0;
    }
});
yesBtn.addEventListener("click", () => {

    // stop No button movement
    if (noBtnInterval) clearInterval(noBtnInterval);

    // hide No button
    noBtn.style.display = "none";

    // show modal
    loveModal.classList.remove("hidden");

    // play audio (allowed because of click)
    loveAudio.currentTime = 0; // reset to start
    loveAudio.play();

});
