import ProductDetailsImage from "src/components/Atoms/ProductDetailsImage";
import ProductDetailsInfo from "src/components/Organisms/ProductDetailsInfo";
import Layout from "src/components/Template/MainLayout";
import { calculatePrice } from "src/helpers/typography";

export default function ProductPage({ product }) {
  return (
    <Layout title={product.title} description={product.description}>
      <main className="xl:h-screen flex flex-wrap xl:flex-nowrap gap-4">
        <ProductDetailsImage image={product.image} title={product.title} />
        <ProductDetailsInfo product={product} />
      </main>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const productId = ctx.params.productId;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await res.json();

    const { discountRate, discountedPrice } = calculatePrice(product.price);

    return {
      props: {
        product: {
          ...product,
          discountRate,
          discountedPrice,
        },
      },
      revalidate: 10,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/",
      },
      revalidate: 10,
    };
  }
}

export async function getStaticPaths(ctx) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    const paths = products.map((product) => ({
      params: { productId: product.id.toString() },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (err) {
    console.error(err);

    return {
      paths: [],
      fallback: "blocking",
    };
  }
}
