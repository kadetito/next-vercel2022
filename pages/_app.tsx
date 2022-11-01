import { AppProps } from "next/app";

import "../styles/globals.css";

type NextPageWithLayout = any & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);
  // return <Component {...pageProps} />;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
