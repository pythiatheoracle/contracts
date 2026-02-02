// src/addresses.ts
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

export {
  CHAIN_ID,
  MAINNET_CONTRACTS,
  TESTNET_CONTRACTS,
  getContracts,
  CONTRACT_INFO
};
