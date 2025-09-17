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


// =================================================================================


// "use strict";

// const $HTML = document;

// const car = $HTML.querySelector("#carEl");
// const startBtn = $HTML.querySelector("#startBtn");
// const screen = $HTML.querySelector(".screen");

// const STEP = 88 * 2;
// let x = 0;
// let isStart = false;
// let gameLoop;

// // 3 yo‘lak (markazlashgan)
// const LANES = [-176, 0, 176];
// const ENEMY_COUNT = 3;
// const enemies = [];

// // dushman mashinalar ro‘yxati
// const enemyCars = [
//   "./assets/img/car-1.png",
//   "./assets/img/car-2.png",
//   "./assets/img/car-3.png",
// ];

// // boshlang‘ich tezlik
// let speed = 2;

// // car joylashuvi
// const carPosition = () => {
//   car.style.transform = `translateX(${x}px)`;
// };

// // random lane olish
// const randomLane = () => LANES[Math.floor(Math.random() * LANES.length)];

// // random rasm olish
// const randomCarImage = () =>
//   enemyCars[Math.floor(Math.random() * enemyCars.length)];

// // dushman mashina yaratish
// const createEnemies = () => {
//   for (let i = 0; i < ENEMY_COUNT; i++) {
//     const enemy = document.createElement("div");
//     enemy.classList.add("enemy");

//     // rasmni random beramiz
//     enemy.style.backgroundImage = `url(${randomCarImage()})`;

//     screen.appendChild(enemy);

//     resetEnemy(enemy, true);
//     enemies.push(enemy);
//   }
// };

// // dushman mashina joyini tiklash
// const resetEnemy = (enemy, first = false) => {
//   enemy.style.left = `calc(50% + ${randomLane()}px)`;
//   enemy.style.top = first ? `-${Math.random() * 500}px` : `-150px`;
//   enemy.style.backgroundImage = `url(${randomCarImage()})`;
// };

// // o‘yin sikli
// const loop = () => {
//   enemies.forEach((enemy) => {
//     let top = parseFloat(enemy.style.top) || 0;
//     top += speed; // tezlik
//     enemy.style.top = top + "px";

//     if (top > screen.clientHeight) {
//       resetEnemy(enemy);
//     }

//     // to‘qnashuv tekshirish
//     const carRect = car.getBoundingClientRect();
//     const enemyRect = enemy.getBoundingClientRect();

//     if (
//       carRect.left < enemyRect.right &&
//       carRect.right > enemyRect.left &&
//       carRect.top < enemyRect.bottom &&
//       carRect.bottom > enemyRect.top
//     ) {
//       stopGame();
//       alert("💥 Game Over!");
//     }
//   });

//   // sekin-sekin tezlashtiramiz
//   speed += 0.002;

//   if (isStart) {
//     gameLoop = requestAnimationFrame(loop);
//   }
// };

// // o‘yin boshlash
// const startGame = () => {
//   isStart = true;
//   startBtn.textContent = "Stop";
//   speed = 2; // reset speed
//   createEnemies();
//   loop();
// };

// // o‘yin to‘xtatish
// const stopGame = () => {
//   isStart = false;
//   startBtn.textContent = "Start";
//   cancelAnimationFrame(gameLoop);
//   enemies.forEach((e) => e.remove());
//   enemies.length = 0;
// };

// // tugma
// startBtn.addEventListener("click", () => {
//   if (isStart) {
//     stopGame();
//   } else {
//     startGame();
//   }
// });

// // mashina boshqaruv
// document.addEventListener("keydown", (e) => {
//   if (!isStart) return;

//   if (e.key === "ArrowRight" && x < LANES[LANES.length - 1]) {
//     if (carCenter + STEP <= maxX) {
//       x += STEP;
//     }
//   } else if (e.key === "ArrowLeft" && x > LANES[0]) {
//     if (carCenter - STEP >= minX) {
//       x -= STEP;
//     }
//   }
//   carPosition();
// });

// carPosition();