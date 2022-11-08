import Head from "next/head";

export default function Layout({
  title = "",
  description = "Behtarino Task Demo",
  children,
}) {
  return (
    <>
      <Head>
        <title>{title && `${title} | `}Behtarino</title>
        <meta name="description" content={description} />
      </Head>
      <main>{children}</main>
    </>
  );
}
