window.addEventListener('DOMContentLoaded', (event) => {
    const template = document.createElement('template');
    template.innerHTML = `
    <header class="header-content header">
        <div class="logo-content">
            <i id="address-book-logo" class="fa fa-address-book"></i>
            <div class="logo-text">
                <span class="address-text">ADDRESS</span>
                <span class="address-text address-book">BOOK</span>
            </div>
        </div>
    </header>
    `
    let bodyContainer = document.getElementsByClassName("body-container")
    document.body.insertBefore(template.content, bodyContainer[0]);
});