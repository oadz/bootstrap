import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {};

export default function Layout({ children }: any) {
  return (
    <div>
      <Header></Header>
      <div className="p-12 w-full h-full">
        <main style={{ minHeight: "85vh", padding: 20 }}>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
}
