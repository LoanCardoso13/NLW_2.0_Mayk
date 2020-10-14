const container = document.getElementById("container");

function addRow() {

    var labelElement1 = document.createElement('label');
    labelElement1.setAttribute('for', 'weekday');
    var textElement1 = document.createTextNode('Weekday');
    labelElement1.appendChild(textElement1);

    var labelElement2 = document.createElement('label');
    labelElement2.setAttribute('for', 'from');
    var textElement2 = document.createTextNode('From');
    labelElement2.appendChild(textElement2);


    var labelElement3 = document.createElement('label');
    labelElement3.setAttribute('for', 'to');
    var textElement3 = document.createTextNode('To');
    labelElement3.appendChild(textElement3);


    var selectElement1 = document.createElement('select');
    selectElement1.setAttribute('name', 'weekday');
    selectElement1.setAttribute('onchange', 'changeColor2()');
    selectElement1.innerHTML = `<option value="">Select weekday</option>`
    for (weekday of weekdays) {
        selectElement1.innerHTML += `<option value="${weekday}">${weekday}</option>`
    }

    var selectElement2 = document.createElement('select');
    selectElement2.setAttribute('name', 'from');
    selectElement2.setAttribute('onchange', 'changeColor2()');
    selectElement2.innerHTML = `<option value="">Start</option>`
    for (time of times) {
        selectElement2.innerHTML += `<option value="${time}">${time}</option>`
    }

    var selectElement3 = document.createElement('select');
    selectElement3.setAttribute('name', 'to');
    selectElement3.setAttribute('onchange', 'changeColor2()');
    selectElement3.innerHTML = `<option value="">End</option>`
    for (time of times) {
        selectElement3.innerHTML += `<option value="${time}">${time}</option>`
    }

    var fieldElement1 = document.createElement('div');
    fieldElement1.setAttribute('class', 'field');
    fieldElement1.appendChild(labelElement1);
    fieldElement1.appendChild(selectElement1);

    var fieldElement2 = document.createElement('div');
    fieldElement2.setAttribute('class', 'field');
    fieldElement2.appendChild(labelElement2);
    fieldElement2.appendChild(selectElement2);

    var fieldElement3 = document.createElement('div');
    fieldElement3.setAttribute('class', 'field');
    fieldElement3.appendChild(labelElement3);
    fieldElement3.appendChild(selectElement3);

    var rowElement = document.createElement('div');
    rowElement.setAttribute('class', 'field-group-2');
    rowElement.appendChild(fieldElement1);
    rowElement.appendChild(fieldElement2);
    rowElement.appendChild(fieldElement3);

    container.appendChild(rowElement);
}

topics = [ 
    'Biology',
    'Math',
    'Physics',
    'Chemistry',
    'English',
    'History',
    'Geography'
];

weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

var times = []
for (i = 0; i < 24; i++) {
    times.push(String(i) + 'h');
}

const topicElement = document.querySelector("select[name=subject]");
const weekdayElement = document.querySelector('select[name=weekday]');
const fromElement = document.querySelector('select[name=from]');
const toElement = document.querySelector('select[name=to]');

for (topic of topics) {
    topicElement.innerHTML += `<option value="${topic}">${topic}</option>`
}

for (weekday of weekdays) {
    weekdayElement.innerHTML += `<option value="${weekday}">${weekday}</option>`
}

for (time of times) {
    fromElement.innerHTML += `<option value="${time}">${time}</option>`
}

for (time of times) {
    toElement.innerHTML += `<option value="${time}">${time}</option>`
}

function changeColor() {
    var selectorElement = document.querySelector("form fieldset .field select");
    selectorElement.classList.add("selected");
}

function changeColor2() {
    var selectorElements = document.querySelectorAll("form fieldset .field-group-2 .field select");
    console.log(selectorElements.length)
    for (i = 0; i < selectorElements.length; i++) {
        selectorElements[i].classList.add("selected");
    }
}