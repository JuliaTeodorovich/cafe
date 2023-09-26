// fetch(`http://localhost:${PORT}/api/port`)
//   .then((response) => response.json())
//   .then((data) => {
//     const PORT = data.port;
//     console.log(data);

//     console.log(PORT);
//   })
// .catch((error) => {
//   console.error("Ошибка при получении порта:", error);
// });

// const { PORT } = require("dotenv").config().parsed;

const BASE_URL = `http://localhost:${process.env.PORT}/api`;
export const API_CATEGORIES_LIST = `${BASE_URL}/categories`;
export const API_PRODUCTS_BY_CATEGORY_ID = `${BASE_URL}/products`;
