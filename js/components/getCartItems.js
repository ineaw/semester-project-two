export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};
