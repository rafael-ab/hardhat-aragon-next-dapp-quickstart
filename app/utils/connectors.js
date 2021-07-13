import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { AuthereumConnector } from "@web3-react/authereum-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const walletconnect = new WalletConnectConnector({
  rpc: {
    1: "https://eth-mainnet.alchemyapi.io/v2/pcLUGBuSyhP-DPtSzafQQp8htsX_WYni",
  },
  qrcode: true,
});

const authereum = new AuthereumConnector({ chainId: 1 });

export const connectorsByName = {
  Injected: injected,
  WalletConnect: walletconnect,
  Authereum: authereum,
};
