const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

let messages = [
  "No",
  "Are you sure?",
  "Think again 🥺",
  "Please 💔",
  "You can’t escape 😈"
];
let msgIndex = 0;

// Start music on first click (browser safe)
document.addEventListener("click", () => {
  music.play();
}, { once: true });

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 16 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 700);

// NO button behavior
noBtn.addEventListener("click", () => {
  noBtn.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;

  const x = Math.random() * 120 - 60;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = translate(${x}px, ${y}px);

  const size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size * 1.2 + "px";
});

// YES button
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});