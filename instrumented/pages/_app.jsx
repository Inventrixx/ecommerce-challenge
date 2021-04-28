import React from "react";
import "../styles/css/SearchBox.css";
import "../styles/css/BreadCrumbs.css";
import "../styles/css/ProductsIndex.css";
import "../styles/css/ProductsList.css";
import "../styles/css/ProductDetail.css";
import "../styles/css/main.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
