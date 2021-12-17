import { baseUrl } from "../settings/api.js";

const homeUrl = baseUrl + "home";

export function renderHero() {
  (async function () {
    const hero = document.querySelector(".hero");

    try {
      const response = await fetch(homeUrl);
      const json = await response.json();

      const home = json;
      console.log(home);

      hero.innerHTML = "";

      hero.innerHTML = `
        <div class="hero__banner">
        <a href="products.html">
        <figure class="hero__image" style="background-image: url(${home.hero.url})" />
        <div class="hero__header">
        <h1 class="hero__title">Every product has a story</h1>
        <a href="products.html"><button class="btn__cta--main">Explore products</button></a>
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
