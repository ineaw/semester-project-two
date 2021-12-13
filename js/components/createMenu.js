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

  let authLink = `<li class="nav__link"><a href="admin.html" class="${pathname === "/admin.html" ? "active" : ""}"><i class="fas fa-user"></i></a></li>`;

  if (username) {
    authLink = `
                <li class="nav__link"><a href="add.html" class="${pathname === "/add.html" ? "active" : ""}"><i class="far fa-user"></i></a>
     `;
  }

  menuContainer.innerHTML = `    
                            <li class="nav__link"><a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a></li>
                            <li class="nav__link"><a href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a></li>
                            <li class="nav__link"><a href="#" class="${pathname === "#" ? "active" : ""}">About</a></li>
                            `;

  menuIcons.innerHTML = `${authLink}
      <li class="nav__link"><a href="/favourites.html"><i class="far fa-heart"></i></a></li>
      <li class="nav__link">
      <div class="shopping-cart">
      <div class="sum-prices">
      <i class="fas fa-shopping-cart shopping-cart-button"></i>
      <h6 id="sum-items"></h6>
      </div>
      </div>
      <div class="products-in-cart hide">
      <div class="overlay"></div>
      <div class="products-in-cart--header">
      <button id="close__button" class="products-in-cart--btn">
     X
      </button>
      <h2>Cart</h2>
      </div>
      <ul id="buyItems">
      <h4 class="empty">Your shopping cart is empty</h4>
      </ul>
      <h4 id="sum-prices"></h4>
      <button class="btn checkout hidden">Check out</button>
      <button id="clear-cart" type="button">Clear Cart</button>
      </li>
      `;
  logoutButton();
  //   clearCartButton();
  navMenuButtons();
}
