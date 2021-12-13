import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
// import { renderFeatured } from "./filter/renderFeatured.js";
import { renderHero } from "./filter/renderHero.js";
import { renderProducts } from "./filter/renderProducts.js";
import { renderFeatured } from "./filter/renderProducts.js";

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
    renderProducts(items);
  } catch (error) {
    console.log(error);
    // displayMessage("error", error, ".product__container");
  }
})();

// const productsUrl = baseUrl + "homes?populate=*";

// (async function () {
//   const productContainer = document.querySelector(".product-container");

//   try {
//     const response = await fetch(productsUrl);
//     const json = await response.json();

//     const items = json.data;
//     console.log(items);

//     productContainer.innerHTML = "";

//     items.forEach(function (item) {
//       productContainer.innerHTML += `
//     <div class="products">
//     <div class="product-under">
//     <figure class="product-image">
//     <div class="product-over">
//     <button class="btn btn-small add-to-cart" data-product-id="${item.id}">Add to cart</button>
//     </div>
//     </figure>
//     <div class="product-info">
//     <h4 class="product-name">${item.attributes.title}</h4>
//     <h4 class="price">kr <span class="price-value">${item.attributes.price}</span></h6>
//     </div>
//     </div>
//     </div>
//     `;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })();
