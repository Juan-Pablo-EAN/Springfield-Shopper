/**
 * alert
 * operadores de igualdad
 * operadores de incremento
 * if else
 * while
 * for
 * break
 * funciones
 */

//efecto barra de navegacion

const nav = document.querySelector(".barra");

let seMueve = false;
window.addEventListener("scroll", () => {
    if (window.scrollY > window.screen.availHeight) {
        nav.style.animation = "navBarra1 1s both";
        seMueve = true;
    } else {
        if (seMueve) {
            nav.style.animation = "navBarra2 1s both";
        }
    }
});

const fondoModal = document.querySelector(".fondoModal");

const noticias = [
    {
        title: "Albondiga humana ve platillo volador",
        img: "foto-homero.jpg"
    }, {
        title: "Local gays show their pride",
        img: "imagen1.jpg"
    }, {
        title: "Anciano incontinente gana Miss Teen America",
        img: "miss-Burns.jpg"
    }, {
        title: "Los Simpson estafan Springfield",
        img: "familia-simpson.png"
    }, {
        title: "Alcohol prohibido en Springfield",
        img: "borrachos-sin-alcohol.jpg"
    }, {
        title: "Niño descubre un cometa",
        img: "bart-cometa.jpg"
    }, {
        title: "Gran hombre gordo tiene un gran corazón gordo",
        img: "homero-comiendo.jpg"
    }, {
        title: "Ardilla parecida a Abraham Lincoln encontrada",
        img: "ardilla-de-lincon.jpg"
    }
];

document.querySelector(".modalClose").addEventListener("click", () => {
    fondoModal.style.display = "none";
})

const dia = document.querySelector(".inptFecha");
const buscar = document.getElementById("buscar");

buscar.addEventListener("click", () => {
    if (dia.value != "") {
        mostrarNoticia(dia.value);
    } else {
        alert("Debes escoger una fecha primero");
    }
});

const fechaPortada = document.querySelector(".fechaPortada");
const titulo = document.querySelector(".tituloNoticia");
const imagen = document.querySelector(".imagenPortada");

const mostrarNoticia = (fecha) => {
    let numero = Math.round(Math.random() * 7);
    fondoModal.style.display = "block";
    fechaPortada.innerHTML = fecha;
    titulo.innerHTML = `${noticias[numero].title}`;
    imagen.innerHTML = `<img src="img/${noticias[numero].img}" alt="${numero}">`;
}

//eventos para botones del footer

const botonFb = document.querySelector(".botonFb");
const botonIns = document.querySelector(".botonIns");
const botonTwtt = document.querySelector(".botonTwtt");
const botonWasp = document.querySelector(".botonWasp");

botonFb.addEventListener("click", () => {
    window.open("https://facebook.com/", "_blank");
});

botonIns.addEventListener("click", () => {
    window.open("https://instagram.com/", "_blank");
});

botonTwtt.addEventListener("click", () => {
    window.open("https://twitter.com/", "_blank");
});

botonWasp.addEventListener("click", () => {
    window.open("https://web.whatsapp.com/", "_blank");
});