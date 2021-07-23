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

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        let contact = createContactInAddressBook();
        createAndUpdateStorage(contact);
    } catch (e) {
        console.error(e);
    }
}

const resetForm = () => {
    console.log("Reset called");
}

const createContactInAddressBook = () => {
    let contact = new Contact();
    contact._id = new Date().getTime();
    return getFormData(contact);
}

const getFormData = (contact) => {
    contact._firstName = document.forms["form"]["firstName"].value;
    contact._address = document.forms["form"]["address"].value;
    contact._city = document.forms["form"]["city"].value;
    contact._state = document.forms["form"]["state"].value;
    contact._phoneNumber = document.forms["form"]["phone"].value;
    contact._zip = document.forms["form"]["zip"].value;
    console.log(contact.toString());
    return contact;
}

function createAndUpdateStorage(contact) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(contact);
    } else {
        addressBookList = [contact]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    location.href = '../pages/homePage.html';
}