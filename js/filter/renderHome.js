// import getExistingFavs from "../components/favFunctions.js";
// import renderFavs from "../favs.js";

// export function renderHome(items) {
//   const productContainer = document.querySelector(".all-products");
//   productContainer.innerHTML = "";

//   items.forEach((item) => {
//     let favIcon = "far";

//     productContainer.innerHTML += `
//         <div id="product" class="product flex-card">
//         <figure class="product__figure">
//         <i class="${favIcon} fa-heart" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}" data-description="${item.description}" data-image="${item.image.url}"></i>
//         <a href="product.html?id=${item.id}">
//         <img class="product__image" src="${item.image.formats.small.url}" alt="${item.title}">
//         </a>
//         </figure>
//         <div class="product__info">
//         <h4 class="product__title">${item.title}</h4>
//         <h4 class="product__price">kr <span class="price-value">${item.price}</span></h6>
//         </div>
//         </div>
//         `;
//   });
//   const favButtons = document.querySelectorAll("#product i");

//   favButtons.forEach((iconButton) => {
//     iconButton.addEventListener("click", handleClick);
//   });
//   function handleClick() {
//     this.classList.toggle("fa");
//     this.classList.toggle("far");

//     const id = this.dataset.id;
//     const title = this.dataset.title;
//     const description = this.dataset.description;
//     const price = this.dataset.price;
//     const image = this.dataset.image;

//     const currentFavs = getExistingFavs();

//     const itemExists = currentFavs.find(function (fav) {
//       return fav.id === id;
//     });
//   }
//   renderFavs();
// }
