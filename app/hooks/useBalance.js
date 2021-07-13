import { useMemo, useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";

import useWeb3Provider from "hooks/useWeb3Provider";
import { useERC20 } from "hooks/useContract";

export const useEtherBalance = () => {
  const provider = useWeb3Provider();
  const [balance, setBalance] = useState(0);
  const { account } = useWeb3React();

  useEffect(() => {
    const fetchBalance = async () => {
      const walletBalance = await provider.eth.getBalance(account);
      setBalance(Number(walletBalance));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, provider, setBalance]);

  return balance;
};

export const useTokenBalance = (tokenAddress) => {
  const [balance, setBalance] = useState(0);
  const { account } = useWeb3React();
  const contract = useERC20(tokenAddress, account);

  const fetchBalance = async () => {
    try {
      const res = await contract.methods.balanceOf(account).call();
      setBalance(res);
    } catch (e) {
      console.error(e);
      setBalance((prev) => prev);
    }
  };

  useEffect(() => {
    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress]);

  return balance;
};
