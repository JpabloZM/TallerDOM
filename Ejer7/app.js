const passwordInput = document.getElementById('passwordInput');
const showPasswordCheckbox = document. getElementById('showPassword');

showPasswordCheckbox.addEventListener('change', function() {
    passwordInput.type = this.checked ? 'text' : 'password';
}) ;