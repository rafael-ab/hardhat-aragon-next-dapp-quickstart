const Contract = artifacts.require("Contract");
const { assert, web3 } = require("hardhat");

contract("Contract", ([owner, ...accounts]) => {
  let contract;

  beforeEach(async () => {
    contract = await Contract.new();
  });

  it("deploys a contract", () => {
    assert.ok(contract.address);
  });

  it("contract should greets", async () => {
    assert.equal("Hello, World!", await contract.greet());
  });
});
