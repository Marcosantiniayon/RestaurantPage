let selectedItems = [];

function createMenuItemCard(name, imageUrl, price, description) {
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

  const priceP = document.createElement('p');
  priceP.textContent = `$${price.toFixed(2)}`; // ensure price is always displayed with two decimal places
  priceP.classList.add('card-price');
  card.appendChild(priceP);

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
    const itemCard = createMenuItemCard(item.name, item.imageUrl, item.price, item.description);
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
  cartIcon.src = '../images/shopping-cart.png';  
  cartIcon.alt = 'Cart';
  cartIcon.style.width = '30px';  
  cartIcon.style.height = '30px';
  cartButton.appendChild(cartIcon);

  const cartItemsContainer = document.createElement('div');
  cartItemsContainer.id = 'cartItemsContainer';
  cartItemsContainer.classList.add('cart-items-container');
  cartMenu.appendChild(cartItemsContainer);

  const cartItems = document.createElement('ul');
  cartItems.id = 'cartItems';
  cartItems.classList.add('cart-items');
  cartItemsContainer.appendChild(cartItems);

  cartIcon.addEventListener('click', () => {
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
    { name: 'Soda', imageUrl: '../images/soda2.jpg', price: 1.99, description: 'Cool and refreshing' },
    { name: 'Lemonade', imageUrl: '../images/lemonade.jpg', price: 1.99, description: 'Sweet and tangy' },
    { name: 'Wine', imageUrl: '../images/wine.jpg', price: 6.99, description: 'Elegant and sophisticated' }
  ];
  const beveragesDiv = createItemGroup('Beverages', beverages);
  innerContent.appendChild(beveragesDiv);

  const sides = [
    { name: 'Breadsticks', imageUrl: '../images/breadsticks.jpg', price: 7.99, description: 'Crunchy and delicious' },
    { name: 'Mozzarella Sticks', imageUrl: '../images/mozarellasticks.jpg', price: 9.99, description: 'Cheesy and filling' },
    { name: 'Salad', imageUrl: '../images/salad.jpg', price: 5.99, description: 'Light and healthy' }
  ];
  const sidesDiv = createItemGroup('Sides', sides);
  innerContent.appendChild(sidesDiv);

  const mainDishes = [
    { name: 'Lasagna', imageUrl: '../images/lasagna.jpg', price: 14.99, description: 'Rich and flavorful' },
    { name: 'Spaghetti & Meatsauce', imageUrl: '../images/spaghetti.jpg', price: 15.99, description: 'Classic and hearty' },
    { name: 'Margherita Pizza', imageUrl: '../images/pizza.jpg', price: 16.99, description: 'Simple and delicious' }
  ];
  const mainDishesDiv = createItemGroup('Main Dishes', mainDishes);
  innerContent.appendChild(mainDishesDiv);

  // Append innerContent to content
  content.appendChild(innerContent);

  // Create the cart menu
  createCartMenu();

  // Add event listeners to menu items
  // Add event listeners to menu items
const menuItems = document.querySelectorAll('.card');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    const itemName = menuItem.querySelector('h2').textContent;
    const itemPrice = parseFloat(menuItem.querySelector('.card-price').textContent.replace('$', ''));

    // Prompt for quantity
    const quantity = parseInt(prompt(`Enter the quantity for ${itemName}:`));

    // Calculate total price
    const totalPrice = (itemPrice * quantity).toFixed(2);

    // Create a new object representing the selected item
    const selectedItem = {
      name: itemName,
      price: itemPrice,
      quantity: quantity,
      totalPrice: totalPrice
    };

    // Check if the item already exists in the cart
  let existingItem = selectedItems.find(item => item.name === selectedItem.name);
  if (existingItem) {
      // Update the quantity and price of the existing item
      existingItem.quantity += selectedItem.quantity;
      existingItem.price += selectedItem.price;
  } else {
      // Add the new item to the cart
      selectedItems.push(selectedItem);
  }


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

  let total = 0; // Initialize total price

  selectedItems.forEach((item) => {
    const totalItemPrice = item.price * item.quantity;
    total += totalItemPrice; // Add this item's total price to the total

    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.quantity}x ${item.name} ($${item.price.toFixed(2)}) - $${totalItemPrice.toFixed(2)}`;
    cartItems.appendChild(cartItem);
  });

    // Create and append a spacer element
    const spacer = document.createElement('li');
    spacer.innerHTML = '--------------------'; // Non-breaking space
    cartItems.appendChild(spacer);

  // After the loop, create and append a total price element
  const totalPriceElement = document.createElement('li');
  totalPriceElement.textContent = `TOTAL: $${total.toFixed(2)}`;
  cartItems.appendChild(totalPriceElement);

  const cartMenu = document.getElementById('cartMenu');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  if (selectedItems.length > 0) {
    cartMenu.classList.add('visible');
    cartItemsContainer.classList.add('visible'); // Make sure the cart items container is visible too
  } else {
    cartMenu.classList.remove('visible');
    cartItemsContainer.classList.remove('visible');
  }
}



export default createMenu;
