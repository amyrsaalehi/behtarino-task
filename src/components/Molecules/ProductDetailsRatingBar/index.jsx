import React from "react";
import ProductDetailsRatingStars from "src/components/Atoms/ProductDetailsRatingStars";

export default function ProductDetailsRatingBar({ rating }) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <ProductDetailsRatingStars rate={rating.rate} />
        <span className="ml-1 text-primary/50">{rating.count}</span>
      </div>
    </div>
  );
}
