// controles de movimento
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");

const square = document.getElementById("square");

// escutar os controles

let left = 0;
let Top = 0;

btnLeft.addEventListener("click", () => {
  console.log("left");

  if (left <= 0) {
    return;
  }

  square.style.setProperty("left", `${(left -= 20)}px`);
});

btnRight.addEventListener("click", () => {
  console.log("right");

  if (left >= 850) {
    return;
  }

  square.style.setProperty("left", `${(left += 20)}px`);
});

btnUp.addEventListener("click", () => {
  console.log("up");

  if (Top <= 0) {
    return;
  }

  square.style.setProperty("top", `${(Top -= 20)}px`);
});

btnDown.addEventListener("click", () => {
  console.log("down");

  if (Top >= 350) {
    return;
  }

  square.style.setProperty("top", `${(Top += 20)}px`);
});

// alterar o border radius e o color do quadrado

const bordeRadius = document.getElementById("bordeRadius");

bordeRadius.addEventListener("input", () => {
  square.style.setProperty('border-radius', `${bordeRadius.value}%`);
});
