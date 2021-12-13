export function navMenuButtons() {
  const closeBtn = document.querySelector(".nav--close");
  const openBtn = document.querySelector(".nav--open");
  const nav = document.querySelector(".nav__content");

  /* Open Navigation */

  openBtn.addEventListener("click", () => {
    nav.classList.add("navigation--open");
  });

  /* Close Navigation */

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("navigation--open");
  });

  function closeCart() {
    const cart = document.querySelector(".products-in-cart");
    cart.classList.toggle("hide");
    document.querySelector("body").classList.toggle("stop-scrolling");
  }

  const openShopCart = document.querySelector(".shopping-cart-button");
  openShopCart.addEventListener("click", () => {
    const cart = document.querySelector(".products-in-cart");
    cart.classList.toggle("hide");
    document.querySelector("body").classList.toggle("stop-scrolling");
  });

  const closeShopCart = document.querySelector("#close-button");
  const overlay = document.querySelector(".overlay");
  closeShopCart.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
}
