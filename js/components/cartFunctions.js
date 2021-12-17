export default function getExistingItems() {
  const cartItems = localStorage.getItem("shopping");
  console.log(cartItems);
  if (cartItems === null) {
    return [];
  } else {
    return JSON.parse(cartItems);
  }
}
