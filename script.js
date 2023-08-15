const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

listContainer.addEventListener("click", handleTaskClick);

function handleTaskClick(event) {
  const target = event.target;
  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.tagName === "SPAN") {
    const taskItem = target.parentNode;
    taskItem.parentNode.removeChild(taskItem);
  }
}

function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("You must write something!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = taskText;
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
    inputBox.focus();
  }
}
