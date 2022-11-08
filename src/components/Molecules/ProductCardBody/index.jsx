import Link from "next/link";
import ProductCardActions from "src/components/Atoms/ProductCardActions";

export default function ProductCardBody({ id, title, description }) {
  return (
    <div className="card-body">
      <h2 className="card-title">{title.slice(0, 25)}...</h2>
      <p>{description.slice(0, 120)}...</p>
      <ProductCardActions id={id} />
    </div>
  );
}
