import React from "react";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'

import { ToastsProvider } from "contexts/ToastsContext";

function getLibrary(provider) {
  return new Web3(provider);
}

export default function Providers({ children }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ToastsProvider>{children}</ToastsProvider>
    </Web3ReactProvider>
  );
}
