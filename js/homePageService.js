let addressList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressList = getAddressBookDataFromLocalStorage();
    document.querySelector(".address-count").textContent = addressList.length;
    createInnerHtml();
});

const getAddressBookDataFromLocalStorage = () => {
    return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = "<th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th>";
    let innerHtml = `${headerHtml}`;
    for (const contact of addressList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${contact._firstName}</td>
            <td>${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phoneNumber}</td>
            <td>
                <img name="${contact._id}" onclick="remove(this)" 
                    src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="${contact._id}" onclick="update(this)"
                    src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td> 
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

/**
 * Function to remove contact
 * @param {*} node 
 */
const remove = (node) => {
    addressList = addressList.filter(contact => contact._id != node.name);
    localStorage.setItem("AddressBookList", JSON.stringify(addressList));
    document.querySelector('.address-count').textContent = addressList.length;
    createInnerHtml();
}

/**
 * Function to edit contact
 * @param {*} node 
 */
const update = (node) => {
    localStorage.removeItem("EditContact");
    let contactToEdit = addressList.filter(contact => contact._id == node.name);
    localStorage.setItem("EditContact", JSON.stringify(contactToEdit));
    location.href = `../pages/addressBookForm.html?id=${contactToEdit[0]._id}`;
}