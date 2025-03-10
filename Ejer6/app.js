document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Limpiar estado previo
    email.classList.remove('invalid');
    emailError.textContent = '';
    
    // Validar el email
    if (!email.value) {
        emailError.textContent = 'Por favor, ingrese un correo electrónico';
        email.classList.add('invalid');
        return;
    }
    
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Por favor, ingrese un correo electrónico válido';
        email.classList.add('invalid');
        return;
    }
    
    // Si todo está correcto
    alert('¡Correo electrónico válido! Formulario enviado.');
    this.reset();
});
