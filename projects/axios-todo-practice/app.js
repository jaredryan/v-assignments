const todos = document.getElementById("todos");
const add = document.getElementById("add");
const newItemSection = document.getElementById("newItemSection");
const submit = document.info;
const clear = document.getElementById("clear");
const undo = document.getElementById("undo");
const URL = "https://api.vschool.io/jared/todo";

// localStorage.todos = localStorage.todos || "";
// todos.innerHTML = localStorage.todos;
const retrieveAndRenderList = () => {
    let list = "";
    axios.get(URL).then(response => {
        let entry;
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
            entry = data[i];
            if (entry.title !== undefined || entry.price !== undefined || entry.description !== undefined || entry.completed !== undefined) {
                if (entry.completed) {
                    list += `
                    <li class="checked">
                        <h4>Item: ${entry.title}</h4>
                        <h5>Price: $${entry.price}</h5>
                        <h5>Description: ${entry.description}</h5>
                        <img src="${entry.imgUrl}"/>
                        <input id="checkBox" type="checkbox" class="checkBox" checked>
                        <p id="todoId">${entry._id}</p>
                        <p id="title">${entry.title}</p>
                        <button id="remove" class="remove">Remove</button>
                    </li>
                    `;
                } else {
                    list += `
                    <li>
                        <h4>Item: ${entry.title}</h4>
                        <h5>Price: $${entry.price}</h5>
                        <h5>Description: ${entry.description}</h5>
                        <img src="${entry.imgUrl}"/>
                        <input id="checkBox" type="checkbox" class="checkBox">
                        <p id="todoId">${entry._id}</p>
                        <p id="title">${entry.title}</p>
                        <button id="remove" class="remove">Remove</button>
                    </li>
                    `;
                }

            }
        }
        todos.innerHTML = list;
    });
};

retrieveAndRenderList();

add.addEventListener("click", () => {
    add.style.display = "none";
    newItemSection.style.display = "block";
});

submit.addEventListener("submit", e => {
    e.preventDefault();
    add.style.display = "inline-block";
    newItemSection.style.display = "none";
    const title = document.info.item.value || "";
    const price = document.info.price.value || 0;
    const description = document.info.description.value || "";
    const imgUrl = document.info.url.value || "http://www.clker.com/cliparts/3/h/N/y/5/p/empty-check-box-hi.png";
    const completed = false;
    axios.post(URL, {title, price, description, imgUrl, completed}).then(response => retrieveAndRenderList());
    submit.reset();
});

undo.addEventListener("click", e => {
    add.style.display = "inline-block";
    newItemSection.style.display = "none";
    submit.reset();
});

clear.addEventListener("click", () => {
    for (let i = 0; i < todos.children.length; i++) {
        axios.delete(URL + "/" + todos.children[i].children[5].innerHTML);
    };
    todos.innerHTML = "";
});

// Works? Test after clearing list to see if the axios.put worked as expected
todos.addEventListener("click", e => {
    const todoId = e.target.parentElement.children[5].innerHTML;
    const elemTitle = e.target.parentElement.children[6].innerHTML;
    if (e.target.id === "checkBox") {
        if (e.target.checked) {
            e.target.parentElement.classList.add("checked");
            axios.put(URL + "/" + todoId, {title: elemTitle, completed: true});
        } else {
            e.target.parentElement.classList.remove("checked");
            axios.put(URL + "/" +  todoId, {title: elemTitle, completed: false});
        }
    } else if (e.target.id === "remove") {
        axios.delete(URL + "/" + todoId).then(response => retrieveAndRenderList());
    }
    // } else if (e.target.id === "edit") {
    //     e.target.parentElement.children[8].style.display = "block";
    //     // axios.put(URL + "/" + todoId, {title: elemTitle}).then(response => retrieveAndRenderList());
    //
    // }
});
