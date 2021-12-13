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
         <figure class="hero__image" style="background-image: url(${items.hero.formats.medium.url})" />
          <h1 class="hero__header">Every product has a story</h1>
        </figure>
        </a>
         </div>
   `;
    } catch (error) {
      console.log(error);
    }
  })();
}
