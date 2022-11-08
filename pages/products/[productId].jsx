import Image from "next/image";
import Layout from "src/components/Template/MainLayout";
import { calculatePrice } from "src/helpers/typography";

export default function ProductPage({ product }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };
  return (
    <Layout title={product.title} description={product.description}>
      <div className="xl:h-screen flex flex-wrap xl:flex-nowrap gap-4">
        <div className="relative w-full xl:min-w-96 xl:max-w-xs h-[500px] xl:h-screen bg-gradient-to-t from-primary to-primary/60">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:left-1/2 xl:w-52 xl:h-52">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              priority
              className="object-contain"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="p-4 flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl text-base-content/80 font-bold">
              {product.title}
            </h1>
            <div className="badge badge-primary italic font-semibold">
              {product.discountRate}%
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-base-content/50 italic font-semibold">
              {product.category}
            </p>
            <div className="flex flex-col">
              <div className="flex">
                <RatingBar rate={product.rating.rate} />
                <span className="ml-1 text-primary/50">
                  {product.rating.count}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <del className="text-lg font-semibold text-base-content/40">
              ${product.price}
            </del>
            <ins className="text-xl font-bold text-primary no-underline">
              ${product.discountedPrice}
            </ins>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase font-semibold mt-2">Description</h2>
            <p className="text-base-content/50 text-sm">
              {product.description}
            </p>
          </div>
          <div className="w-full flex justify-between mt-4">
            <button className="btn btn-primary uppercase">Add to card</button>
            <button className="btn btn-ghost" onClick={copyToClipboard}>
              Share
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function RatingBar({ rate }) {
  const cieledRate = Math.ceil(rate);

  return Array(5)
    .fill(0)
    .map((_, idx) => (
      <span
        key={idx}
        className={
          cieledRate >= idx + 1 ? "text-primary" : "text-base-content/20"
        }
      >
        &#9733;
      </span>
    ));
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
