window.addEventListener('DOMContentLoaded', (event) => {
    prePopulateForm();
});

const getAddressBookDataFromLocalStorage = () => {
    return localStorage.getItem('EditContact') ? JSON.parse(localStorage.getItem('EditContact')) : [];
}

/**
 * Function to populate contact
 */
const prePopulateForm = () => {
    let contact = getAddressBookDataFromLocalStorage();
    if (contact[0]._id == extractIdFromUrl()) {
        setForm(contact[0]);
    }
}

/**
 * Function to set the form with contact details
 * @param {*} contact 
 */
const setForm = (contact) => {
    populateValue('#firstName', contact._firstName);
    populateValue('#address', contact._address);
    populateValue('#city', contact._city);
    populateValue('#state', contact._state);
    populateValue('#zip', contact._zip);
    populateValue('#phone', contact._phoneNumber);
}

const populateValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}