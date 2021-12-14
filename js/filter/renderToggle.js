export function renderToggle(favourites, item) {
  let favIcon = "far";

  const doesFavExist = favourites.find(function (fav) {
    return parseInt(fav.id) === item.id;
  });

  if (doesFavExist) {
    favIcon = "fa";
  }
  return favIcon;
}
