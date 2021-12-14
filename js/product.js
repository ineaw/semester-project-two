// import { renderProducts } from "./filter/renderProducts.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
import getExistingItems from "./components/cartFunctions.js";
import clearCartButton from "./components/articles/clearCartButton.js";

createMenu();
clearCartButton();

const breadcrumbs = document.querySelector(".breadcrumbs");
const changeTitle = document.querySelector("title");

const querystring = document.location.search;

const params = new URLSearchParams(querystring);

const id = params.get("id");
console.log(id);
if (!id) {
  document.location.href = "/";
}

const detailUrl = baseUrl + "products/" + id;
const detailContainer = document.querySelector(".details");
detailContainer.innerHTML = "";
const shopping = getExistingItems();

(async function () {
  try {
    const response = await fetch(detailUrl);
    const json = await response.json();

    const item = json;
    console.log(json);
    changeTitle.innerHTML = `${item.title} | Moon Rising`;
    detailContainer.innerHTML += `       
        <div class="product-under"> 
        <div class="detail detail-card">
        <figure class="detail__figure">
        <img class="detail__image" src="${item.image.url}" alt="${item.title}">
        </figure>
        <div class="detail__info">
        <h2 class="detail__title">${item.title}</h2>
        <h3 class="detail__price"><span class="price">${item.price}</span>kr</h3>
        <button class="btn btn-small addToCart" data-product-id="${item.id}"><i class="fas fa-cart-plus"></i>Add to cart</button>
        <p class="detail__description">${item.description}</p>
        </div>
        </div>
        </div>
      `;

    breadcrumbs.innerHTML += `   
      <li><a href="index.html">Home</a></li>
      <li><a href="products.html">Products</a></li>
      <li><p>${item.title}</p></li>
      `;

    let productsInCart = JSON.parse(localStorage.getItem("shoppingcart"));

    if (!productsInCart) {
      productsInCart = [];
    }
    const parentElement = document.querySelector("#buyItems");
    const cartSumPrice = document.querySelector("#sum-prices");
    const products = document.querySelectorAll(".product-under");
    const cartNumbers = document.querySelector("#sum-items");

    const countTheSumPrice = function () {
      let sum = 0;
      productsInCart.forEach((item) => {
        sum += item.price;
      });
      return sum;
    };

    const countTheItems = function () {
      let num = 0;
      productsInCart.forEach((item) => {
        num += item.count;
      });
      return num;
    };

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
        document.querySelector(".checkout").classList.remove("hidden");
        cartSumPrice.innerHTML = "NOK" + countTheSumPrice();
        cartNumbers.innerHTML = countTheItems();
      } else {
        document.querySelector(".checkout").classList.add("hidden");
        parentElement.innerHTML = '<h4 class="cart__text--empty">Your shopping cart is currentlyempty</h4>';
        cartSumPrice.innerHTML = "";
        cartNumbers.innerHTML = "";
      }
    };

    function updateProductsInCart(product) {
      for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
          productsInCart[i].count += 1;
          productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
          return;
        }
      }
      productsInCart.push(product);
    }

    // newCartArray = Object.keys(json);
    // console.log(newCartArray);
    // const keys = Object.values(products);
    //  console.log(products);

    // keys.forEach((key, index) => {
    //   console.log(key, index);

    // key.addEventListener("click", function (e) {

    products.forEach((item) => {
      console.log(item);
      item.addEventListener("click", (e) => {
        if (e.target.classList.contains("addToCart")) {
          const productID = e.target.dataset.productId;
          const productName = item.querySelector(".detail__title").innerHTML;
          const productPrice = item.querySelector(".price").innerHTML;
          const productImage = item.querySelector("img").src;

          let product = {
            title: productName,
            image: productImage,
            id: productID,
            count: 1,
            price: +productPrice,
            basePrice: +productPrice,
          };
          updateProductsInCart(product);
          updateShoppingCartHTML();
        }
      });
    });

    parentElement.addEventListener("click", (e) => {
      const isPlusButton = e.target.classList.contains("in-cart__plus");
      const isMinusButton = e.target.classList.contains("in-cart__minus");
      if (isPlusButton || isMinusButton) {
        for (let i = 0; i < productsInCart.length; i++) {
          if (productsInCart[i].id == e.target.dataset.id);
          {
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
  } catch (error) {
    console.log(error);
  }
})();
