// ./index.js

// 1. IMPORTACIONES
// import { sum } from "./lib/calculadora.js";

import { sum } from "./lib/calculadora.js";

// 2. VARIABLES
const getResult = document.querySelector("#get-result");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

// 3. EVENTOS

getResult.addEventListener("click", (event) => {
  // DETENER LA RECARGA DE PÁGINA POR DEFECTO
  event.preventDefault();

  // ABSTRAIGA LOS DATOS DE LAS VARIABLES

  // A. OBTENER DATO DE FORMULARIO
  const quantityOne = form["quantity-one"].value;
  // B. CONVERTIR A "INTEGER"
  const parsedQuantityOne = parseInt(quantityOne);

  const quantityTwo = form["quantity-two"].value;
  const parsedQuantityTwo = parseInt(quantityTwo);

  const resultSum = sum(parsedQuantityOne, parsedQuantityTwo);

  result.innerHTML = resultSum;

  return;
});
