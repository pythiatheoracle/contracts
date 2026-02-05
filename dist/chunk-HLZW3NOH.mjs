// src/addresses.ts
var CHAIN_ID = {
  WORLDCHAIN_MAINNET: 480,
  WORLDCHAIN_TESTNET: 4801
};
var MAINNET_CONTRACTS = {
  FACTORY: "0x5142DCD24FE7e9D2a3B933fCCc6D22dd7b0D72dC",
  ROUTER: "0x2942FB98e1336d4241b5Cb40330BcA1db438A774",
  INCENTIVE_POOL: "0x2a1baf86aaDbE9cCF263F43152f2Fb3C75c7F786",
  INSURANCE_POOL: "0x253EE2C09eB2bBAc3e62D65D257b53E151CA3126",
  USER_DATA_STORAGE: "0x340e91f8f561b7355FA11227816b447211739acE",
  WORLD_ID_VERIFIER: "0x3d8e4906558A213b7493Aa73CB80A83713A5d19f",
  GROUP_DEPLOYER: "0x34222E5A2f91AA8E8e586a22952fbE3078625CD8"
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

export {
  CHAIN_ID,
  MAINNET_CONTRACTS,
  TESTNET_CONTRACTS,
  getContracts,
  CONTRACT_INFO
};
