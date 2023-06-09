function createHome() {
    const content = document.getElementById('content');

    // Home page content
    const h3 = document.createElement('h3');
    h3.textContent = "Embark on a Taste Journey to Italy!"
    content.appendChild(h3);
    const p = document.createElement('p');
    p.textContent = "Savor Italy's culinary artistry at Ristorante Santini. Taste the passion in every bite, as our master chefs create edible masterpieces. From handmade pasta to wood-fired pizzas, experience the heart and soul of Italian cuisine. Buon appetito!";
    content.appendChild(p);
}

export default createHome;