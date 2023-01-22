// controles de movimento
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");

// escutar os controles
btnLeft.addEventListener("click", () => {
  console.log("esqueda");
  
});

btnRight.addEventListener("click", () => {
  console.log("direita");
});

btnUp.addEventListener("click", () => {
  console.log("cima");
});

btnDown.addEventListener("click", () => {
  console.log("baixo");
});
