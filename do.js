
    const input = document.querySelector(".input");
    const button = document.querySelector(".button");
    const taskList = document.getElementById("taskList");

    button.addEventListener("click", addTask);

    function addTask() {
        const text = input.value.trim();

        if (text === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = text;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "ተፅፏል ካልፈልግህ ሰርዝ";

        completeBtn.onclick = function () {
            span.style.textDecoration = "line-through";
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function () {
            li.remove();
        };

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        input.value = "";
    }