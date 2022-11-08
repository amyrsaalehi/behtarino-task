import Link from "next/link";

export default function ProductCardActions({ id }) {
  return (
    <div className="card-actions justify-end">
      {/* In Next.js 13 we don't need to wrap an anchor tag with Link component anymore! */}
      <Link href={`/products/${id}`} className="w-full btn btn-primary">
        Visit
      </Link>
    </div>
  );
}
