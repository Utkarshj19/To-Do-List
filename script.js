document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete">Delete</button>
        `;
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.querySelector('.delete').addEventListener('click', () => {
            li.remove();
        });
        todoList.appendChild(li);

        todoInput.value = '';
    }
});
