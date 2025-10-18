import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

export function RootLayout() {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
