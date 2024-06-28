
const url_API_excursiones = "http://127.0.0.1:5000/api/obtener_excursiones";


//Este es el elemento <section> que recibirá las tarjetas con las excursiones
const receptorContenidoDinamico = document.getElementById("receptor-contenido-dinamico")


document.addEventListener("DOMContentLoaded", (e) => {
    
    
    console.log(receptorContenidoDinamico)
    console.log("EL DOCUMENTO FUE CARGADO !!")

    fetch(url_API_excursiones)
    .then(respuesta => respuesta.json())
    .then(datos => cargarContenido(datos))

});



function cargarContenido(contenido){
    //Voy a recibir un json que es una array de "diccionarios"

    contenido.forEach(element => {

        //Primero creo el elemento contenedor
        const tarjetaExcursion = document.createElement("article");
        tarjetaExcursion.classList.add("tarjeta-excursion") // Le agrego su clase para los estilos

        //Se crea el div que contiene al titulo
        const tituloExcursion = document.createElement("div");
        tituloExcursion.classList.add("titulo-excursion") // Le agrego su clase para los estilos

        //Se crea el h2
        const h2TituloExcursion = document.createElement("h2");
        h2TituloExcursion.classList.add("texto-centrado"); // Le agrego su clase para los estilos
        h2TituloExcursion.innerText = element["titulo"]; //Obtengo el titulo

        tituloExcursion.appendChild(h2TituloExcursion) //Agrego el h2 a su div

        //Se crea el div de contenido de la excursion
        const contenidoExcursion = document.createElement("div");
        contenidoExcursion.classList.add("contenido-excursion");

        //Ahora se crean los divs que van dentro del anterior

        //El div de la imagen
        const contenidoExcursionImagen = document.createElement("div");
        contenidoExcursionImagen.classList.add("contenido-excursion-imagen");
           //La imagen que va dentro del div
        
        const imagen = document.createElement("img");
        imagen.setAttribute("src", element["url_imagen"]); //Setear scr

            //Agregar la imagen al div
        contenidoExcursionImagen.appendChild(imagen)

        //El div de los textos
        const contenidoExcursionTextos = document.createElement("div");
        contenidoExcursionTextos.classList.add("contenido-excursion-textos")

            //Ahora hay que crear los elementos que van dentro del div anterior
            const contenidoExcursionDestino = document.createElement("p");
            contenidoExcursionDestino.classList.add("contenido-excursion-destino");
            contenidoExcursionDestino.innerText = element["destino"]

            const contenidoExcursionDescripcion = document.createElement("p");
            contenidoExcursionDescripcion.classList.add("contenido-excursion-descripcion");
            contenidoExcursionDescripcion.innerText = element["descripcion"]

        
            const contenidoExcursionPrecio = document.createElement("p");
            contenidoExcursionPrecio.classList.add("contenido-excursion-precio");
            contenidoExcursionPrecio.innerText = "Precio por persona: "
                //El span que muestra el precio
            const spanPrecio = document.createElement("span");
            spanPrecio.innerText ="$" + element["precio_por_persona"] //OJO QUE ESTO LLEVA UN SPAN !!! DESPUES LO VEO
                //Agregar el span al p
            contenidoExcursionPrecio.appendChild(spanPrecio)


            //Agregar los últimos 3 elementos creados al div

            contenidoExcursionTextos.appendChild(contenidoExcursionDestino);
            contenidoExcursionTextos.appendChild(contenidoExcursionDescripcion);
            contenidoExcursionTextos.appendChild(contenidoExcursionPrecio);

            //Hay que agregar los divs de contenido excursion
            contenidoExcursion.appendChild(contenidoExcursionImagen)
            contenidoExcursion.appendChild(contenidoExcursionTextos)

            //Ya se puede agregar todo secuencialmente a la tarjeta !
                //Primero el div con el titulo
            tarjetaExcursion.appendChild(tituloExcursion);
                //El div con los contenidos
            tarjetaExcursion.appendChild(contenidoExcursion);

            receptorContenidoDinamico.appendChild(tarjetaExcursion)
    });
}