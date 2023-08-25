import { products } from "./productsData.js";
import { categories } from "./productsData.js";
import { handleDarkMode } from "./theme.js";
/* Desenvolva sua lógica aqui ... */
let inputValue = 100;
let filteredArray = products;

const createCardElement = ({ title, price, img, band, year }) => {
    const card = document.createElement("li");

    const image = document.createElement('img');
    const p = document.createElement('p');
    const h2 = document.createElement('h2');
    const span = document.createElement('span');
    const productPrice = document.createElement('p');
    const button = document.createElement('button');
    const div = document.createElement('div');

    span.append(p, button);
    div.append(productPrice, h2, span);
    card.append(image, div);

    image.src = img;
    p.innerText = `${band} ${year}`;
    h2.innerText = title;
    productPrice.innerText = `R$ ${price}`;
    button.innerText = 'Comprar';

    return card;
}

const renderCards = (products, value) => {
    const cardList = document.querySelector('.card__list');

    products.forEach((product) => {
        if (product.price <= value) {
            const cardElement = createCardElement(product);
            cardList.appendChild(cardElement);
        }
    });
}

const renderButtons = (categories) => {

    categories.forEach((category) => {
        const filterButtons = document.querySelector('.filter-buttons');

        const li = document.createElement("li");
        const button = document.createElement('button');

        li.append(button);
        filterButtons.appendChild(li);

        button.innerText = category;
    });
}

renderButtons(categories);

const addEvents = (categories, products) => {
    const getButtons = document.querySelectorAll('.filter-buttons button');
    const buttons = [...getButtons];
    const getInput = document.querySelector('.filter-price input');
    const getPriceParagraph = document.querySelector('.filter-price p');

    getInput.addEventListener('input', (event) => {
        const price = event.target;

        getPriceParagraph.innerText = `Até R$ ${price.value}`;

        const cardList = document.querySelector('.card__list');
        cardList.innerHTML = '';

        inputValue = price.value;

        renderCards(filteredArray, inputValue);
    });

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {

            const cardList = document.querySelector('.card__list');
            cardList.innerHTML = '';

            if (index === 0) {
                filteredArray = products
            } else {
                filteredArray = products.filter((product) => product.category === index);

            }
            renderCards(filteredArray, inputValue);
        });
    });

}

addEvents(categories, products);
handleDarkMode();