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
  FACTORY: "0x16795eEE495a07fc4FE94b9f5541F5aB4622DB5b",
  ROUTER: "0xf3D8ABEABd1bFD02b0D2bf3017ada00ebC6cC4Cc",
  INCENTIVE_POOL: "0x0cCe743998492fB42A5Fc495769360B4011510e7",
  INSURANCE_POOL: "0x6C467EC0B19bb76b0baCDC44F04dDCFFF48E4730"
};
var TESTNET_CONTRACTS = {
  FACTORY: "0x0000000000000000000000000000000000000000",
  ROUTER: "0x0000000000000000000000000000000000000000",
  INCENTIVE_POOL: "0x0000000000000000000000000000000000000000",
  INSURANCE_POOL: "0x0000000000000000000000000000000000000000"
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
    description: "Creates groups, tracks reputation, manages World ID verification",
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
