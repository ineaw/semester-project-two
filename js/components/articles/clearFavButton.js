export default function clearFavButton() {
  const clearBtn = document.querySelector("#clear-favs--btn");
  const clearFavs = document.querySelector(".fav-container");

  clearBtn.addEventListener("click", clearFavourites);

  function clearFavourites() {
    if (confirm("Are you sure you want to clear all favourites?")) {
      localStorage.removeItem("favourites");
      clearFavs.innerHTML = `<h3 class="fav-empty">Your wishlist is empty😔</h3>`;
      clearBtn.style.display = "none";
    }
  }
}
