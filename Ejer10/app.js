// Obtener referencias a los elementos del DOM
const productoSelect = document.getElementById('producto');
const cantidadInput = document.getElementById('cantidad');
const totalSpan = document.getElementById('total');

// Función para calcular y actualizar el total
function actualizarTotal() {
    const precioUnitario = parseFloat(productoSelect.value);
    const cantidad = parseInt(cantidadInput.value);
    
    // Validar que la cantidad sea al menos 1
    if (cantidad < 1) {
        cantidadInput.value = 1;
        cantidad = 1;
    }
    
    // Calcular el total
    const total = precioUnitario * cantidad;
    
    // Actualizar el total en la página
    totalSpan.textContent = total.toFixed(2);
}

// Agregar event listeners para los cambios
productoSelect.addEventListener('change', actualizarTotal);
cantidadInput.addEventListener('input', actualizarTotal);

// Calcular el total inicial
actualizarTotal();
