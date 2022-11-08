import NextNProgress from "nextjs-progressbar";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#570DF8"
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
