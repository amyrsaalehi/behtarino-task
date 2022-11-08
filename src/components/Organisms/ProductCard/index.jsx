import ProductCardBody from "src/components/Molecules/ProductCardBody";
import ProductCardImage from "src/components/Atoms/ProductCardImage";

export default function ProductCard({ product }) {
  return (
    <div className="card aspect-square glass max-w-xs">
      <ProductCardImage image={product.image} title={product.title} />
      <ProductCardBody
        id={product.id}
        title={product.title}
        description={product.description}
      />
    </div>
  );
}
