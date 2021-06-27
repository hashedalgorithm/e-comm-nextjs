import type { AppProps } from "next/app";
import "../Styles/Styles.global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
