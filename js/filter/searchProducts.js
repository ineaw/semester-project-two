import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (product.title.toLowerCase().match(searchValue) || product.description.toLowerCase().match(searchValue)) {
        return true;
      }
    });

    renderProducts(filteredProducts);
  };
}
