export const cart = [];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId == cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const selectorQuantity = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const selectorQuantityNum = Number(selectorQuantity.value);

  if (matchingItem) {
    matchingItem.quantity += selectorQuantityNum;
  } else {
    cart.push({
      productId: productId,
      quantity: selectorQuantityNum,
    });
  }
}
