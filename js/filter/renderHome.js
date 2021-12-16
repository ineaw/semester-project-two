export function renderFeatured(item) {
  const featuredContainer = document.querySelector(".featured-products");
  featuredContainer.innerHTML = "";

  // Using a Ternary operator to see if the products are featured

  for (let i = 0; i < item.length; i++) {
    const feat = item[i].featured ? "block" : "none";

    featuredContainer.innerHTML += `
          <div id="product" class="featured" style="display: ${feat}">
          <figure class="featured__figure">
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
}

export function renderGallery(news) {
  const galleryContainer = document.querySelector(".new-products");
  galleryContainer.innerHTML = "";

  for (let i = 0; i < news.length; i++) {
    if (i === 6) {
      break;
    }

    galleryContainer.innerHTML += `
          <div class="news">
          <figure class="news__figure">
          <a href="product.html?id=${news[i].id}">
          <img class="news__image" src="${news[i].image.url}"  alt="${news[i].title}"/>
          </a>
          </figure>
          </div>
          </div>
          `;
  }
}
