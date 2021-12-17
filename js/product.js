// import { renderProducts } from "./filter/renderProducts.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
import clearCartButton from "./components/articles/clearCartButton.js";
import { addToCart } from "./filter/addToCart.js";
import { getCartItems } from "./components/getCartItems.js";
import { countItems, countSum } from "./components/countItems.js";

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

(async function () {
  try {
    const response = await fetch(detailUrl);
    const json = await response.json();

    const item = json;
    console.log(json);
    changeTitle.innerHTML = `${item.title} | Moon Rising`;
    detailContainer.innerHTML = `       
        <div class="detail"> 
        <figure class="detail__figure">
        <img class="detail__image" src="${item.image_url}" alt="${item.title}">
        </figure>
        <div class="detail__info">
        <h2 class="detail__title">${item.title}</h2>
        <h3 class="detail__price"><span class="price">${item.price}</span> kr</h3>
        <button class="btn-accent add-to-cart" data-product-id="${item.id}"><i class="fas fa-cart-plus"></i>Add to cart</button>
        <p class="detail__description">${item.description}</p>
        </div>
        </div>
      `;

    breadcrumbs.innerHTML += `   
      <li><a href="index.html">Home</a></li>
      <li><a href="products.html">Products</a></li>
      <li><p>${item.title}</p></li>
      `;

    let productsInCart = getCartItems();
    const parentElement = document.querySelector("#buy-items");
    const cartSumPrice = document.querySelector("#sum-prices");
    const products = document.querySelectorAll(".detail");
    const cartNumbers = document.querySelector("#sum-items");

    const countTheSumPrice = countSum(productsInCart);

    const countTheItems = countItems(productsInCart);

    const updateShoppingCartHTML = () => {
      localStorage.setItem("cart", JSON.stringify(productsInCart));
      if (productsInCart.length > 0) {
        let result = productsInCart.map((product) => {
          return `
          <li class="products-in-cart__buy-item">
          <a href="product.html?id=${product.id}">
          <img src="${product.image}">
          </a>
          <div>
          <h5>${product.title}</h5>
          <h6><span class="cart__count">${product.count} x </span>${product.price}</h6>
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

    function updateProductsInCart(product) {
      for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id === product.id) {
          productsInCart[i].count += 1;
          productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
          return;
        }
      }
      productsInCart.push(product);
    }
    addToCart(products, updateProductsInCart, updateShoppingCartHTML);

    // parentElement.addEventListener("click", (e) => {
    //   const isPlusButton = e.target.classList.contains("in-cart__plus");
    //   const isMinusButton = e.target.classList.contains("in-cart__minus");
    //   if (isPlusButton || isMinusButton) {
    //     for (let i = 0; i < productsInCart.length; i++) {
    //       if (productsInCart[i].id == e.target.dataset.id);
    //       {
    //         if (isPlusButton) {
    //           productsInCart[i].count += 1;
    //         } else if (isMinusButton) {
    //           productsInCart[i].count -= 1;
    //         }
    //         productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
    //       }
    //       if (productsInCart[i].count <= 0) {
    //         productsInCart.splice(i, 1);
    //       }
    //     }
    //     updateShoppingCartHTML();
    //   }
    // });
    updateShoppingCartHTML();
  } catch (error) {
    console.log(error);
  }
})();
