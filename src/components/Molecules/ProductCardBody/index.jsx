import ProductCardActions from "src/components/Atoms/ProductCardActions";
import ReadMore from "src/components/Atoms/ReadMore";

export default function ProductCardBody({ id, title, description }) {
  return (
    <div className="card-body">
      <h2 className="card-title">{title.slice(0, 25)}...</h2>

      <ReadMore sliceLength={120}>{description}</ReadMore>

      <ProductCardActions id={id} />
    </div>
  );
}
