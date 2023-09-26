import "../scss/main.scss";
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
        console.log(currentlyActiveCard);
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
        const productElement = createElement("div", { class: "product" });
        const titleElement = createElement(
          "h4",
          { class: "product-title" },
          product.name,
          productElement
        );
        const priceElement1 = createElement(
          "p",
          { class: "product-price" },
          `small: ${product.price_small}₴`,
          productElement
        );
        const priceElement2 = createElement(
          "p",
          { class: "product-price" },
          `big: ${product.price_big}₴`,
          productElement
        );
        productElement.addEventListener("click", () => {
          displayProductDetails(product);
        });

        $products.appendChild(productElement);
        productElement.appendChild(titleElement);
        productElement.appendChild(priceElement1);
        productElement.appendChild(priceElement2);
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
