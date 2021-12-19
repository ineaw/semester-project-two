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

  /* close cart */

  function closeCart() {
    const cart = document.querySelector(".cart");
    cart.classList.toggle("hidden");
    document.querySelector("body").classList.toggle("stop-scrolling");
  }

  const openShopCart = document.querySelector(".shopping-cart__btn");
  openShopCart.addEventListener("click", () => {
    const cart = document.querySelector(".cart");
    cart.classList.toggle("hidden");
    document.querySelector("body").classList.toggle("stop-scrolling");
  });

  const closeShopCart = document.querySelector("#close-cart");
  const overlay = document.querySelector(".overlay");
  closeShopCart.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
}
