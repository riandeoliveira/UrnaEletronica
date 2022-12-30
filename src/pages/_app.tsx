import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Urna Eletronica</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
