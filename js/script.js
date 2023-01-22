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

  square.style.setProperty("left", `${(left -= 10)}px`);
});

btnRight.addEventListener("click", () => {
  console.log("right");

  square.style.setProperty("left", `${(left += 10)}px`);
});

btnUp.addEventListener("click", () => {
  console.log("up");

  square.style.setProperty("top", `${(Top -= 10)}px`);
});

btnDown.addEventListener("click", () => {
  console.log("down");
  
  square.style.setProperty("top", `${(Top += 10)}px`);
});
