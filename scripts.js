"use strict";

const form = document.getElementById("addForm");
const input = document.getElementById("todo");
const list = document.getElementById("list");
const deletebtn = document.getElementById("delete");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "")
        return;

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.textContent = input.value;
    list.appendChild(li);
    li.appendChild(deleteBtn);
    input.value = "";
});

deletebtn.addEventListener("click", () => {
    list.innerHTML = "";
});
