const url = location.href;

let n = parseInt(url.lastIndexOf("?"));
let nombre = url.substring(n + 1);

nombre = nombre.replace("%20", " ");

const saludo = document.querySelector(".saludo");
saludo.textContent = `Bienvenido ${nombre} al Springfield Shopper`;



