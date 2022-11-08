import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card aspect-square glass max-w-xs">
      <figure className="relative">
        <Image
          className="aspect-square"
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title.slice(0, 25)}...</h2>
        <p>{product.description.slice(0, 120)}...</p>
        <div className="card-actions justify-end">
          {/* In Next.js 13 we don't need to wrap an anchor tag with Link component anymore! */}
          <Link
            href={`/products/${product.id}`}
            className="w-full btn btn-primary"
          >
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
