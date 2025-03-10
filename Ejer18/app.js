// Array con las URLs de las imágenes
const imagenes = [
    'https://picsum.photos/800/400?random=1',
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3',
    'https://picsum.photos/800/400?random=4',
    'https://picsum.photos/800/400?random=5'
];

// Elementos del DOM
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const imagenActual = document.getElementById('imagenActual');
const indiceActual = document.getElementById('indiceActual');
const total = document.getElementById('total');

// Estado inicial
let indiceImagen = 0;
total.textContent = imagenes.length;

// Función para actualizar la imagen
function actualizarImagen() {
    // Actualizar la imagen
    imagenActual.style.opacity = '0';
    
    setTimeout(() => {
        imagenActual.src = imagenes[indiceImagen];
        imagenActual.style.opacity = '1';
        
        // Actualizar el contador
        indiceActual.textContent = indiceImagen + 1;
        
        // Actualizar estado de los botones
        btnAnterior.disabled = indiceImagen === 0;
        btnSiguiente.disabled = indiceImagen === imagenes.length - 1;
    }, 300);
}

// Event listeners para los botones
btnAnterior.addEventListener('click', () => {
    if (indiceImagen > 0) {
        indiceImagen--;
        actualizarImagen();
    }
});

btnSiguiente.addEventListener('click', () => {
    if (indiceImagen < imagenes.length - 1) {
        indiceImagen++;
        actualizarImagen();
    }
});

// Inicializar la galería
actualizarImagen();
