import "../scss/main.scss";
import {
  API_CATEGORIES_LIST,
  API_PRODUCTS_BY_CATEGORY_ID,
  API_TOPPINGS_LIST,
  API_CART_LIST,
} from "./urls";
import { createElement } from "./helpers/domHelpers";
import { Product } from "./helpers/constructor";
import { productImages } from "./imgs";

const $main = document.querySelector("main");
const $categories = document.querySelector(".categories");
const $products = document.querySelector(".products");
const $info = document.querySelector(".info");
const $price = document.querySelector(".price");
const $totalPrice = document.querySelector(".total-price");
const $btnAdd = document.querySelector(".btn-add");
const $cart = document.querySelector(".cart");
const cartIcon = document.querySelector(".fa");
const cross = createElement("div", { class: "cross" }, "", $cart);
cross.style.display = "none";
cross.addEventListener("click", () => {
  $categories.style.display = "flex";
  cross.style.display = "none";
  order.style.display = "none";
  $cart.style.justifyContent = "end";
});
$cart.appendChild(cross);
const order = createElement("div", { class: "order card" }, "", $cart);
const orderText = createElement("h3", "", `Your order: `, order);
const listCart = createElement("ul", { class: "list-group" }, "", order);
const total = createElement("h3", { class: "total" }, "", order);
let cart = [];
order.style.display = "none";
$price.style.display = "none";
productImages;
let selectedToppings = [];
let selectedToppingsPrice = [];
const cartItems = [];
const chosenProducts = [];
let productPrice = 0;
let currentlyActiveCard = null;
let productToken = "";

cartIcon.addEventListener("click", () => {
  $categories.style.display = "none";
  if (currentlyActiveCard) {
    currentlyActiveCard.classList.remove("active");
  }
  $products.style.display = "none";
  $info.style.display = "none";
  $price.style.display = "none";
  order.style.display = "flex";
  $cart.style.justifyContent = "space-between";
  cross.style.display = "flex";
  listCart.innerHTML = "";
  displayCart(cart);
});

function createProductAndCalculate(product, toppings) {
  const myProduct = new Product(product, toppings);
  toppings.forEach((topping) => myProduct.addTopping(topping));
  productPrice = myProduct.calculatePrice();
  $totalPrice.innerHTML = productPrice;
}

