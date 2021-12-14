import { renderProducts } from "./renderProducts.js";

export default function sortProducts(products, productContainer) {
  const sortLow = document.querySelector(".sort-low");
  const sortHigh = document.querySelector(".sort-high");
  const sortContainer = document.querySelector(".all-products");

  sortLow.addEventListener("click", function () {
    products.sort((low, high) => (low.price > high.price ? 1 : -1));
    sortContainer.innerHTML = "";
    renderProducts(products);
  });

  sortHigh.addEventListener("click", function () {
    products.sort((low, high) => (low.price < high.price ? 1 : -1));
    sortContainer.innerHTML = "";
    renderProducts(products);
  });
}
