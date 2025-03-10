const colorSelect = document.getElementById('colorSelect');
const colorName = document.getElementById('colorName');

// Función para cambiar el color de fondo
function cambiarColorFondo() {
    const colorSeleccionado = colorSelect.value;
    const textoColor = colorSelect.options[colorSelect.selectedIndex].text;
    
    // Cambiar el color de fondo
    document.body.style.backgroundColor = colorSeleccionado;
    
    // Actualizar el texto que muestra el color actual
    colorName.textContent = textoColor;
}

// Agregar event listener para el cambio de color
colorSelect.addEventListener('change', cambiarColorFondo);

// Establecer el color inicial
cambiarColorFondo();
