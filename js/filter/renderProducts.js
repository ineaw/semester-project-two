import getExistingFavs from "../components/favFunctions.js";
import sortProducts from "./sortProducts.js";
import { toggleFavourites } from "../components/favs.js";
import { renderToggle } from "./renderToggle.js";

export function renderProducts(products) {
  const productContainer = document.querySelector(".all-products");
  productContainer.innerHTML = "";

  sortProducts(products, productContainer);

  const favourites = getExistingFavs();

  products.forEach((item) => {
    let favIcon = toggle(item);

    productContainer.innerHTML += `
        <div id="product" class="product flex-card">
        <figure class="product__figure">
        <i class="${favIcon} fa-heart" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-description="${item.description}" data-image="${item.image.url}"></i>
        <a href="product.html?id=${item.id}">
        <img class="product__image" src="${item.image.formats.small.url}" alt="${item.title}">
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

export function renderFeatured(items) {
  const featuredContainer = document.querySelector(".featured-products");
  featuredContainer.innerHTML = "";
  const favourites = getExistingFavs();

  let favIcon = renderToggle(favourites, items);

  // Using a Ternary operator to see if the products are featured

  for (let i = 0; i < items.length; i++) {
    const feat = items[i].featured ? "block" : "none";
    featuredContainer.innerHTML += `
        <div class="featured" style="display: ${feat}">
        <figure class="featured">
        <i class="${favIcon} fa-heart" data-id="${items[i].id}" data-title="${items[i].title}" data-price="${items[i].price}" data-description="${items[i].description}" data-image="${items[i].image.url}"></i>
        <a href="product.html?id=${items[i].id}">
        <img class="product__image" src="${items[i].image.url}"  alt="${items[i].title}"/>
        </a>
        </figure>
        <div class="product__info">
        <h5 class="product__title">${items[i].title}</h5>
        <h6 class="product__price">kr <span class="price-value">${items[i].price}</span></h6>
        </div>
        </div>
        `;
  }
  toggleFavourites();
}
