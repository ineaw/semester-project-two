export function updateCart(productsInCart, parentElement, cartSumPrice, countTheSumPrice, cartNumbers, countTheItems) {
  return () => {
    localStorage.setItem("cart", JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
      let result = productsInCart.map((product) => {
        return `
          <li class="products-in-cart__buy-item">
          <a href="product.html?id=${product.id}">
          <img src="${product.image}">
          <h4>View product</h4>
          </a>
          <div>
          <h4>${product.title}</h4>
          <h5><span class="cart__count">${product.count} x </span>${product.price}</h5>
          <div>
          </div>
          </li>`;
      });

      parentElement.innerHTML = result.join("");
      document.querySelector(".checkout").classList.remove("hidden");
      cartSumPrice.innerHTML = `NOK ${countTheSumPrice()}`;
      cartNumbers.innerHTML = countTheItems();
    } else {
      document.querySelector(".checkout").classList.add("hidden");
      parentElement.innerHTML = '<h4 class="cart__text--empty">Your cart is empty, <span><a href="products.html">fill up now</a></span></h4>';
      cartSumPrice.innerHTML = "";
      cartNumbers.innerHTML = "";
    }
  };
}
