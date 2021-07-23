window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#firstName');
    const textError = document.querySelector('#firstname-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new Contact()).firstName = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    const address = document.querySelector('#address');
    const addressError = document.querySelector('#address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return;
        }
        try {
            (new Contact()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
    const phoneNo = document.querySelector('#phone');
    const phoneNoError = document.querySelector('#phone-error');
    phoneNo.addEventListener('input', function () {
        if (phoneNo.value.length == 0) {
            phoneNoError.textContent = "";
            return;
        }
        try {
            (new Contact()).phoneNumber = phoneNo.value;
            phoneNoError.textContent = "";
        } catch (e) {
            phoneNoError.textContent = e;
        }
    });
    const form = document.getElementById('form');
    form.addEventListener('submit', save);
})

function save(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("Submit called");
}

const resetForm = () => {
    console.log("Reset called");
}