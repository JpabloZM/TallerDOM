const botonCargar = document.getElementById('cargarDatos');
const contenedor = document.getElementById('contenedor');
const spinner = document.querySelector('.spinner');
const textoBoton = document.querySelector('.texto-btn');

// Datos de ejemplo que simularemos cargar
const datosDePrueba = {
    titulo: "Datos Cargados Exitosamente",
    items: [
        "Elemento 1: Datos importantes",
        "Elemento 2: Información relevante",
        "Elemento 3: Estadísticas clave",
        "Elemento 4: Resultados finales",
        "Elemento 5: Conclusiones"
    ]
};

function cargarDatos() {
    // Deshabilitar el botón y mostrar spinner
    botonCargar.disabled = true;
    spinner.classList.remove('oculto');
    textoBoton.textContent = 'Cargando...';
    
    // Mostrar mensaje de carga
    contenedor.innerHTML = '<p>Cargando datos...</p>';
    
    // Simular tiempo de carga con setTimeout
    setTimeout(() => {
        // Crear el contenido HTML con los datos
        const contenidoHTML = `
            <div class="datos-cargados">
                <h2>${datosDePrueba.titulo}</h2>
                <ul>
                    ${datosDePrueba.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
        
        // Actualizar el contenido
        contenedor.innerHTML = contenidoHTML;
        
        // Restaurar el estado del botón
        botonCargar.disabled = false;
        spinner.classList.add('oculto');
        textoBoton.textContent = 'Cargar Datos';
    }, 2000); // Simular 2 segundos de carga
}

// Agregar event listener al botón
botonCargar.addEventListener('click', cargarDatos);
