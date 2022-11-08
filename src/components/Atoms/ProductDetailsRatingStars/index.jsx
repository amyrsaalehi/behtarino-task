export default function ProductDetailsRatingStars({ rate }) {
  const cieledRate = Math.ceil(rate);

  return Array(5)
    .fill(0)
    .map((_, idx) => (
      <span
        key={idx}
        className={
          cieledRate >= idx + 1 ? "text-primary" : "text-base-content/20"
        }
      >
        &#9733;
      </span>
    ));
}
