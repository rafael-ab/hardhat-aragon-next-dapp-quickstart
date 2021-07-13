export function shortenAddress(address, offset) {
  const len = address.length;
  return `${address.substring(0, offset)}...${address.substring(
    len - offset,
    len
  )}`;
}

export function getExplorerLink(address, explorer, network) {
  const whitelistedNetworks = [
    "mainnet",
    "ropsten",
    "kovan",
    "rinkeby",
    "goerli",
    "testnet",
  ];
  let explorerURL = "";

  if (!whitelistedNetworks.includes(network)) {
    throw new Error("getExplorerLink: Invalid Network");
  }

  if (explorer === "etherscan") {
    explorerURL = "etherscan.io";
  } else if (explorer === "bscscan") {
    explorerURL = "bscscan.com";
    if (network !== "mainnet" || network !== "testnet") {
      throw new Error("getExplorerLink: Invalid BSC Network");
    }
  } else {
    throw new Error("getExplorerLink: Invalid Explorer");
  }

  return `https://${
    network === "mainnet" ? "" : network + "."
  }${explorerURL}/address/${address}`;
}
