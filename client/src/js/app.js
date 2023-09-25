import "../scss/main.scss";

// import { addListeners } from './helpers/listeners.js';
import { createElement } from "./helpers/domHelpers.js";
import {
    API_CATEGORIES_LIST,
    // API_PRODUCTS_BY_CATEGORY_ID
} from "./urls";

createElement();

window.onload = function () {
  fetch(API_CATEGORIES_LIST)
    .then((res) => res.json())
    .then((categories) => {
      for (let category of categories) {
        document.body.innerHTML = `<div class="card">
            <h3 class="title">${category.name}</h3>
        </div>`;
        createElement();
      }
    });
};
