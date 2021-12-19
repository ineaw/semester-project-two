import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
import { renderProducts } from "./filter/renderProducts.js";
import { searchProducts } from "./filter/searchProducts.js";
import sortProducts from "./components/sortProducts.js";
import { getCartItems } from "./components/getCartItems.js";
import { countItems, countSum } from "./components/countItems.js";
import { updateCart } from "./filter/updateCart.js";

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

    let productsInCart = getCartItems();
    const cartContent = document.querySelector("#cart__items");
    const cartSumPrice = document.querySelector("#sum-prices");
    const cartNumbers = document.querySelector("#sum-items");

    const countTheSumPrice = countSum(productsInCart);

    const countTheItems = countItems(productsInCart);

    const updateShoppingCartHTML = updateCart(productsInCart, cartContent, cartSumPrice, countTheSumPrice, cartNumbers, countTheItems);
    updateShoppingCartHTML();
  } catch (error) {
    console.log(error);
  }
})();
