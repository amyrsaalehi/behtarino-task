import Head from "next/head";
import SwapTheme from "src/components/Atoms/SwapTheme";

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
      <div className="rounded-full bg-base-300 fixed bottom-5 right-5 md:bottom-10 md:right-10">
        <SwapTheme />
      </div>
    </>
  );
}
