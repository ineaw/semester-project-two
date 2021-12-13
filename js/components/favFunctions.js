export default function getExistingFavs(items) {
  const favs = localStorage.getItem("favourites");
  console.log(favs);
  if (favs === null) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}
