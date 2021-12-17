export function addToCart(products, updateProductsInCart, updateShoppingCartHTML) {
  products.forEach((item) => {
    console.log(item);
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-to-cart")) {
        const productID = e.target.dataset.productId;
        const productName = item.querySelector(".detail__title").innerHTML;
        const productPrice = item.querySelector(".price").innerHTML;
        const productImage = item.querySelector("img").src;

        setProducts(productName, productImage, productID, productPrice);
      }

      function setProducts(productName, productImage, productID, productPrice) {
        let product = {
          title: productName,
          image: productImage,
          id: productID,
          count: 1,
          price: parseInt(productPrice),
          basePrice: parseInt(productPrice),
        };
        updateProductsInCart(product);
        updateShoppingCartHTML();
      }
    });
  });
}
