const formulario = document.getElementById("formulario");
const opinionInput = document.getElementById("opinion");
const entradasDiv = document.getElementById("entradas");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const texto = opinionInput.value.trim();
  if (texto === "") return;

  const nuevaEntrada = document.createElement("div");
  nuevaEntrada.classList.add("entrada");
  nuevaEntrada.textContent = texto;

  entradasDiv.prepend(nuevaEntrada); // Agrega arriba del todo
  opinionInput.value = ""; // Limpia el textarea
});
