import { favourites } from "../../favourites.js";

export function toggleOut(favourite, favIcon) {
  const doesFavExist = favourites.find(function (fav) {
    return parseInt(fav.id) === favourite.id;
  });

  if (doesFavExist) {
    favIcon = "far";
  }
  return favIcon;
}
