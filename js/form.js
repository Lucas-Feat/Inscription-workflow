function displayEmail() {

    let body = document.getElementsByTagName('body').item(0);
    let emailInput = document.createElement('div');
    emailInput.id = 'form-email';
    emailInput.className = 'form-div';
    emailInput.innerHTML = '<label for="email">Comment t\'appelle t\'on ?</label>' +
        '<input id="email" name="email" type="text">';
    body.appendChild(emailInput);
}