fetch(API_CATEGORIES_LIST)
  .then((res) => res.json())
  .then((categories) => {
    $info.style.display = "none";
    $price.style.display = "none";

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
        $btnAdd.innerHTML = "Confirm";
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
      $price.style.display = "none";

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
            src: `../img/${product.id}.png`,
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
          { class: "product-price card" },
          `small: ${product.small}₴`,
          choosePrice
        );
        const priceElement2 = createElement(
          "p",
          { class: "product-price card" },
          `big: ${product.big}₴`,
          choosePrice
        );

        priceElement1.addEventListener("click", () => {
          product.size = "small";
          handleSizeSelection(product, categoryId);
        });

        priceElement2.addEventListener("click", () => {
          product.size = "big";
          handleSizeSelection(product, categoryId);
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

function handleSizeSelection(product, categoryId) {
  if (categoryId !== "beverages") {
    addToppings(product);
  }
  switch (product.size) {
    case "small":
      createProductAndCalculate(product.small, selectedToppingsPrice);
      break;
    case "big":
      createProductAndCalculate(product.big, selectedToppingsPrice);
      break;
  }
  displayProductDetails(product, categoryId);
  add(product);
}

function displayProductDetails(product, categoryId) {
  $products.style.display = "none";
  $info.style.display = "flex";
  $price.style.display = "flex";
  $info.innerHTML = "";
  const imgElement = createElement(
    "img",
    {
      class: "product-img",
      src: `../img/${product.id}.png`,
    },
    "",
    $info
  );
  const titleElement = createElement(
    "h2",
    { class: "product-title" },
    product.name,
    $info
  );
  const descriptionElement = createElement(
    "p",
    { class: "product-size" },
    `${product.size} (${
      product.size === "small" ? product.small : product.big
    }₴)`,
    $info
  );
  const blockToppings = createElement(
    "div",
    { class: "block-toppings" },
    "Choose toppings:",
    $info
  );

  $info.appendChild(imgElement);
  $info.appendChild(titleElement);
  $info.appendChild(descriptionElement);
  if (categoryId !== "beverages") {
    $info.appendChild(blockToppings);
  }
}

function addToppings(product) {
  fetch(API_TOPPINGS_LIST)
    .then((res) => res.json())
    .then((toppings) => {
      let counter = 1;
      let productSize = product.size === "small" ? product.small : product.big;
      selectedToppings = [];
      selectedToppingsPrice = [];
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

        checkbox.addEventListener("change", (event) => {
          const checkbox = event.target;
          if (checkbox.checked) {
            const selectedTopping = topping;
            selectedToppings.push(selectedTopping);
            const selectedToppingPrice = topping.price;
            selectedToppingsPrice.push(selectedToppingPrice);
          } else {
            const index = selectedToppingsPrice.indexOf(topping.price);
            if (index !== -1) {
              selectedToppingsPrice.splice(index, 1);
            }
          }
          createProductAndCalculate(productSize, selectedToppingsPrice);
        });
        toppings.appendChild(toppingElement);
        toppings.appendChild(checkbox);
        toppings.appendChild(label);
        $info.appendChild(toppings);
        counter++;
      }
    });
}

function add(product, quantity) {
  quantity = 1;
  $btnAdd.style.background = "rgb(223, 228, 212)";
  $btnAdd.style.pointerEvents = "all";
  $btnAdd.addEventListener("click", () => {
    $btnAdd.innerHTML = "Successfully added";
    $btnAdd.style.background = "#56ce68";
    $btnAdd.style.pointerEvents = "none";
    $info.innerHTML = `${product.name}`;
    product.token = generateToken();
    const existingProduct = chosenProducts.find(
      (item) => item.token === product.token
    );
    if (!existingProduct) {
      product.toppings = selectedToppings;
      product.price = productPrice;
      chosenProducts.push(product);
      cartItems.push({ product, quantity });
      sendProductToServer(product);
      fetchAndDisplayCartData();
    }
  });
}

function generateToken() {
  return Math.random().toString(36).slice(2, 11);
}

async function sendProductToServer(product) {
  try {
    const response = await fetch(API_CART_LIST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      fetchAndDisplayCartData();
    } else {
      console.error("Помилка відправлення продукту на сервер");
    }
  } catch (error) {
    console.error("Помилка: " + error);
  }
}
let value = "";
async function fetchAndDisplayCartData() {
  try {
    const response = await fetch(API_CART_LIST);
    if (!response.ok) {
      throw new Error("Помилка отримання даних з сервера");
    }

    cart = await response.json();

    const totalQuantity = cart.length;
    if (cartIcon) {
      cartIcon.setAttribute("value", totalQuantity);
    }
    displayCart(cart);
  } catch (error) {
    console.error("Помилка: " + error);
  }
}

function displayCart(cart) {
  listCart.innerHTML = "";
  let totalSum = 0;
  value = cartIcon.getAttribute("value");
  if (parseInt(value) === 0) {
    order.innerHTML = "No products added";
    orderText.style.display = "none";
    listCart.style.display = "none";
    total.style.display = "none";
  } else {
    orderText.style.display = "block";
    listCart.style.display = "flex";
    total.style.display = "block";
    order.innerHTML = "";
    for (let itemCart of cart) {
      totalSum += itemCart.price;
      const itemOfCart = createElement(
        "li",
        { class: "list-group-item" },
        `${itemCart.name} - ${itemCart.price}₴`,
        listCart
      );
      const deleteCartItem = createElement(
        "div",
        { class: "cross" },
        "",
        itemOfCart
      );
      productToken = itemCart.token;
      deleteCartItem.addEventListener("click", () => {
        deleteItemCart();
      });
      itemOfCart.appendChild(deleteCartItem);
      listCart.appendChild(itemOfCart);
    }
  }

  total.innerHTML = `Total: ${totalSum}₴`;
  order.appendChild(orderText);
  order.appendChild(listCart);
  order.appendChild(total);
  $main.appendChild(order);
}

function deleteItemCart() {
  fetch(`${API_CART_LIST}/${productToken}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        fetchAndDisplayCartData();
      } else {
        console.error(`Помилка видалення продукта.`);
      }
    })
    .catch((error) => {
      console.error("Помилка: " + error);
    });
}
fetchAndDisplayCartData();
