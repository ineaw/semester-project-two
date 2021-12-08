const baseUrl = "https://localhost:1337/api/";

const productsUrl = baseUrl + "products?populate*";

(async function () {
  const fillCart = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    const items = json.data;
    console.log(items);

    fillCart.innerHTML = "";

    items.forEach(function (item) {
      fillCart.innerHTML += `
    <div class="products">
    <div class="product-under"> 
    <figure class="product-image">
    <img src="https://localhost:1337${item.attributes.url}" alt="${item.attributes.title}">

    <div class="product-over">
    <button class="btn btn-small add-to-cart" data-product-id="${item.id}">Add to cart</button>
    </div>
    </figure>
    <div class="product-info">
    <h4 class="product-name">${item.attributes.title}</h4>
    <h4 class="price">kr <span class="price-value">${item.attributes.price}</span></h6>
    </div>
    </div>
    </div>
    `;
    });
  } catch (error) {
    console.log(error);
  }
})();
