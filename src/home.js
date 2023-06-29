function createHome() {
  const content = document.getElementById('content');

  // Create the inner-content div and append it to the content div
  const innerContent = document.createElement('div');
  innerContent.classList.add('inner-content');
  content.appendChild(innerContent);

  // Home page content
  const h3 = document.createElement('h3');
  h3.textContent = "Embark on a Taste Journey to Italy!";
  innerContent.appendChild(h3);

  const chef = document.createElement('img');
  chef.src = require('../images/chef.jpg').default; // Use require to import the image dynamically
  chef.width = 300;
  chef.style.borderRadius = '80px';
  innerContent.appendChild(chef);

  const p = document.createElement('p');
  p.textContent =
    "Savor Italy's culinary artistry at Ristorante Santini. Taste the passion in every bite, as our master chefs create edible masterpieces. From handmade pasta to wood-fired pizzas, experience the heart and soul of Italian cuisine. Buon appetito!";
  innerContent.appendChild(p);
}

export default createHome;
