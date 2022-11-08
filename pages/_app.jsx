import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <NextNProgress
        color="#570DF8"
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
