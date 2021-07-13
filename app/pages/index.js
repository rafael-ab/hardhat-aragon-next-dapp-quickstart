import React, { useState, useEffect } from "react";
import {
  TokenAmount,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Text,
} from "@aragon/ui";

import useAuth from "hooks/useAuth";

import { useTokenBalance, useEtherBalance } from "hooks/useBalance";

import { daiAddress, tetherAddress } from "config/constants";

export default function Home() {
  const [daiBalance, setDaiBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [etherBalance, setEtherBalance] = useState(0);
  const { account } = useAuth();

  const balanceDai = useTokenBalance(daiAddress);
  const balanceUsdt = useTokenBalance(tetherAddress);
  const balanceEther = useEtherBalance();

  useEffect(async () => {
    if (account) {
      setUsdtBalance(balanceUsdt);
      setDaiBalance(balanceDai);
      setEtherBalance(balanceEther);
    }
  }, [account, balanceDai, balanceUsdt, balanceEther]);

  return (
    <>
      {account ? (
        <>
          <Text>Hello, World! {account}!</Text>
          <Table
            style={{
              marginTop: "2em",
            }}
            header={
              <TableRow>
                <TableHeader title="Balances" />
              </TableRow>
            }
          >
            <TableRow>
              <TableCell>
                <Text>Ether</Text>
              </TableCell>
              <TableCell>
                <TokenAmount
                  address="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
                  amount={etherBalance}
                  decimals={18}
                  digits={18}
                  symbol="ETH"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text>DAI</Text>
              </TableCell>
              <TableCell>
                <TokenAmount
                  address={daiAddress}
                  amount={daiBalance}
                  decimals={18}
                  digits={18}
                  symbol="DAI"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text>USDT</Text>
              </TableCell>
              <TableCell>
                <TokenAmount
                  address={tetherAddress}
                  amount={usdtBalance}
                  decimals={18}
                  digits={18}
                  symbol="USDT"
                />
              </TableCell>
            </TableRow>
          </Table>
        </>
      ) : (
        <div>Hello, there! Connect to a wallet!</div>
      )}
    </>
  );
}
