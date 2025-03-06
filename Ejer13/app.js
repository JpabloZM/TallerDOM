document.getElementById('formularioDatos').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    
    const tbody = document.querySelector('#tablaDatos tbody');
    const newRow = tbody.insertRow();
    
    newRow.insertCell().textContent = nombre;
    newRow.insertCell().textContent = email;
    newRow.insertCell().textContent = telefono;
    
    this.reset();
});