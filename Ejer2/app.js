let contador = 0;

document.getElementById('btnContador').addEventListener('click', function() {
    contador++;
    document.getElementById('contador').textContent = contador;
});
