"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/addresses.ts
var addresses_exports = {};
__export(addresses_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CONTRACT_INFO: () => CONTRACT_INFO,
  MAINNET_CONTRACTS: () => MAINNET_CONTRACTS,
  TESTNET_CONTRACTS: () => TESTNET_CONTRACTS,
  getContracts: () => getContracts
});
module.exports = __toCommonJS(addresses_exports);
var CHAIN_ID = {
  WORLDCHAIN_MAINNET: 480,
  WORLDCHAIN_TESTNET: 4801
};
var MAINNET_CONTRACTS = {
  FACTORY: "0x2a1bf876180765D083C49b9Ad595a8542715ceb1",
  ROUTER: "0x4a3D3Dbf36a845Bfa6a908e5A4fE1E226bc2645c",
  INCENTIVE_POOL: "0x7Ada45cf360Ce92Ace5765d5426075dB1d15Ac39",
  INSURANCE_POOL: "0xB45CA7A8637984f843465bbdD9782f11bB555364",
  USER_DATA_STORAGE: "0x89c00F79d4C5E594787c0F7cAF6F250e2142342B",
  WORLD_ID_VERIFIER: "0x26CEd0f39e318AF8669F21503c3C7b2C53278f5d",
  GROUP_DEPLOYER: "0xEb51e23478AC2e57a98525B8EB623772EBa163E7"
};
var TESTNET_CONTRACTS = {
  FACTORY: "0x0000000000000000000000000000000000000000",
  ROUTER: "0x0000000000000000000000000000000000000000",
  INCENTIVE_POOL: "0x0000000000000000000000000000000000000000",
  INSURANCE_POOL: "0x0000000000000000000000000000000000000000",
  USER_DATA_STORAGE: "0x0000000000000000000000000000000000000000",
  WORLD_ID_VERIFIER: "0x0000000000000000000000000000000000000000",
  GROUP_DEPLOYER: "0x0000000000000000000000000000000000000000"
};
function getContracts(chainId = CHAIN_ID.WORLDCHAIN_MAINNET) {
  switch (chainId) {
    case CHAIN_ID.WORLDCHAIN_MAINNET:
      return MAINNET_CONTRACTS;
    case CHAIN_ID.WORLDCHAIN_TESTNET:
      return TESTNET_CONTRACTS;
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`);
  }
}
var CONTRACT_INFO = {
  FACTORY: {
    name: "ROSCAFactory",
    description: "Orchestrates group creation and reputation tracking",
    upgradeable: false
  },
  ROUTER: {
    name: "ROSCARouter",
    description: "Single entry point for World App MiniKit transactions",
    upgradeable: false
  },
  INCENTIVE_POOL: {
    name: "IncentivePool",
    description: "Distributes bonus grants to cycle completers (UUPS upgradeable)",
    upgradeable: true
  },
  INSURANCE_POOL: {
    name: "InsurancePool",
    description: "Manages insurance fund for group defaults",
    upgradeable: false
  },
  USER_DATA_STORAGE: {
    name: "UserDataStorage",
    description: "Eternal storage for user reputation and verification data",
    upgradeable: false
  },
  WORLD_ID_VERIFIER: {
    name: "WorldIDVerifier",
    description: "Handles World ID proof verification",
    upgradeable: false
  },
  GROUP_DEPLOYER: {
    name: "GroupDeployer",
    description: "Deploys ROSCAGroup contracts on behalf of Factory",
    upgradeable: false
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CONTRACT_INFO,
  MAINNET_CONTRACTS,
  TESTNET_CONTRACTS,
  getContracts
});
