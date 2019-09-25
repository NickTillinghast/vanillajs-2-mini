function addToDo(e) {
  e.preventDefault();
  // first create a new list item for out todo list
  const newListItem = document.createElement("li");
  // get the input value for the new list item
  let inputValue = document.getElementById("item").value;
  // set the inner text of the new list item to equal the value of the input
  newListItem.innerText = inputValue;
  // create a button for the list item to be removed
  const button = document.createElement("button");
  // add an x to the inner text of the button, indicating a delete/remove button
  button.innerText = "X";
  // add the removeToDo function to the newly created button
  button.addEventListener("click", removeToDo);
  // append the button to the list item
  newListItem.addEventListener("click", completeToDo);
  // appendt the button to the list item
  newListItem.appendChild(button);
  // select the unordered list that hold all of our list items
  const list = document.querySelector("ul");
  // append the new list item to the unordered list
  list.appendChild(newListItem);
  // finally clear the value of the input so it is ready for the new input
  document.getElementById("item").value = "";
}

document.querySelector("form").addEventListener("submit", addToDo);
function removeToDo(event) {
  event.target.parentNode.remove();
}

function completeToDo(event) {
  const checked = event.target.getAttribute("aria-checked");
  if (checked !== "true") {
    event.target.setAttribute("aria-checked", "true");
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
}
