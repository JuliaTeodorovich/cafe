import "../scss/main.scss";
import {
  API_CATEGORIES_LIST,
  API_PRODUCTS_BY_CATEGORY_ID,
  API_TOPPINGS_LIST,
} from "./urls";
import { createElement } from "./helpers/domHelpers";
import { Product } from "./constructor";

const size = "";
const topping = [];

function createProductAndCalculate(size, topping) {
  const myProduct = new Product(size, topping);
  const price = myProduct.calculatePrice();
  const toppings = myProduct.addTopping();
  console.log(
    `You chose: ${myProduct.size} with addition${toppings}.`
  );
  console.log(`Price: ${price}$.`);
}
createProductAndCalculate(size, topping);

const $categories = document.querySelector(".categories");
const $products = document.querySelector(".products");
const $info = document.querySelector(".info");
// const $cart = document.querySelector(".cart");

const $totalPrice = createElement(
  "h3",
  { class: "total-price" },
  `Total price: `,
  $info
);

fetch(API_CATEGORIES_LIST)
  .then((res) => res.json())
  .then((categories) => {
    $info.style.display = "none";
    let currentlyActiveCard = null;
    for (let category of categories) {
      const cardElement = createElement("div", { class: "card" });
      const titleElement = createElement(
        "h3",
        { class: "title" },
        category.name,
        cardElement
      );
      cardElement.addEventListener("click", () => {
        if (currentlyActiveCard) {
          currentlyActiveCard.classList.remove("active");
        }
        cardElement.classList.add("active");
        const categoryId = category.id;
        displayProductsByCategory(categoryId);
        currentlyActiveCard = cardElement;
      });

      cardElement.appendChild(titleElement);
      $categories.appendChild(cardElement);
    }
  });

function displayProductsByCategory(categoryId) {
  fetch(`${API_PRODUCTS_BY_CATEGORY_ID}/${categoryId}`)
    .then((res) => res.json())
    .then((products) => {
      $products.innerHTML = "";
      $products.style.display = "grid";
      $info.style.display = "none";

      for (let product of products) {
        const productElement = createElement(
          "div",
          { class: "product" },
          "",
          $products
        );
        const imgElement = createElement(
          "img",
          {
            class: "product-img",
            // src: `../img/${product.id}.png`,
            src: `../img/americana.png`,
          },
          "",
          productElement
        );
        const titleElement = createElement(
          "h4",
          { class: "product-title" },
          product.name,
          productElement
        );
        const choosePrice = createElement(
          "div",
          { class: "choose-price" },
          "",
          productElement
        );
        const priceElement1 = createElement(
          "p",
          { class: "product-price" },
          `small: ${product.price_small}₴`,
          choosePrice
        );
        const priceElement2 = createElement(
          "p",
          { class: "product-price" },
          `big: ${product.price_big}₴`,
          choosePrice
        );
        priceElement1.addEventListener("click", () => {
          product.size = priceElement1.textContent;
          createProductAndCalculate(product.price_small, []);
          displayProductDetails(product);
        });

        priceElement2.addEventListener("click", () => {
          product.size = priceElement2.textContent;
          createProductAndCalculate(product.price_big, []);
          displayProductDetails(product);
        });

        productElement.appendChild(imgElement);
        productElement.appendChild(titleElement);
        productElement.appendChild(choosePrice);
        choosePrice.appendChild(priceElement1);
        choosePrice.appendChild(priceElement2);
        $products.appendChild(productElement);
      }
    });
}

function displayProductDetails(product) {
  $products.style.display = "none";
  $info.style.display = "flex";
  $info.innerHTML = "";
  const titleElement = createElement(
    "h2",
    { class: "product-title" },
    product.name,
    $info
  );
  const descriptionElement = createElement(
    "p",
    { class: "product-size" },
    product.size,
    $info
  );
  const blockToppings = createElement(
    "div",
    { class: "block-toppings" },
    addToppings(),
    $info
  );
  const titleElement2 = createElement(
    "h2",
    { class: "product-title" },
    "Choose toppings:",
    blockToppings
  );
  $info.appendChild(titleElement);
  $info.appendChild(descriptionElement);
  $info.appendChild(blockToppings);
  blockToppings.appendChild(titleElement2);
}

function addToppings() {
  fetch(API_TOPPINGS_LIST)
    .then((res) => res.json())
    .then((toppings) => {
      let counter = 1;
      let selectedToppings = [];

      for (let topping of toppings) {
        const toppings = createElement("div", { class: "toppings" }, "", $info);
        const toppingElement = createElement(
          "h3",
          { class: "title topp" },
          `${topping.name} - ${topping.price}₴`,
          toppings
        );
        const checkboxId = `c${counter}`;
        const checkbox = createElement(
          "input",
          {
            class: "check",
            type: "checkbox",
            name: "c1",
            id: checkboxId,
          },
          "",
          toppings
        );
        const label = createElement("label", {
          for: checkboxId,
        });

        checkbox.addEventListener("change", function () {
          console.log(topping.price);
          if (this.checked) {
            const selectedTopping = topping.price;
            selectedToppings.push(selectedTopping);
          } else {
            const index = selectedToppings.indexOf(topping.price);
            if (index !== -1) {
              selectedToppings.splice(index, 1);
            }
          }
          const totalPrice = createProductAndCalculate(200, selectedToppings);
          console.log(selectedToppings);
          $totalPrice.textContent = `Total Price: ${totalPrice}₴`;
        });

        toppings.appendChild(toppingElement);
        toppings.appendChild(checkbox);
        toppings.appendChild(label);
        $info.appendChild(toppings);
        $info.appendChild($totalPrice);
        counter++;
      }
    });
}
