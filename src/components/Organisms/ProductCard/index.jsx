import ProductCardBody from "src/components/Molecules/ProductCardBody";
import ProductCardImage from "src/components/Atoms/ProductCardImage";
import testIds from "src/constants/testIds";

export default function ProductCard({ product, priority }) {
  return (
    <div
      className="card aspect-square glass max-w-xs"
      data-testid={testIds.PRODUCT_CARD}
    >
      <ProductCardImage
        image={product.image}
        title={product.title}
        priority={priority}
      />
      <ProductCardBody
        id={product.id}
        title={product.title}
        description={product.description}
      />
    </div>
  );
}
