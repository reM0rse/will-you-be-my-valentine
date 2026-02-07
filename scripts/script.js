const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

let messageIndex = 0;
let imageIndex = 1;

function handleYesClick() {
  window.location.href = "pages/yes.html";
}

// Runaway button logic
const noButton = document.querySelector(".no-button");
const message = document.querySelector("h2");
const meImage = document.querySelector("#me");
const audio = document.getElementById("whoosh");

function dothings() {
  audio
    .play()
    .catch((e) =>
      console.warn("Audio play blocked until user interaction:", e),
    );
  const margin = 20;
  const maxWidth = window.innerWidth - noButton.offsetWidth - margin;
  const maxHeight = window.innerHeight - noButton.offsetHeight - margin;

  const i = Math.floor(Math.random() * Math.max(0, maxWidth)) + margin / 2;
  const j = Math.floor(Math.random() * Math.max(0, maxHeight)) + margin / 2;

  noButton.style.position = "absolute";
  noButton.style.left = i + "px";
  noButton.style.top = j + "px";

  if (message) {
    message.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
  }

  if (meImage) {
    imageIndex = (imageIndex % 5) + 1;
    meImage.src = `./assets/${imageIndex}.png`;

    // Trigger wiggle animation
    // meImage.classList.remove('wiggle');
    // void meImage.offsetWidth; // Trigger reflow
    // meImage.classList.add('wiggle');
  }
}

function handleOpenMail() {
  document.body.style.backgroundColor = "#f5d0d0ff";
  document.querySelector(".container").style.display = "none";
  document.querySelector(".container-ask").style.display = "block";
}

if (noButton) {
  noButton.addEventListener("mouseover", () => {
    dothings();
  });
  noButton.addEventListener("click", () => {
    dothings();
  });
}

document.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => audio.pause())
        .catch((e) => console.log("Audio unlock failed:", e));
    }
  },
  { once: true },
);
