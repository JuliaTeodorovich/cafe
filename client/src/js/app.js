import "../scss/main.scss";
import "../img";
import { API_CATEGORIES_LIST, API_PRODUCTS_BY_CATEGORY_ID } from "./urls";
import { createElement } from "./helpers/domHelpers";

const $categories = document.querySelector(".categories");
const $products = document.querySelector(".products");
// const $info = document.querySelector(".info");
// const $cart = document.querySelector(".cart");

fetch(API_CATEGORIES_LIST)
  .then((res) => res.json())
  .then((categories) => {
    let currentlyActiveCard = null;
    for (let category of categories) {
      const cardElement = createElement("div", { class: "card" });
      const titleElement = createElement(
        "h3",
        { class: "title" },
        category.name
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
      for (let product of products) {
        const productElement = createElement(
          "div",
          { class: "product" },
          "",
          $products
        );
        const imgElement = createElement(
          "img",
          { class: "product-img", src: `./img/${product.id}.jpg` },
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
        productElement.addEventListener("click", () => {
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
  $products.innerHTML = "";

  const titleElement = createElement(
    "h2",
    { class: "product-title" },
    product.name
  );
  const descriptionElement = createElement(
    "p",
    { class: "product-description" },
    product.description
  );

  console.log();
  $products.appendChild(titleElement);
  $products.appendChild(descriptionElement);
}
