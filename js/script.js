"use strict";

const $HTML = document;

const car = $HTML.querySelector("#carEl");
const startBtn = $HTML.querySelector("#startBtn");
const carCont = $HTML.querySelector("#carCont");
const roadBorderLeft = $HTML.querySelector("#roadBorderLeft");
const roadBorderRight = $HTML.querySelector("#roadBorderRight");

const STEP = 88 * 2;

let x = 0;
let isStart = false;

// carni yangilash
const carPosition = () => {
  car.style.transform = `translateX(${x}px)`;
};

// start tugmasi
startBtn.addEventListener("click", () => {
  isStart = !isStart;
  startBtn.textContent = isStart ? "Stop" : "Start";
});

// tugmalar
document.addEventListener("keydown", (e) => {
  if (!isStart) return;

  // elementlarning koordinatalari
  const carRect = car.getBoundingClientRect();
  const leftBorder = roadBorderLeft.getBoundingClientRect();
  const rightBorder = roadBorderRight.getBoundingClientRect();

  // mashina markazi
  const carCenter = carRect.left + carRect.width / 2;

  // chegaralar
  const minX = leftBorder.right + carRect.width / 2;
  const maxX = rightBorder.left - carRect.width / 2;

  if (e.key === "ArrowRight") {
    // o‘ngga yurmoqchi bo‘lsa va hali chegaradan chiqmagan bo‘lsa
    if (carCenter + STEP <= maxX) {
      x += STEP;
    }
  } else if (e.key === "ArrowLeft") {
    // chapga yurmoqchi bo‘lsa va hali chegaradan chiqmagan bo‘lsa
    if (carCenter - STEP >= minX) {
      x -= STEP;
    }
  }

  carPosition();
});

carPosition();