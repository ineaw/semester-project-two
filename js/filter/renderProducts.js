import getExistingFavs from "../components/favFunctions.js";

export function renderProducts(products) {
  const productContainer = document.querySelector(".all-products");
  productContainer.innerHTML = "";

  const favourites = getExistingFavs();

  products.forEach((item) => {
    let favIcon = "far";

    const doesFavExist = favourites.find(function (fav) {
      return parseInt(fav.id) === item.id;
    });

    if (doesFavExist) {
      favIcon = "fa";
    }
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

  const favButtons = document.querySelectorAll("#product i");

  favButtons.forEach((iconButton) => {
    iconButton.addEventListener("click", handleClick);
  });
  function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const description = this.dataset.description;
    const price = this.dataset.price;
    const image = this.dataset.image;

    const currentFavs = getExistingFavs();

    const itemExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });
    if (itemExists === undefined) {
      const product = { id: id, title: title, description: description, price: price, image: image };

      currentFavs.push(product);

      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  }
  function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
  }
}

export function renderFeatured(items) {
  const featuredContainer = document.querySelector(".featured-products");
  featuredContainer.innerHTML = "";

  let favIcon = "far";

  // Using a Ternary operator to see if the products are featured

  for (let i = 0; i < items.length; i++) {
    const feat = items[i].featured ? "block" : "none";
    featuredContainer.innerHTML += `
        <div class="product flex-card" style="display: ${feat}">
        <figure class="product__figure">
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
}
