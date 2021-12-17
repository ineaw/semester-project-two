import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
import { renderProducts } from "./filter/renderProducts.js";
import { searchProducts } from "./filter/searchProducts.js";
import sortProducts from "./components/sortProducts.js";

createMenu();

const productsUrl = `${baseUrl}products`;

(async function () {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    const products = json;

    sortProducts(products);
    searchProducts(products);
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
})();
