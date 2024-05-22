//Referencia al botón de menú para dispositivos móviles
const botonMenuMovil = document.getElementById("btn__menu-movil");
//Referencia al nav
const barraMenu = document.getElementById("nav__contenedor");

//Se asocia el evento de click al botón
botonMenuMovil.addEventListener("click",()=>{

    barraMenu.classList.toggle("modo-movil")
})

