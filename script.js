let current = 1;
const screens = document.querySelectorAll(".screen");

// Move to next screen
function nextScreen() {
  screens[current - 1].classList.remove("active");
  screens[current].classList.add("active");

  if (current === 1) startCountdown();
  if (current === 2) startType();
  if (current === 5) startEnding();

  current++;
}

// Countdown
let count = 3;
function startCountdown() {
  const el = document.getElementById("countdown");
  const timer = setInterval(() => {
    count--;
    el.textContent = count;
    if (count === 0) {
      clearInterval(timer);
      nextScreen();
    }
  }, 1000);
}

// Typewriter message
const message = "Today is special... because YOU exist 💖";
let i = 0;

function startType() {
  const el = document.getElementById("typeText");
  const interval = setInterval(() => {
    el.textContent += message.charAt(i);
    i++;
    if (i >= message.length) {
      clearInterval(interval);
      document.body.onclick = nextScreen;
    }
  }, 80);
}

// Candle interaction
function blowCandle() {
  document.querySelector(".candle").textContent = "💨";
  startConfetti();
  setTimeout(nextScreen, 800);
}

// Confetti effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 180; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5 + 2,
      d: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360},100%,60%)`
    });
  }
  setInterval(drawConfetti, 20);
}

function drawConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
}

// Ending typewriter
const endingMessage =
" You are not just my best friend, \n  you are my brother, my smile,\n \n and my forever support 💖Some friendships don’t fade with time.\nThey grow stronger, deeper, and warmer.\n\nThank you for being you.";

let e = 0;
function startEnding() {
  const el = document.getElementById("endingText");
  const interval = setInterval(() => {
    el.innerHTML += endingMessage.charAt(e) === "\n" ? "<br>" : endingMessage.charAt(e);
    e++;
    if (e >= endingMessage.length) clearInterval(interval);
  }, 90);
}

