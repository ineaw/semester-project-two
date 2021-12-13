import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
import { renderProducts } from "./filter/renderProducts.js";

createMenu();

const productsUrl = `${baseUrl}products`;

(async function () {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    const items = json;

    renderProducts(items);
  } catch (error) {
    console.log(error);
  }
})();
