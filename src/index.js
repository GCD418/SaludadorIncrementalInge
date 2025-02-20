const nombre = document.querySelector("#nombre");
const saludarButton = document.querySelector("#saludar_button");
const div = document.querySelector("#saludo");

saludarButton.addEventListener("click", (event) => {
  event.preventDefault();
  const nombreSaludo = nombre.value;
  div.innerHTML = "<p>" + "Hola " + nombreSaludo + "</p>";
});