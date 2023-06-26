let selectedItems = [];

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

  items.forEach((item) => {
    const itemCard = createMenuItemCard(item.name, item.imageUrl, item.description);
    itemsDiv.appendChild(itemCard);
  });

  groupDiv.appendChild(itemsDiv);
  return groupDiv;
}

function createCartMenu() {
    const cartMenu = document.createElement('div');
    cartMenu.id = 'cartMenu';
    cartMenu.classList.add('dropdown-menu');

    const cartButton = document.createElement('button');
    cartButton.id = 'cartButton';
    cartButton.classList.add('tab-button');
    cartMenu.appendChild(cartButton);

    const cartIcon = document.createElement('img');
    cartIcon.src = '../images/shopping-cart.png';  // Path to your image
    cartIcon.alt = 'Cart';
    cartIcon.style.width = '30px';  // You can set the width and height as per your preference
    cartIcon.style.height = '30px';
    cartButton.appendChild(cartIcon);

    const cartItems = document.createElement('ul');
    cartItems.id = 'cartItems';
    cartItems.classList.add('cart-items');
    cartMenu.appendChild(cartItems);

    // Add event listener to the cart button
    cartButton.addEventListener('click', () => {
        cartItems.classList.toggle('visible');
    });

    document.getElementById('tabs').appendChild(cartMenu);
}



function createMenu() {
  console.log('createMenu() function called');

  const content = document.getElementById('content');

  // Create inner-content div
  const innerContent = document.createElement('div');
  innerContent.id = 'inner-content';

  const menuH1 = document.createElement('h1');
  menuH1.textContent = 'Our Menu';
  innerContent.appendChild(menuH1);

  const beverages = [
    { name: 'Soda', imageUrl: '../images/soda2.jpg', description: 'Cool and refreshing.' },
    { name: 'Lemonade', imageUrl: '../images/lemonade.jpg', description: 'Sweet and tangy.' },
    { name: 'Wine', imageUrl: '../images/wine.jpg', description: 'Elegant and sophisticated.' }
  ];
  const beveragesDiv = createItemGroup('Beverages', beverages);
  innerContent.appendChild(beveragesDiv);

  const sides = [
    { name: 'Breadsticks', imageUrl: '../images/breadsticks.jpg', description: 'Crunchy and delicious.' },
    { name: 'Mozzarella Sticks', imageUrl: '../images/mozarellasticks.jpg', description: 'Cheesy and filling.' },
    { name: 'Salad', imageUrl: '../images/salad.jpg', description: 'Light and healthy.' }
  ];
  const sidesDiv = createItemGroup('Sides', sides);
  innerContent.appendChild(sidesDiv);

  const mainDishes = [
    { name: 'Lasagna', imageUrl: '../images/lasagna.jpg', description: 'Rich and flavorful.' },
    { name: 'Spaghetti & Meatsauce', imageUrl: '../images/spaghetti.jpg', description: 'Classic and hearty.' },
    { name: 'Margherita Pizza', imageUrl: '../images/pizza.jpg', description: 'Simple and delicious.' }
  ];
  const mainDishesDiv = createItemGroup('Main Dishes', mainDishes);
  innerContent.appendChild(mainDishesDiv);

  // Append innerContent to content
  content.appendChild(innerContent);

  // Create the cart menu
  createCartMenu();

  // Add event listeners to menu items
  const menuItems = document.querySelectorAll('.card');
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
      const itemName = menuItem.querySelector('h2').textContent;
      const itemPrice = menuItem.querySelector('.card-description').textContent;

      // Prompt for quantity
      const quantity = prompt(`Enter the quantity for ${itemName}:`);

      // Create a new object representing the selected item
      const selectedItem = {
        name: itemName,
        price: itemPrice,
        quantity: quantity
      };

      // Add the selected item to the array
      selectedItems.push(selectedItem);

      // Update the cart display
      updateCart();

      // Prevent the default link behavior
      event.preventDefault();
    });
  });
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = ''; // Clear the previous cart items

  selectedItems.forEach((item) => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.quantity}x ${item.name} - $${item.price}`;
    cartItems.appendChild(cartItem);
  });

  const cartMenu = document.getElementById('cartMenu');
  if (selectedItems.length > 0) {
    cartMenu.classList.add('visible');
  } else {
    cartMenu.classList.remove('visible');
  }
}

export default createMenu;
