export function countItems(productsInCart) {
  return () => {
    let num = 0;
    productsInCart.forEach((item) => {
      num += item.count;
    });
    return num;
  };
}

export function countSum(productsInCart) {
  return () => {
    let sum = 0;
    productsInCart.forEach((item) => {
      sum += item.price;
    });
    return sum;
  };
}
[];
