window.addEventListener('DOMContentLoaded', (event) => {
    prePopulateForm();
});

/**
 * Function to populate contact
 */
const prePopulateForm = () => {
    let id = extractIdFromUrl();
    if (id) {
        const getUrl = `http://localhost:3000/AddressBook/${id}`;
        makePromiseCall("GET", getUrl, true)
            .then(responseText => {
                console.log("Get Contact Data:" + responseText);
                let contact = JSON.parse(responseText);
                setForm(contact);
            })
            .catch(error => {
                console.log("Get error status:" + JSON.stringify(error));
            });
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