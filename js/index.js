import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
import { renderHero } from "./filter/renderHero.js";
import { renderFeatured, renderGallery } from "./filter/renderHome.js";

const productsUrl = baseUrl + "products";
createMenu();

(async function () {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    const items = json;
    console.log(items);

    renderHero(items);
    renderFeatured(items);
    renderGallery(items);
  } catch (error) {
    console.log(error);
    // displayMessage("error", error, ".product__container");
  }
})();
