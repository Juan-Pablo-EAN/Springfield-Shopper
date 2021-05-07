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

//para la seleccion de fechas

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

//registro de usuarios 

class persona {

    constructor(nombre, apellido, correo, nacimiento, contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.nacimiento = nacimiento;
        this.contraseña = contraseña;
    }
}

const usuarios = [];

const mailLogin = document.querySelector(".mailLogin");
const passwLogin = document.querySelector(".passwLogin");
const checkbox = document.querySelector(".checkLogin");
const acceder = document.querySelector(".acceder");

//para validar el inicio de sesión

acceder.addEventListener("click", (e) => {
    var accede = false;
    for (user in usuarios) {
        if (usuarios[user].correo === mailLogin.value && usuarios[user].contraseña === passwLogin.value) {
            accede = true;
            if (checkbox.checked) {
                console.log(checkbox.value);
                alert(`Bienvenido ${usuarios[user].nombre}`);
                window.open(`sites/sesion.html?${usuarios[user].nombre}`);
                break;
            } else {
                alert("Acepta térmimos y condiciones");
            }
        } else {
            accede = false;
            e.preventDefault();
        }
    }
    if (accede === false) {
        alert("Correo o contraseña incorrectos");
    }
})

const nombre = document.querySelector(".nombreR");
const apellido = document.querySelector(".apellidoR");
const email = document.querySelector(".emailR");
const fecha = document.querySelector(".fechaR");
const passw1 = document.querySelector(".passR1");
const passw2 = document.querySelector(".passR2");
const botonRegistro = document.querySelector(".registrarBtn");
const ventana = document.querySelector(".fondoVentana");

botonRegistro.addEventListener("click", (e) => {
    if (passw1.value === passw2.value) {
        registrar(nombre.value, apellido.value, email.value, fecha.value, passw1.value);
        ventanaModal(nombre.value, email.value);
        e.preventDefault(); //esto solo es porque no hay una base de datos 
    } else {
        alert("La contraseña no coincide");
        e.preventDefault();
    }
});

function registrar(name, lastname, mail, date, password) {
    const usuario = new persona(name, lastname, mail, date, password);
    usuarios.push(usuario);
}

const ventanaModal = (namePerson, mailPerson) => {
    window.load
    ventana.style.display = "flex";
    document.querySelector(".ventanaRegistro").innerHTML = `
            <div>
                <h2>Springfield Shopper</h2>
            </div>
            <div>
                <h2>
                    <strong>Bienvenido ${namePerson}</strong>
                </h2>
            </div>
            <div>
                <h3>¡Has sido registrado con exito!</h3>
            </div>
            <div>
                <p>
                    <strong>Hemos enviado un mensaje a ${mailPerson} para que confirmes tu correo</strong>
                </p>
            </div>
            <div class="acepto"><button>Aceptar</button></div>`;
    console.log(usuarios);
    botonAceptar();
}

const inputs = [nombre, apellido, email, fecha, passw1, passw2]

const botonAceptar = () => {
    document.querySelector(".acepto").addEventListener("click", () => {
        ventana.style.display = "none";
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    });
}

console.log(usuarios);

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