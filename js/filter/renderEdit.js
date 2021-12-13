// import { getExistingFavs } from "../components/favFunctions.js";
import { baseUrl } from "../settings/api.js";

const productsUrl = baseUrl + "products";

export function renderEdit() {
  async function getProductsToEdit() {
    try {
      const response = await fetch(productsUrl);
      const products = await response.json();

      const productContainer = document.querySelector(".all-products");
      productContainer.innerHTML = "";

      for (let i = 0; i < products.length; i++) {
        productContainer.innerHTML += `
        <div id="product" class="product flex-card">
        <a href="edit.html?id=${products[i].id}">
        <figure class="product__figure">
        <img class="product__image" src="${products[i].image.url}"/>
        </figure>
        <div class="product__info">
        <h4 class="product__title">${products[i].title}</h4>
        </div>
        <button class="cta">Edit product</button>
        </a>
        </div>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  }
  getProductsToEdit();
}
