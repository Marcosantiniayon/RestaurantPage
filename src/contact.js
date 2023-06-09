function createContact() {
    const content = document.getElementById('content');

    // Contact Content
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    content.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = 'Marco Santini'
    content.appendChild(h3);

    const manager = document.createElement('p');
    manager.textContent = 'Manager'
    content.appendChild(manager);

    const phone = document.createElement('p');
    phone.textContent = '(480) 123-4567'
    content.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'santini.M@yahoo.com'
    content.appendChild(email);
}

export default createContact;