// shortage title

// shortage description

// calculate discount
export function calculatePrice(price) {
  const discountRate = Math.random().toFixed(2);
  const discount = price * discountRate;
  const discountedPrice = (price - discount).toFixed(2);


  return {
    discountRate: discountRate * 100,
    discountedPrice
  }
}