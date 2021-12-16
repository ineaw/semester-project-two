export function favExist(favourites, product) {
  let favIcon = "far";

  const doesObjectExist = favourites.find(function (fav) {
    console.log(fav);

    return fav.id === product.id;
  });

  if (doesObjectExist) {
    favIcon = "fa";
  }

  return favIcon;
}
