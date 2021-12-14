import getExistingFavs from "../components/favFunctions.js";
import sortProducts from "./sortProducts.js";
import { toggleFavourites } from "../components/favs.js";
import { renderToggle } from "./renderToggle.js";

let getFavs = getExistingFavs();

export function renderProducts(products) {
  const productContainer = document.querySelector(".all-products");
  productContainer.innerHTML = "";

  sortProducts(products, productContainer);

  const favourites = getFavs;

  products.forEach((item) => {
    let favIcon = toggle(item);

    productContainer.innerHTML += `
        <div id="product" class="product flex-card">
        <figure class="product__figure">
        <i class="${favIcon} fa-heart" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-description="${item.description}" data-image="${item.image.url}"></i>
        <a href="product.html?id=${item.id}">
        <img class="product__image" src="${item.image.url}" alt="${item.title}">
        </a>
        </figure>
        <div class="product__info">
        <h4 class="product__title">${item.title}</h4>
        <h4 class="product__price">kr <span class="price-value">${item.price}</span></h6>
        </div>
        </div>
        `;
  });

  toggleFavourites();

  function toggle(item) {
    return renderToggle(favourites, item);
  }
}

export function renderFeatured(item) {
  const featuredContainer = document.querySelector(".featured-products");
  featuredContainer.innerHTML = "";
  const favourites = getFavs;

  // Using a Ternary operator to see if the products are featured

  for (let i = 0; i < item.length; i++) {
    let favIcon = toggle(item[i]);

    const feat = item[i].featured ? "block" : "none";

    featuredContainer.innerHTML += `
        <div id="product" class="featured" style="display: ${feat}">
        <figure class="featured">
        <i class="${favIcon} fa-heart" data-id="${item[i].id}" data-title="${item[i].title}" data-price="${item[i].price}" data-description="${item[i].description}" data-image="${item[i].image.url}"></i>
        <a href="product.html?id=${item[i].id}">
        <img class="product__image" src="${item[i].image.url}"  alt="${item[i].title}"/>
        </a>
        </figure>
        <div class="product__info">
        <h5 class="product__title">${item[i].title}</h5>
        <h6 class="product__price">kr <span class="price-value">${item[i].price}</span></h6>
        </div>
        </div>
        `;
  }
  toggleFavourites();

  function toggle(item) {
    return renderToggle(favourites, item);
  }
}
