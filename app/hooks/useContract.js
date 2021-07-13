import { useMemo } from "react";
import useWeb3Provider from "hooks/useWeb3Provider";

import { daiAddress } from "config/constants";

import { getErc20Contract } from "utils/contractHelpers";

export const useERC20 = (address) => {
  const provider = useWeb3Provider();
  return useMemo(
    () => getErc20Contract(address, provider),
    [address, provider]
  );
};

export const useDaiToken = () => {
  const provider = useWeb3Provider();
  return useMemo(
    () => getErc20Contract(daiAddress, provider),
    [daiAddress, provider]
  );
};
