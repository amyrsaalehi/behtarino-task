import Head from "next/head";

export default function MainLayout({
  title = "",
  description = "Behtarino Task Demo",
  children,
}) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Behtarino` : "Behtarino"}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
}
