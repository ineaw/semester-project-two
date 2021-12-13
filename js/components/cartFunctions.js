export default function getExistingItems(items) {
  const favs = localStorage.getItem("shopping");
  console.log(favs);
  if (favs === null) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}
