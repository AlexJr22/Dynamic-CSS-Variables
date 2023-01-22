// selecionar os quadrados
const elements = document.querySelectorAll(".element");

const selectSquare = (index) => {
  elements.forEach((element) => {
    element.classList.remove("active");
  });

  elements[index].classList.add("active");
};

// escutar os controles
