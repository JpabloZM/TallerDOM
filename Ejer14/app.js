const boton = document.getElementById('mostrarNotificacion');
const notificacion = document.getElementById('notificacion');

function mostrarNotificacion() {
    // Remover clase oculto para mostrar la notificación
    notificacion.classList.remove('oculto');
    
    // Configurar el temporizador para ocultar la notificación
    setTimeout(() => {
        notificacion.classList.add('oculto');
        
        // Esperar a que termine la animación para reiniciar la barra de progreso
        setTimeout(() => {
            const barraProgreso = notificacion.querySelector('.barra-progreso');
            barraProgreso.style.animation = 'none';
            barraProgreso.offsetHeight; // Forzar un reflow
            barraProgreso.style.animation = null;
        }, 300);
    }, 3000);
}

// Agregar event listener al botón
boton.addEventListener('click', mostrarNotificacion);
