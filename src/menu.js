function createMenuItemCard(name, imageUrl, description) {
    const card = document.createElement('li');
    card.classList.add('card');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');
    card.appendChild(imgDiv);

    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('menu-image');
    imgDiv.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = name;
    h2.classList.add('card-title');
    card.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = description;
    p.classList.add('card-description');
    card.appendChild(p);

    return card;
}

function createItemGroup(title, items) {
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('group-div');

    const header = document.createElement('h3');
    header.textContent = title;
    header.className = 'item-group-header';
    groupDiv.appendChild(header);

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items-div');

    items.forEach(item => {
        const itemCard = createMenuItemCard(item.name, item.imageUrl, item.description);
        itemsDiv.appendChild(itemCard);
    });

    groupDiv.appendChild(itemsDiv);
    return groupDiv;
}


function createMenu() {
    const content = document.getElementById('content');

    const menuH1 = document.createElement('h1');
    menuH1.textContent = 'Our Menu';
    content.appendChild(menuH1);

    const beverages = [
        { name: 'Soda', imageUrl: 'url1', description: 'Cool and refreshing.' },
        { name: 'Lemonade', imageUrl: 'url2', description: 'Sweet and tangy.' },
        { name: 'Wine', imageUrl: 'url3', description: 'Elegant and sophisticated.' }
    ];
    const beveragesDiv = createItemGroup('Beverages', beverages);
    content.appendChild(beveragesDiv);

    const sides = [
        { name: 'Breadsticks', imageUrl: 'url4', description: 'Crunchy and delicious.' },
        { name: 'Mozzarella Sticks', imageUrl: 'url5', description: 'Cheesy and filling.' },
        { name: 'Salad', imageUrl: 'url6', description: 'Light and healthy.' }
    ];
    const sidesDiv = createItemGroup('Sides', sides);
    content.appendChild(sidesDiv);

    const mainDishes = [
        { name: 'Lasagna', imageUrl: 'url7', description: 'Rich and flavorful.' },
        { name: 'Spaghetti & Meatballs', imageUrl: 'url8', description: 'Classic and hearty.' },
        { name: 'Margherita Pizza', imageUrl: 'url9', description: 'Simple and delicious.' }
    ];
    const mainDishesDiv = createItemGroup('Main Dishes', mainDishes);
    content.appendChild(mainDishesDiv);
}

export default createMenu;
