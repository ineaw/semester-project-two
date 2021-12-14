import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
import { renderProducts } from "./filter/renderProducts.js";
import { searchProducts } from "./filter/searchProducts.js";
import sortProducts from "./filter/sortProducts.js";

createMenu();

const productsUrl = `${baseUrl}products`;

(async function () {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    const items = json;
    sortProducts(items);
    searchProducts(items);
    renderProducts(items);
  } catch (error) {
    console.log(error);
  }
})();
