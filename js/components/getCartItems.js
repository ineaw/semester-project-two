export function getCartItems() {
  let productsInCart = JSON.parse(localStorage.getItem("cart"));

  if (!productsInCart) {
    productsInCart = [];
  }
  return productsInCart;
}
