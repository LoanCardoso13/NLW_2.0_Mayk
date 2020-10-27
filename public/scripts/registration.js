// Add time functionality
const container = document.getElementById("container");

function addRow() {
    const newFieldGroup = document.querySelector(".field-group-2").cloneNode(true);
    const fields = newFieldGroup.querySelectorAll("input");
    fields.forEach( field => field.value = "");
    container.appendChild(newFieldGroup);
}

// Changing color of user edited fields for better UX 
function changeColor() {
    var selectorElement = document.querySelector("form fieldset .field select");
    selectorElement.classList.add("selected");
}

function changeColor2() {
    var selectorElements = document.querySelectorAll("form fieldset .field-group-2 .field select");
    for (i = 0; i < selectorElements.length; i++) {
        selectorElements[i].classList.add("selected");
    }
}

function changeColor3() {
    var selectorElements = document.querySelectorAll("form fieldset .field-group-2 .field input");
    for (i = 0; i < selectorElements.length; i++) {
        selectorElements[i].classList.add("selected");
    }
}
