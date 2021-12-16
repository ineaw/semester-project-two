import { getUserName } from "../utils/storage.js";
// import { renderCart } from "../filter/cart.js";
import logoutButton from "./articles/logoutButton.js";
import { navMenuButtons } from "./articles/navMenuButtons.js";
// import clearCartButton from "./articles/clearCartButton.js";

// renderCart();

export default function createMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".nav__menu");
  const menuIcons = document.querySelector(".nav__icons");
  // const menuSearch = document.querySelector(".nav__search");

  const username = getUserName();

  let authLink = `<div class="nav__icon"><a href="admin.html" class="${pathname === "/admin.html" ? "active" : ""}"><i class="fas fa-user"></i></a></div>`;

  if (username) {
    authLink = `
                <li class="nav__link"><a href="add.html" class="${pathname === "/add.html" ? "active" : ""}"><i class="far fa-user"></i></a></li>
     `;
  }

  menuContainer.innerHTML = `    
                            <li class="nav__link"><a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a></li>
                            <li class="nav__link"><a href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a></li>
                            <li class="nav__link"><a href="#" class="${pathname === "#" ? "active" : ""}">About</a></li>
                            `;

  menuIcons.innerHTML = `
  ${authLink}
  <li class="nav__icon"><a href="/favourites.html"><i class="far fa-heart"></i></a></li>
  <li class="nav__icon">
  <li class="shopping-cart">
  <i class="fas fa-shopping-cart shopping-cart-button"></i>
  </div>
  <div class="products-in-cart hide">
  <div class="overlay"></div>
  <div class="products-in-cart-header">
  <button id="close-button" class="products-in-cart--btn">
  x
  </button>
  <h4>Cart</h4>
  </div>
  <ul id="buy-items">
  <h4 class="empty">Your shopping cart is empty</h4>
  </ul>
  <h4 id="sum-prices"></h4>
  <button class="btn checkout hidden">Check out</button>
  <button id="clear-cart" type="button">Clear Cart</button>
  </li>
  <li class="nav-icon"><div id="sum-items"><h6 class="sum"></h6></div></li>

  `;
  logoutButton();
  //   clearCartButton();
  navMenuButtons();
}
