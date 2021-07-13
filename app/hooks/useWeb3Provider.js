import { useEffect, useState, useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const alchemyURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_MAIN_API_KEY}`;

const web3Alchemy = createAlchemyWeb3(alchemyURL);

const useWeb3Provider = () => {
  const { library } = useWeb3React();
  const refEth = useRef(library);
  const [provider, setProvider] = useState(library || web3Alchemy);

  useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library || web3Alchemy);
      refEth.current = library;
    }
  }, [library]);

  return provider;
};

export default useWeb3Provider;
