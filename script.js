const mainInput = document.querySelector('#mainCart');
const cvvInput = document.querySelector("#cvv2");
const dateinput = document.querySelector("#date");

let cart = document.getElementsByClassName('card-header-2')[0];
let cart2 = document.getElementsByClassName('card-header-3')[0];
let cart3 = document.getElementsByClassName('card-header-4')[0];

mainInput.addEventListener('input', () => {
    cart.innerHTML = 'Card ID : ' + mainInput.value;

    // ******************

    if ((mainInput.value).length == 4 ||
        (mainInput.value).length == 11 ||
        (mainInput.value).length == 18
    ) {
        mainInput.value += " - "
    }
});

cvvInput.addEventListener('input', () => {
    cart2.innerHTML = 'CVV2 : ' + cvvInput.value;
});

dateinput.addEventListener('input', () => {
    cart3.innerHTML = 'Date : ' + dateinput.value;

    if ((dateinput.value).length == 2
    ) {
        dateinput.value += " / "
    }
});