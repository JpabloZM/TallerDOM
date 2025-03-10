let timerInterval;
let count = 10;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function startCountdown() {
    // Deshabilitar el botón de inicio
    startButton.disabled = true;
    
    timerInterval = setInterval(() => {
        count--;
        timerDisplay.textContent = count;
        
        if (count <= 0) {
            clearInterval(timerInterval);
            timerDisplay.style.color = '#ff0000';
            startButton.disabled = false;
        }
    }, 1000);
}

function resetCountdown() {
    // Limpiar el intervalo existente
    clearInterval(timerInterval);
    
    // Resetear valores
    count = 10;
    timerDisplay.textContent = count;
    timerDisplay.style.color = '#333';
    startButton.disabled = false;
}

startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetCountdown);
