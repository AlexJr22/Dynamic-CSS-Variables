const square = document.getElementById("square"); // quadrado que terá suas propriedades css alteradas

// controles de movimento
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");

// escutando os controles

let left = 0;
let Top = 0;

// mover para esquerda
btnLeft.addEventListener("click", () => {
  console.log("left");

  if (left <= 0) {
    return;
  }

  square.style.setProperty("left", `${(left -= 20)}px`);
});

// mover para direita
btnRight.addEventListener("click", () => {
  console.log("right");

  if (left >= 850) {
    return;
  }

  square.style.setProperty("left", `${(left += 20)}px`);
});

// mover para cima
btnUp.addEventListener("click", () => {
  console.log("up");

  if (Top <= 0) {
    return;
  }

  square.style.setProperty("top", `${(Top -= 20)}px`);
});

// mover para baixo
btnDown.addEventListener("click", () => {
  console.log("down");

  if (Top >= 350) {
    return;
  }

  square.style.setProperty("top", `${(Top += 20)}px`);
});

// alterar o border radius

const bordeRadius = document.getElementById("bordeRadius"); // input=range

bordeRadius.addEventListener("input", () => {
  square.style.setProperty("border-radius", `${bordeRadius.value}%`);
});

// alterar o background-color

const colorBox = document.getElementById("colorBox"); // input=color

colorBox.addEventListener("input", () => {
  square.style.setProperty("background-color", `${colorBox.value}`);
});
