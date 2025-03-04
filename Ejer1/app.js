const parrafo = document.getElementById('textoCambio');
const boton = document.getElementById('botonCambiar');

boton.addEventListener('click', () => {
    parrafo.textContent = '¡El texto ha sido cambiado!';
});
