// Mensaje de bienvenida al cargar la página
window.onload = function() {
    alert("¡Bienvenido a mi portafolio!");
};

// Guardamos el HTML original con strong y span
const textoOriginal = `Mi nombre es <strong>Cristian Del Castillo</strong>
    soy un <span style="color: rgb(206, 26, 26);">desarrollador</span>
    junior de 23 años apasionado por la tecnología y el
    aprendizaje constante. He trabajado en diversos proyectos que forman parte de mi portafolio, donde
    he aplicado habilidades en desarrollo web, lógica de programación y resolución de problemas. Me
    caracterizo por ser curioso, disciplinado y siempre dispuesto a mejorar, buscando oportunidades 
    para crecer profesionalmente y aportar valor en cada proyecto en el que participo.`;

const textoNuevo = "¡Gracias por visitar mi portafolio! Estoy disponible para nuevos proyectos.";

function cambiarTexto() {
    const parrafo = document.querySelector("#sobremi p");
    if (parrafo.innerHTML.includes("Gracias")) {
        parrafo.innerHTML = textoOriginal;
    } else {
        parrafo.innerHTML = textoNuevo;
    }
}

// Muestra u oculta solo las tarjetas de habilidades
function toggleHabilidades() {
    const tarjetas = document.querySelector(".habilidades");
    if (tarjetas.style.display === "none") {
        tarjetas.style.display = "grid";
    } else {
        tarjetas.style.display = "none";
    }
}
// Abre y cierra el menú hamburguesa
function toggleMenu() {
    const items = document.querySelectorAll(".nav-item");
    items.forEach(function(item) {
        item.classList.toggle("activo");
    });
}