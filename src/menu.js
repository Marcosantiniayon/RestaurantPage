let selectedItems = [];

function createMenuItemCard(name, imageUrl, price, description) {
  const card = document.createElement('li');
  card.classList.add('card');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-container');
  card.appendChild(imgDiv);

  const img = document.createElement('img');
  img.src = require(`../images/${imageUrl}`).default; // Use require to dynamically import the image
  img.classList.add('menu-image');
  imgDiv.appendChild(img);

  const h2 = document.createElement('h2');
  h2.textContent = name;
  h2.classList.add('card-title');
  card.appendChild(h2);

  const priceP = document.createElement('p');
  priceP.textContent = `$${price.toFixed(2)}`;
  priceP.classList.add('card-price');
  card.appendChild(priceP);

  const item = { name, imageUrl, price, description };
  card.addEventListener('click', function () {
    openModal(item);
  });

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
  cartIcon.src = require('../images/shopping-cart.png').default; // Use require to import the cart icon image
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

function createMenu(item) {
  const li = document.createElement('li');
  li.classList.add('card');

  li.addEventListener('click', function () {
    openModal(item); // Pass the item object to the function
  });

  console.log('createMenu() function called');

  const content = document.getElementById('content');

  // Create inner-content div
  const innerContent = document.createElement('div');
  innerContent.id = 'inner-content';

  const menuH1 = document.createElement('h1');
  menuH1.textContent = 'Our Menu';
  innerContent.appendChild(menuH1);

  const beverages = [
    { name: 'Soda', imageUrl: 'soda2.jpg', price: 1.99, description: 'Cool and refreshing' },
    { name: 'Lemonade', imageUrl: 'lemonade.jpg', price:     1.99, description: 'Sweet and tangy' },
    { name: 'Wine', imageUrl: 'wine.jpg', price: 6.99, description: 'Elegant and sophisticated' }
  ];
  const beveragesDiv = createItemGroup('Beverages', beverages);
  innerContent.appendChild(beveragesDiv);

  const sides = [
    { name: 'Breadsticks', imageUrl: 'breadsticks.jpg', price: 7.99, description: 'Crunchy and delicious' },
    { name: 'Mozzarella Sticks', imageUrl: 'mozzarellasticks.jpg', price: 9.99, description: 'Cheesy and filling' },
    { name: 'Salad', imageUrl: 'salad.jpg', price: 5.99, description: 'Light and healthy' }
  ];
  const sidesDiv = createItemGroup('Sides', sides);
  innerContent.appendChild(sidesDiv);

  const mainDishes = [
    { name: 'Lasagna', imageUrl: 'lasagna.jpg', price: 14.99, description: 'Rich and flavorful' },
    { name: 'Spaghetti & Meatsauce', imageUrl: 'spaghetti.jpg', price: 15.99, description: 'Classic and hearty' },
    { name: 'Margherita Pizza', imageUrl: 'pizza.jpg', price: 16.99, description: 'Simple and delicious' }
  ];
  const mainDishesDiv = createItemGroup('Main Dishes', mainDishes);
  innerContent.appendChild(mainDishesDiv);

  // Append innerContent to content
  content.appendChild(innerContent);

  createCartMenu();
}

function openModal(item) {
  const modal = document.getElementById('modal');
  var modalOverlay = document.querySelector('.modal-overlay');

  modal.querySelector('.modal-title').textContent = item.name;
  modal.querySelector('.modal-price').textContent = `$${item.price.toFixed(2)}`;  // ensure price is always displayed with two decimal places
  modal.style.display = 'flex';
  modalOverlay.style.display = 'block';
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
  // Update the quantity in the
  // Update the quantity in the modal if it's currently displaying
  const modal = document.getElementById('modal');
  if (modal.style.display === 'flex') {
    const existingItem = selectedItems.find((item) => item.name === modal.querySelector('.modal-title').textContent);
    if (existingItem) {
      modal.querySelector('.modal-quantity').value = existingItem.quantity;
    } else {
      modal.querySelector('.modal-quantity').value = '';
    }
  }
}

function handleModalFormSubmission() {
  document.getElementById('modalSubmit').addEventListener('click', (event) => {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get item details from the modal
    const modal = document.getElementById('modal');
    var modalOverlay = document.querySelector('.modal-overlay');
    const itemName = modal.querySelector('.modal-title').textContent;
    const itemPrice = parseFloat(modal.querySelector('.modal-price').textContent.replace('$', ''));
    const quantity = parseInt(modal.querySelector('.modal-quantity').value);

    // Calculate total price
    const totalPrice = (itemPrice * quantity).toFixed(2);

    // Create a new object representing the selected item
    const selectedItem = {
      name: itemName,
      price: itemPrice,
      quantity: quantity,
      totalPrice: totalPrice,
    };

    // Check if the item already exists in the cart
    const existingItem = selectedItems.find((item) => item.name === selectedItem.name);
    if (existingItem) {
      // Update the quantity and price of the existing item
      existingItem.quantity = selectedItem.quantity; // Changed from += to =
      existingItem.price = selectedItem.price; // Changed from += to =
    } else {
      // Add the new item to the cart
      selectedItems.push(selectedItem);
    }

    // Update the cart display
    updateCart();

    // Hide the modal
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    modal.querySelector('.modal-quantity').value = '';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  createMenu();
  handleModalFormSubmission();
});

export default createMenu;

