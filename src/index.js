const nombre = document.querySelector("#nombre");
const saludarButton = document.querySelector("#saludar_button");
const div = document.querySelector("#saludo");
const campoEdad = document.querySelector("#edad");
const languageForm = document.querySelector("#languageForm");

const translations = {
    spanish: {
        name: "Nombre:",
        male: "Masculino",
        female: "Femenino",
        age: "Edad:",
        greet: "Saludar",
        young_male: "Joven",
        mr: "Sr.",
        young_female: "Señorita",
        mrs: "Sra.",
        good_morning: "Buenos días",
        good_afternoon: "Buenas tardes",
        good_night: "Buenas noches"
    },
    english: {
        name: "Name:",
        male: "Male",
        female: "Female",
        age: "Age:",
        greet: "Greet",
        young_male: "Young Mr.",
        mr: "Mr.",
        young_female: "Miss",
        mrs: "Mrs.",
        good_morning: "Good morning",
        good_afternoon: "Good afternoon",
        good_night: "Good night"
    }
};

languageForm.addEventListener("change", (event) => {
    const language = document.querySelector('input[name="idioma"]:checked').value;
    updateLanguage(language);
});

function updateLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}

saludarButton.addEventListener("click", (event) => {
    event.preventDefault();
    let fechaActual = new Date();
    let hora = fechaActual.getHours();
    const nombreSaludo = nombre.value;
    const language = document.querySelector('input[name="idioma"]:checked').value;
    const identificadorGenero = esVaron(parseInt(campoEdad.value), language);
    div.innerHTML = "<p>" + saludarPorHora(hora, language) + identificadorGenero + " " +
     nombreSaludo + "</p>";
});

function saludarPorHora(hora, language) {
    if (hora >= 6 && hora < 12) {
        return translations[language].good_morning + " ";
    } else if (hora >= 12 && hora < 20) {
        return translations[language].good_afternoon + " ";
    } else {
        return translations[language].good_night + " ";
    }
}

function esVaron(edad, language) {
    if (document.querySelector("#masculino").checked == true) {
        if (edad < 30) {
            return translations[language].young_male + " ";
        }
        return translations[language].mr + " ";
    }
    if (edad < 30) {
        return translations[language].young_female + " ";
    }
    return translations[language].mrs + " ";
}