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