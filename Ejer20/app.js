const kilometrosInput = document.getElementById('kilometros');
const millasOutput = document.getElementById('millas');

// Factor de conversión
const KM_A_MILLAS = 0.621371;

function convertirKmAMillas() {
    // Obtener el valor del input
    const kilometros = parseFloat(kilometrosInput.value);
    
    // Validar y convertir
    if (!isNaN(kilometros) && kilometros >= 0) {
        // Calcular millas y redondear a 2 decimales
        const millas = (kilometros * KM_A_MILLAS).toFixed(2);
        millasOutput.textContent = millas;
    } else {
        // Si el input no es válido, mostrar 0
        millasOutput.textContent = '0';
    }
}

// Event listener para actualización en tiempo real
kilometrosInput.addEventListener('input', convertirKmAMillas);

// Inicializar con valor por defecto
convertirKmAMillas();
