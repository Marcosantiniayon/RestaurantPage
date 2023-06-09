function createMenu() {
    const content = document.getElementById('content');

    // Menu Content
    const menuH1 = document.createElement('h1');
    menuH1.textContent = 'Our Menu';
    content.appendChild(menuH1);

    const beveragesDiv = document.createElement('div');
    content.appendChild(beveragesDiv);

        const beveragesH3 = document.createElement('h3');
        beveragesH3.textContent = 'Beverages';
        beveragesDiv.appendChild(beveragesH3);

        const beveragesList = document.createElement('ul');
        beveragesDiv.appendChild(beveragesList);
            const soda = document.createElement('li');
            const lemonade = document.createElement('li');
            const wine = document.createElement('li');
            beveragesList.appendChild(soda);
                soda.textContent = 'Soda';
            beveragesList.appendChild(lemonade);
                lemonade.textContent = 'Lemonade';
            beveragesList.appendChild(wine);
                wine.textContent = 'Wine';

    const sidesDiv = document.createElement('div');
    content.appendChild(sidesDiv);

        const sidesH3 = document.createElement('h3');
        sidesH3.textContent = 'Sides';
        sidesDiv.appendChild(sidesH3);

        const sidesList = document.createElement('ul');
        sidesDiv.appendChild(sidesList);
            const breadsticks = document.createElement('li');
            const mozerellasticks = document.createElement('li');
            const salad = document.createElement('li');
            sidesList.appendChild(breadsticks);
                breadsticks.textContent = 'Breadsticks'
            sidesList.appendChild(mozerellasticks);
                mozerellasticks.textContent = 'Mozerella Sticks'
            sidesList.appendChild(salad);
                salad.textContent = 'Salad'

    const mainDishsesDiv = document.createElement('div');
    content.appendChild(mainDishsesDiv);

        const MainDishesH3 = document.createElement('h3');
        MainDishesH3.textContent = 'Main Dishes';
        mainDishsesDiv.appendChild(MainDishesH3);

        const mainDishesList = document.createElement('ul');
        mainDishsesDiv.appendChild(mainDishesList);
            const lasagna = document.createElement('li');
            const spaghetti = document.createElement('li');
            const pizza = document.createElement('li');
            mainDishesList.appendChild(lasagna);
                lasagna.textContent = 'Lasagna'
            mainDishesList.appendChild(spaghetti);
                spaghetti.textContent = 'Spaghetti & Meatballs'
            mainDishesList.appendChild(pizza);
                pizza.textContent = 'Margherita Pizza'

}

export default createMenu;