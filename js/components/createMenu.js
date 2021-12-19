import { getUserName } from "../utils/storage.js";
import logoutButton from "./articles/logoutButton.js";
import { navMenuButtons } from "./articles/navMenuButtons.js";

export default function createMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".nav__menu");
  const menuIcons = document.querySelector(".nav__icons");
  const topNav = document.querySelector(".top__header");

  const username = getUserName();

  let authLink = ``;

  let logOutLink = `<div class="nav__icon"><a href="account.html" class="${pathname === "/account.html" ? "active" : ""}"><i class="fas fa-user"></i></a></div>`;

  if (username) {
    authLink = `
    <li class="nav__link"><a href="#" class="${pathname === "#" ? "active" : ""}">Product management</a></li>
    `;
  }

  if (username) {
    logOutLink = `
                <a href="admin.html" class="${pathname === "/admin.html" ? "active" : ""}"><i class="far fa-user"></i> Hi ${username}</a>
                <button id="logout"> Logout</button>
     `;
  }

  topNav.innerHTML = `
  ${logOutLink}
  `;

  menuContainer.innerHTML = `    
                            <li class="nav__link"><a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a></li>
                            <li class="nav__link"><a href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a></li>
                            ${authLink}
                            `;

  menuIcons.innerHTML = `
  <li class="nav__icon"><a href="/favourites.html"><i class="far fa-heart"></i></a></li>
  <li class="nav__icon">
  <li class="nav__icon shopping-cart">
  <i class="fas fa-shopping-cart shopping-cart__btn"></i>
  <div class="cart hidden">
  <div class="overlay"></div>
  <div class="cart__header">
  <h2 class="cart__header--title">Cart</h2>
  <button id="close-cart" class="products-in-cart__btn">
  <i class="fas fa-times"></i>
  </button>
  </div>
  <ul id="cart__items">
  </ul>
  <h4 id="sum-prices"></h4>
  <div class="cart-buttons">
  <button class="checkout disabled">Check out</button>
  <button id="clear-cart" type="button">Clear Cart</button>
  </div>
  </li>
  <li class="nav-icon"><h6 id="sum-items"></h6></li>
  `;

  logoutButton();
  navMenuButtons();
}
