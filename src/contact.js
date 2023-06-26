function createContact() {
    const content = document.getElementById('content');
    // Create the inner-content div and append it to the content div
    const innerContent = document.createElement('div');
    innerContent.classList.add('inner-content');
    content.appendChild(innerContent);

    // Contact Content
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    innerContent.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = 'Marco Santini'
    innerContent.appendChild(h3);

    const manager = document.createElement('p');
    manager.textContent = 'Manager'
    innerContent.appendChild(manager);

    const phone = document.createElement('a');
    phone.href = "tel:4801234567";
    phone.textContent = '(480) 123-4567';
    innerContent.appendChild(phone);

    const breakLine = document.createElement('br');
    innerContent.appendChild(breakLine);
    const breakLine2 = document.createElement('br');
    innerContent.appendChild(breakLine2);

    const email = document.createElement('a');
    email.href = "mailto:santini.M@yahoo.com";
    email.textContent = 'santini.M@yahoo.com';
    innerContent.appendChild(email);

}


export default createContact;
