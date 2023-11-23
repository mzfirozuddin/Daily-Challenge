const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todo-list");

const createTodo = () => {
    const todoValue = document.querySelector(".todo-input").value;
    // console.log(todoValue);

    if (todoValue) {
        const li = document.createElement("li");
        li.classList.add("listItem", "active");

        const span1 = document.createElement("span");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("check");
        const span = document.createElement("span");
        span.classList.add("todo");
        span.innerText = todoValue;
        span1.appendChild(checkbox)
        span1.appendChild(span)


        const span2 = document.createElement("span");

        const btn1 = document.createElement("button");
        btn1.classList.add("btn", "editBtn");
        btn1.innerText = "Edit";

        const btn2 = document.createElement("button");
        btn2.classList.add("btn", "deleteBtn");
        btn2.innerText = "Delete";

        span2.appendChild(btn1)
        span2.appendChild(btn2)

        li.appendChild(span1);
        li.appendChild(span2);
        // console.log(li);

        todoList.appendChild(li);


    } else {
        return;
    }

    document.querySelector(".todo-input").value = ""
   
}


addBtn.addEventListener("click", createTodo);

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
        // Delete button is clicked
        const listItem = e.target.closest("li");
        // console.log(listItem);
        if (listItem) {
            listItem.remove();
        }
    }
});

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("editBtn")) {
        const listItemValue = e.target.closest("li").firstElementChild.children[1].innerText;
        document.querySelector(".todo-input").value = listItemValue;
        // console.log(listItem);
        e.target.closest("li").remove();
    }
})

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
        const checkbox = e.target.closest("span").firstElementChild;
        // console.log(checkbox);
        const todoItem = e.target.closest("li");

        if (checkbox.checked) {
            todoItem.classList.remove("active");
            todoItem.classList.add("completed")
        }else{
            todoItem.classList.remove("completed");
            todoItem.classList.add("active");
        }
        // console.log(todoItem);
    }
})


//  Add filtering functionality
const allBtn = document.querySelector(".allBtn");
const activeBtn = document.querySelector(".activeBtn");
const completedBtn = document.querySelector(".completedBtn");

allBtn.addEventListener("click", () => {
    const todoList = document.querySelectorAll(".listItem");
    todoList.forEach((list) => {
        list.style.display = "flex";
    })
});

activeBtn.addEventListener("click", () => {
    const todoList = document.querySelectorAll(".listItem");
    todoList.forEach((list) => {
        if (list.classList.contains("completed")) {
            list.style.display = "none";
        } else {
            list.style.display = "flex";
        }
    })
});

completedBtn.addEventListener("click", () => {
    const todoList = document.querySelectorAll(".listItem");
    todoList.forEach((list) => {
        // console.log(list.classList.contains("active"));
        if (list.classList.contains("active")) {
            list.style.display = "none";
        } else {
            list.style.display = "flex";
        }
    })
})


