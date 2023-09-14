const btnNuevoRegistro = document.querySelector('#btnNuevoRegistro')
const btnCancelarNuevoRegistro = document.querySelector('#ibtnCancelar')
const btnAceptarNuevoRegistro = document.querySelector('#ibtnAceptar')
const popUpNuevoRegistro = document.querySelector('.container-transp-popUp')

btnNuevoRegistro.addEventListener('click', mostrarPopUpNuevoRegistro)
btnCancelarNuevoRegistro.addEventListener('click', cerrarPopUpNuevoRegistro)
btnAceptarNuevoRegistro.addEventListener('click', cerrarPopUpNuevoRegistro)

function mostrarPopUpNuevoRegistro(){
    popUpNuevoRegistro.classList.remove('invisible')
}

function cerrarPopUpNuevoRegistro(){
    popUpNuevoRegistro.classList.add('invisible')
}