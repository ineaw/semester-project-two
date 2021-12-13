// import getExistingFavs from "./components/favFunctions.js";

// export default function renderFavs() {
//   const favButtons = document.querySelectorAll("#product i");
//   const favourites = getExistingFavs();

//   getExistingFavs();

//   favourites.forEach(() => {
//     let favIcon = "far";
//     const doesFavExist = favourites.find(function (fav) {
//       return parseInt(fav.id) === favourites.id;
//     });

//     if (doesFavExist) {
//       favIcon = "fa";
//     }
//   });

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

//     if (itemExists === undefined) {
//       const product = { id: id, title: title, description: description, price: price, image: image };

//       currentFavs.push(product);

//       saveFavs(currentFavs);
//     } else {
//       const newFavs = currentFavs.filter((fav) => fav.id !== id);
//       saveFavs(newFavs);
//     }
//   }
//   function saveFavs(favs) {
//     localStorage.setItem("favourites", JSON.stringify(favs));
//   }
// }
