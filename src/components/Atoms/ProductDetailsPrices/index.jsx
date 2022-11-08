export default function ProductDetailsPrices({ price, discountedPrice }) {
  return (
    <div className="flex gap-3">
      <del className="text-lg font-semibold text-base-content/40">${price}</del>
      <ins className="text-xl font-bold text-primary no-underline">
        ${discountedPrice}
      </ins>
    </div>
  );
}
