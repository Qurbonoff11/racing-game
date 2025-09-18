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

// car positions
const carPosition = () => {
  car.style.transform = `translateX(${x}px)`;
};

// start/stop function
const startStop = () => {
    isStart = !isStart;
    startBtn.classList.toggle("start__button--active");
};

// start/stop button
startBtn.addEventListener("click", startStop);

// start/stop enter
$HTML.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    startStop();
  }
})

// car movement
$HTML.addEventListener("keydown", (e) => {
  if (!isStart) return;
  console.log(e.key);

  // borders cordinates
  const carRect = car.getBoundingClientRect();
  const leftBorder = roadBorderLeft.getBoundingClientRect();
  const rightBorder = roadBorderRight.getBoundingClientRect();

  // car center
  const carCenter = carRect.left + carRect.width / 2;

  // borders limits
  const minX = leftBorder.right + carRect.width / 2;
  const maxX = rightBorder.left - carRect.width / 2;

  // car movement logic
  if (e.key === "ArrowRight") {
    if (carCenter + STEP <= maxX) {
      x += STEP;
    }
  } else if (e.key === "ArrowLeft") {
    if (carCenter - STEP >= minX) {
      x -= STEP;
    }
  }

  carPosition();
});

carPosition();
