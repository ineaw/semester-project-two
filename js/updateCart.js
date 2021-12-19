export function updateCart(productsInCart, cartContent, cartSumPrice, countTheSumPrice, cartNumbers, countTheItems) {
  return () => {
    localStorage.setItem("cart", JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
      let result = productsInCart.map((product) => {
        return `
          <li class="cart__item">
          <a href="product.html?id=${product.id}">
          <img src="${product.image}">
          <h6 class="cart__link>View product</h6>
          </a>
          <div>
          <h3>${product.title}</h3>
          <h5><span class="cart__count">${product.count} x </span>${product.price}</h5>
          </div>
          </li>`;
      });

      cartContent.innerHTML = result.join("");
      document.querySelector(".checkout").classList.remove("hidden");
      cartSumPrice.innerHTML = `NOK ${countTheSumPrice()}`;
      cartNumbers.innerHTML = countTheItems();
    } else {
      document.querySelector(".checkout").classList.add("hidden");
      cartContent.innerHTML = '<h4 class="cart__text--empty">Your cart is empty, <span><a href="products.html">fill up now</a></span></h4>';
      cartSumPrice.innerHTML = "";
      cartNumbers.innerHTML = "";
    }
  };
}
