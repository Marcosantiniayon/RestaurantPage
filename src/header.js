function createHeader() {
    const body = document.querySelector('body');

    // Header for all pages
    const headerDiv = document.createElement('div');
    headerDiv.id = 'headerDiv';
    const h1 = document.createElement('h1');
    h1.textContent = "Ristorante Santini";
    headerDiv.appendChild(h1);

    // Create the tab navigation
    const tabs = document.createElement('div');
    tabs.id = 'tabs';
    headerDiv.appendChild(tabs);

    
    const homeTab = document.createElement('button');
    homeTab.id = 'homeTab';
    homeTab.textContent = 'Home';
    tabs.appendChild(homeTab);

    const menuTab = document.createElement('button');
    menuTab.id = 'menuTab';
    menuTab.textContent = 'Menu';
    tabs.appendChild(menuTab);

    const contactTab = document.createElement('button');
    contactTab.id = 'contactTab';
    contactTab.textContent = 'Contact';
    tabs.appendChild(contactTab);

    const cartButton = document.createElement('button');
    cartButton.id = 'cartButton';
    cartButton.textContent = 'Cart';
    cartButton.classList.add('tab-button');
    cartMenu.appendChild(cartButton);
    
    body.insertBefore(headerDiv, body.childNodes[0]);
}


export default createHeader;