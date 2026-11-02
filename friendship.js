
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.textContent = "Yayyy! ❤️ tushar is now happy! 🥹💗";
  yesBtn.textContent = "Friends Forever 💖";
});

function moveButton() {
  const margin = 12;
  const maxX = window.innerWidth - noBtn.offsetWidth - margin;
  const maxY = window.innerHeight - noBtn.offsetHeight - margin;

  const x = margin + Math.random() * Math.max(0, maxX - margin);
  const y = margin + Math.random() * Math.max(0, maxY - margin);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "mouse") moveButton();
});

noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveButton();
}, { passive: false });

noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveButton();
});

window.addEventListener("resize", moveButton);
