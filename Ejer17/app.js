const cuadrado = document.getElementById('cuadrado');
let posX = 0;
let posY = 0;
const velocidad = 50;

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            posX = Math.max(0, posX - velocidad);
            break;
        case 'ArrowRight':
            posX = Math.min(window.innerWidth - 50, posX + velocidad);
            break;
        case 'ArrowUp':
            posY = Math.max(0, posY - velocidad);
            break;
        case 'ArrowDown':
            posY = Math.min(window.innerHeight - 50, posY + velocidad);
            break;
    }
    
    cuadrado.style.left = posX + 'px';
    cuadrado.style.top = posY + 'px';
});