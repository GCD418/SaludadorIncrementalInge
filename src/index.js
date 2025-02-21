const nombre = document.querySelector("#nombre");
const saludarButton = document.querySelector("#saludar_button");
const div = document.querySelector("#saludo");

const saludos = ["Buenos días", "Buenas tardes", "Buenas noches"];

saludarButton.addEventListener("click", (event) => {
  event.preventDefault();
  let fechaActual = new Date();
  let hora = fechaActual.getHours();
  const nombreSaludo = nombre.value;
  const identificadorGenero = esVaron();
  div.innerHTML = "<p>" + saludarPorHora(hora) + identificadorGenero + " " +
   nombreSaludo +  "</p>";
});

function saludarPorHora(hora) {
  if (hora >= 6 && hora < 12) {
    return "Buenos días ";
  } else if (hora >= 12 && hora < 20) {
    return "Buenas tardes ";
  } else {
    return "Buenas noches ";
  }
}

function esVaron() {
  if (document.querySelector("#masculino").checked == true) {
    return "Sr. ";
  }
  return "Sra. ";
}