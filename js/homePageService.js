let addressList;
window.addEventListener('DOMContentLoaded', (event) => {
    const getUrl = "http://localhost:3000/AddressBook/";
    makePromiseCall("GET", getUrl, true)
        .then(responseText => {
            console.log("Get Contact Data:" + responseText);
            addressList = JSON.parse(responseText);
            document.querySelector(".address-count").textContent = addressList.length;
            createInnerHtml();
        })
        .catch(error => {
            console.log("Get error status:" + JSON.stringify(error));
        });
});

const createInnerHtml = () => {
    const headerHtml = "<th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th>";
    let innerHtml = `${headerHtml}`;
    for (const contact of addressList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${contact._firstName}</td>
            <td title="${contact._address}">${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phoneNumber}</td>
            <td>
                <img name="${contact.id}" onclick="remove(this)" 
                    src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="${contact.id}" onclick="update(this)"
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
    const deleteUrl = `http://localhost:3000/AddressBook/${node.name}`;
    //onreadystatechange is not called for synchronous request
    makePromiseCall("DELETE", deleteUrl, false)
        .then(responseText => {
            console.log("Contact Deleted:" + responseText);
        })
        .catch(error => {
            console.log("Delete error status:" + JSON.stringify(error));
        });
    document.querySelector('.address-count').textContent = addressList.length;
    createInnerHtml();
}

/**
 * Function to edit contact
 * @param {*} node 
 */
const update = (node) => {
    location.href = `../pages/addressBookForm.html?id=${node.name}`;
}