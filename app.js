"use strict";
const GI = {
  createElement(tag, atributes) {
    let element = document;
    return document.createElement(tag);
  },
};

const to_do = [
  "Alimentar al perro",
  "Estudiar para prueba escrita",
  "Pagar taxes",
  "Pasear a perro",
  "Comprar entradas para el cine",
];

to_do.forEach((el) => {
  //contenedor
  const newDiv = document.createElement("div");

  //texto
  var parrafo = document.createElement("p");
  parrafo.textContent = el;

  //input
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = el;

  newDiv.append(parrafo);
  newDiv.append(checkbox);
  document.querySelector(".js-cont-todo").append(newDiv);
});

let item = document.querySelectorAll(".js-cont-todo>div input");

for (let index = 0; index < item.length; index++) {
  item[index].addEventListener("change", function () {
    if (this.checked) {
      this.parentNode.querySelector('p').classList.add("checksito");
    } else {
        this.parentNode.querySelector('p').classList.remove("checksito");

    }
  });
}
