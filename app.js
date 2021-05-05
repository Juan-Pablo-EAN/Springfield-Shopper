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

 const botonFb = document.querySelector(".botonFb");
 const botonIns = document.querySelector(".botonIns");
 const botonTwtt = document.querySelector(".botonTwtt");
 const botonWasp = document.querySelector(".botonWasp");
 
 botonFb.addEventListener("click", () => {
     window.open("https://facebook.com/", "_blank");
 })
 
 botonIns.addEventListener("click", () => {
     window.open("https://instagram.com/", "_blank");
 })
 
 botonTwtt.addEventListener("click", () => {
     window.open("https://twitter.com/", "_blank");
 })
 
 botonWasp.addEventListener("click", () => {
     window.open("https://web.whatsapp.com/", "_blank");
 })

const nav = document.querySelector(".barra")

let seMueve = false;
window.addEventListener("scroll", () => {
     if(window.scrollY > window.screen.availHeight){
         nav.style.animation = "navBarra1 1s both";
         seMueve = true;
     } else {
        if(seMueve){
            nav.style.animation = "navBarra2 1s both";
        }
     }
 })