document.addEventListener('DOMContentLoaded', () => {
    const btnIrArriba = document.getElementById('btnIrArriba');

    function toggleBotonVisibilidad() {
        if (window.scrollY > 300) {
            btnIrArriba.style.display = 'block';
        } else {
            btnIrArriba.style.display = 'none';
        }
    }

    window.addEventListener('scroll', toggleBotonVisibilidad);

    btnIrArriba.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});