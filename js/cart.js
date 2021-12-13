export function renderCart() {
  let productsInCart = JSON.parse(localStorage.getItem("shoppingcart"));
  if (!productsInCart) {
    productsInCart = [];
  }

  const parentElement = document.querySelector("#item__buy");
  const cartPriceSum = document.querySelector("#item__sum");
  const product = document.querySelector(".product-under");
  const cartQuantity = document.querySelector("#item__quantity");

  const countPrice = function () {
    let sum = 0;
    productsInCart.forEach((item) => {
      sum += item.price;
    });
    return sum;
  };

  const countItems = function () {
    let num = 0;
    productsInCart.forEach((item) => {
      num += item.count;
    });
    return num;
  };

  function updateProductsInCart(product) {
    for (let i = 0; i < productsInCart.length; i++) {
      productsInCart[i].count += 1;
      productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
    productsInCart.push(product);
  }

  const updateShoppingCartHTML = function () {
    localStorage.setItem("shoppingcart", JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
      let result = productsInCart.map((product) => {
        return `
        <li class="products-in-cart__buy-item">
        <a href="product.html?id=${product.id}">
        <img src="${product.image}">
        </a>
        <div>
        <h5>${product.title}</h5>
        <h6>${product.price}</h6>
        <div>
        <button class="in-cart__minus" data-id=${product.id}>-</button>
        <span class="in-cart__count">${product.count}</span>
        <button class="in-cart__plus" data-id=${product.id}>+</button>
        </div>
        </li>`;
      });

      parentElement.innerHTML = result.join("");
      document.querySelector(".checkout").classList.remove("cart__hidden");
      cartPriceSum.innerHTML = "NOK" + countPrice();
      cartQuantity.innerHTML = countItems();
    } else {
      document.querySelector(".checkout").classList.add("cart__hidden");
      parentElement.innerHTML = '<h4 class="cart__empty">Your shopping cart is empty</h4>';
      cartPriceSum.innerHTML = "";
      cartQuantity.innerHTML = "";
    }
  };

  newCartArray = Object.keys(item);
  console.log(newCartArray);
  product.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-to-cart")) {
        const productId = e.target.dataset.id;
        const productTitle = product.querySelector(".detail__title").innerHTML;
        const productPrice = product.querySelector(".detail__price").innerHTML;
        const productImage = product.querySelector("img").src;
        let prod = {
          title: productTitle,
          image: productImage,
          id: productId,
          count: 1,
          price: +productPrice,
          basePrice: +productPrice,
        };
        updateProductsInCart(prod);
        updateShoppingCartHTML();
      }
    });
  });

  // products.forEach((item) => {
  //   item.addEventlistener("click", (e) => {
  //     if (e.target.classList.contains("add-to-cart")) {
  //       const productId = e.target.dataset.productId;
  //       const productTitle = item.querySelector(".detail__title");
  //       const productPrice = item.querySelector(".detail__price");
  //       const productImage = item.querySelector(".detail__image").src;
  //       let product = {
  //         name: productTitle,
  //         image: productImage,
  //         id: productId,
  //         count: 1,
  //         price: +productPrice,
  //         basePrice: +productPrice,
  //       };
  //       updateProductsInCart(product);
  //       updateShoppingCartHTML();
  //     }
  //   });
  // });

  parentElement.addEventListener("click", (e) => {
    const isPlusButton = e.target.classList.contains("in-cart__plus");
    const isMinusButton = e.target.classList.contains("in-cart__minus");
    if (isPlusButton || isMinusButton) {
      for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == e.target.dataset.id) {
          if (isPlusButton) {
            productsInCart[i].count += 1;
          } else if (isMinusButton) {
            productsInCart[i].count -= 1;
          }
          productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
        }
        if (productsInCart[i].count <= 0) {
          productsInCart.splice(i, 1);
        }
      }
      updateShoppingCartHTML();
    }
  });

  updateShoppingCartHTML();
}
