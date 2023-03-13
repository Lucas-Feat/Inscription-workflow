const formInputs = {
    name: '',
    email: '',
    age: '',
    planet: ''
}

const labels = {
    'name': 'C\'est quoi ton blaze ?',
    'email': 'Quel est ton email ?',
    'age': 'Quel est ton âge ?',
    'planet': 'Sur quelle planète tu te trouves ?'
}

let i = 0;
let key = Object.keys(labels)[i];
let value = Object.values(labels)[i];

function displayInput() {
    let body = document.getElementsByTagName('body').item(0);
    let input = document.createElement('div');
    input.id = 'form-' + key;
    input.className = 'form-div';
    input.innerHTML = '<label for="' + key + '">' + value + '</label>' +
        '<div class="input"><input id="' + key + '" name="' + key + '" type="text">' +
        '<button id="' + key + '-button" type="button" onclick="registerInput()"><div class="ellipsis-system">\n' +
        '    <div class="ellipsis1"></div>\n' +
        '    <div class="ellipsis2"></div>\n' +
        '    <div class="center-sun"></div>\n' +
        '    <div class="satellite"></div>\n' +
        '</div></i></button></div>';
    body.appendChild(input);
}

function registerInput() {
    formInputs[key] = document.getElementById(key).value;
    document.getElementById('form-' + key).remove();
    i++;
    if (i >= Object.keys(labels).length) {
        displayResult();
        return;
    }
    key = Object.keys(labels)[i];
    value = Object.values(labels)[i];
    displayInput();
}

function displayResult() {
    let body = document.getElementsByTagName('body').item(0);
    let result = document.createElement('div');
    result.id = 'result';
    result.className = 'form-div';
    result.innerHTML = '<h2>Résultat</h2><p>' + formInputs.name + ' ' + formInputs.email + ' ' + formInputs.age + ' ' + formInputs.planet + '</p>';
    body.appendChild(result);
}
