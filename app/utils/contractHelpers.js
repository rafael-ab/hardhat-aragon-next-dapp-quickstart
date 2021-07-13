import erc20Abi from "config/abis/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";

const getContract = (abi, address, web3) => {
  return new web3.eth.Contract(abi, address);
};

export const getErc20Contract = (address, web3) => {
  return getContract(erc20Abi, address, web3);
};
