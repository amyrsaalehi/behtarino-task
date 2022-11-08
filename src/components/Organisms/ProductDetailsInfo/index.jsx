import ProductDetailsDescription from "src/components/Atoms/ProductDetailsDescription";
import ProductDetailsPrices from "src/components/Atoms/ProductDetailsPrices";
import ProductDetailsTitle from "src/components/Atoms/ProductDetailsTitle";
import ProductDetailsActions from "src/components/Molecules/ProductDetailsActions";
import ProductDetailsRatingBar from "src/components/Molecules/ProductDetailsRatingBar";

export default function ProductDetailsInfo({ product }) {
  return (
    <div className="p-4 flex flex-col items-start gap-4">
      <ProductDetailsTitle
        title={product.title}
        discountRate={product.discountRate}
      />
      <div className="w-full flex justify-between">
        <p className="text-base-content/50 italic font-semibold">
          {product.category}
        </p>
        <ProductDetailsRatingBar rating={product.rating} />
      </div>
      <ProductDetailsPrices
        price={product.price}
        discountedPrice={product.discountedPrice}
      />
      <ProductDetailsDescription description={product.description} />
      <ProductDetailsActions />
    </div>
  );
}
