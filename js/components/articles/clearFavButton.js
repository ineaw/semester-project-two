export default function clearFavButton() {
  const clearBtn = document.querySelector("#clear-favs--btn");
  const clearFavs = document.querySelector(".fav-container");

  clearBtn.addEventListener("click", clearFavourites);

  function clearFavourites() {
    if (confirm("Are you sure you want to clear all favourites?")) {
      localStorage.removeItem("favourites");
      clearFavs.innerHTML = "Your wishlist is empty😔";
      clearBtn.style.display = "none";
    }
  }
}
