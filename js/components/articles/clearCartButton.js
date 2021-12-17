export default function clearCartButton() {
  const clearCartBtn = document.querySelector("#clear-cart");
  const clearCart = document.querySelector("#buy-items");
  const clearFas = document.querySelector("#sum-prices");
  const clearFa = document.querySelector("#sum-items");

  clearCartBtn.addEventListener("click", clearProd);

  function clearProd() {
    if (confirm("Are you sure you want to clear all items from cart?")) {
      localStorage.removeItem("cart");
      clearCart.innerHTML = "Your wishlist is empty😔";
      clearFas.innerHTML = "";
      clearFa.innerHTML = "";
      clearCartBtn.style.display = "none";
    }
  }
}
