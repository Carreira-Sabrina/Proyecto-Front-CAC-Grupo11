
// Validacion de formulario
function validarCampos() {
    let nombre = document.querySelector('#nombre').value;
    let mail = document.querySelector('#mail').value;

    // Expresion nombres y mail
    let soloPalabras = /^[a-z\s]+$/i;
    let pruebaEmail = /^[a-zA-Z\d._-]+@[a-zA-Z\d_-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})*$/;

    let datosValidos = true; 
    let msjError = 'Datos inválidos: ';
    if (nombre === '' || !soloPalabras.test(nombre)) {
        datosValidos = false;
        msjError += ' nombre';
    }

    if (mail === '' || !pruebaEmail.test(mail)) {
        datosValidos = false;
        msjError += ' mail';
    }

    let mensaje = document.querySelector('#rtaForm');
    if (datosValidos) {
        mensaje.innerHTML = 'Validación correcta!';
    } else {
        mensaje.innerHTML = msjError;
    }
}

// Capturo el formulario y escucho el evento
const formulario = document.querySelector('#formNombreMail');
formulario.addEventListener('submit', evento => {
    validarCampos();
    evento.preventDefault();
});
