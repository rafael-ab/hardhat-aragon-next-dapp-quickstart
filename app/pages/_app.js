import React from "react";
import { Main } from "@aragon/ui";

import Providers from "components/Providers";
import Navbar from "components/Navbar";

export default function App({ Component, pageProps }) {

  return (
    <Providers>
      <Main layout={false}>
        <Navbar />
        <div
          style={{
            padding: "0 2em"
          }}>
          <Component {...pageProps} />
        </div>
      </Main>
    </Providers>
  );
}
