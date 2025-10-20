import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

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
