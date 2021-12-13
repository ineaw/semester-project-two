import { baseUrl } from "../settings/api.js";

const homeUrl = baseUrl + "home";

export function renderHero() {
  (async function () {
    const hero = document.querySelector(".hero");

    try {
      const response = await fetch(homeUrl);
      const json = await response.json();

      const items = json;
      console.log(items);

      hero.innerHTML = "";

      hero.innerHTML = `
        <div class="hero__banner">
        <a href="products.html">
        <figure class="hero__image" style="background-image: url(${items.hero.url})" />
        <div class="hero__header">
        <h1 class="hero__title">Every product has a story</h1>
        <a href="products.html"><button class="cta">Start shopping</button></a>
        </div>
        </figure>
        </a>
         </div>
   `;
    } catch (error) {
      console.log(error);
    }
  })();
}
