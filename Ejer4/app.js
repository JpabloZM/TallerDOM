document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement('li');
        
        // Crear el span para el texto de la tarea
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Crear el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'deleteButton';
        deleteButton.onclick = function() {
            li.remove();
        };
        
        // Agregar elementos al li
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});