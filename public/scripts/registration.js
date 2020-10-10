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


    var inputElement1 = document.createElement('input');
    inputElement1.setAttribute('type', 'text');
    inputElement1.setAttribute('name', 'weekday');

    var inputElement2 = document.createElement('input');
    inputElement2.setAttribute('type', 'text');
    inputElement2.setAttribute('name', 'from');

    var inputElement3 = document.createElement('input');
    inputElement3.setAttribute('type', 'text');
    inputElement3.setAttribute('name', 'to');

    var fieldElement1 = document.createElement('div');
    fieldElement1.setAttribute('class', 'field');
    fieldElement1.appendChild(labelElement1);
    fieldElement1.appendChild(inputElement1);

    var fieldElement2 = document.createElement('div');
    fieldElement2.setAttribute('class', 'field');
    fieldElement2.appendChild(labelElement2);
    fieldElement2.appendChild(inputElement2);

    var fieldElement3 = document.createElement('div');
    fieldElement3.setAttribute('class', 'field');
    fieldElement3.appendChild(labelElement3);
    fieldElement3.appendChild(inputElement3);

    var rowElement = document.createElement('div');
    rowElement.setAttribute('class', 'field-group-2');
    rowElement.appendChild(fieldElement1);
    rowElement.appendChild(fieldElement2);
    rowElement.appendChild(fieldElement3);

    container.appendChild(rowElement);
}