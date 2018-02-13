const todos = document.getElementById("todos");
const add = document.getElementById("add");
const newItemSection = document.getElementById("newItemSection");
const submit = document.info;
const clear = document.getElementById("clear");

localStorage.todos = localStorage.todos || "";
todos.innerHTML = localStorage.todos;

add.addEventListener("click", () => {
    add.style.display = "none";
    newItemSection.style.display = "block";
});

submit.addEventListener("submit", event => {
    event.preventDefault();
    add.style.display = "inline-block";
    newItemSection.style.display = "none";
    localStorage.todos += `
    <li>
        <h4>${document.info.item.value}</h4>
        <button id="todo" class="todo">Remove</button>
    </li>
    `;
    todos.innerHTML = localStorage.todos;
});

clear.addEventListener("click", () => {
    // delete items from localStorage
    // delete items from the HTML page
    localStorage.todos = "";
    todos.innerHTML = "";
});
