import ProductCard from "src/components/Organisms/ProductCard";
import Layout from "src/components/Template/MainLayout";

export default function Home({ products }) {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-4 py-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

/**
 * Sample of product data:
 * {
 *  "id": 1,
 *  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
 *  "price": 109.95,
 *  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
 *  "category": "men's clothing",
 *  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
 *  "rating": {
 *    "rate": 3.9,
 *    "count": 120
 *  }
 * }
 */
