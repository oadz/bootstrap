import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

import { store } from "../store/store";
import { Provider } from "react-redux"; //มาครอบเพื่อส่งข้อมูลจาก store เข้า component
import "sweetalert2/src/sweetalert2.scss";
import { useEffect } from "react";
import Layout from "../../components/layouts/Layout";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
