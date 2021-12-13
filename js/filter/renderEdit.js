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
        <div id="edit" class="edit flex-card">
        <a href="edit.html?id=${products[i].id}">
        <figure class="edit__figure">
        <img class="edit__thumb" src="${products[i].image.url}"/>
        </figure>
        <h4 class="edit__title">${products[i].title}</h4>
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
