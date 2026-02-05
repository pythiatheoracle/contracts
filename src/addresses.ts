// ═══════════════════════════════════════════════════════════════════════════
// ROSCA Protocol Contract Addresses
// World Chain (Chain ID: 480)
// ═══════════════════════════════════════════════════════════════════════════

export type Address = `0x${string}`

export const CHAIN_ID = {
  WORLDCHAIN_MAINNET: 480,
  WORLDCHAIN_TESTNET: 4801,
} as const

export type ChainId = (typeof CHAIN_ID)[keyof typeof CHAIN_ID]

// ═══════════════════════════════════════════════════════════════════════════
// Protocol Contracts
// ═══════════════════════════════════════════════════════════════════════════

export interface ProtocolContracts {
  FACTORY: Address
  ROUTER: Address
  INCENTIVE_POOL: Address
  INSURANCE_POOL: Address
  USER_DATA_STORAGE: Address
  WORLD_ID_VERIFIER: Address
  GROUP_DEPLOYER: Address
}

export const MAINNET_CONTRACTS: ProtocolContracts = {
  FACTORY: '0x2a1bf876180765D083C49b9Ad595a8542715ceb1',
  ROUTER: '0x4a3D3Dbf36a845Bfa6a908e5A4fE1E226bc2645c',
  INCENTIVE_POOL: '0x7Ada45cf360Ce92Ace5765d5426075dB1d15Ac39',
  INSURANCE_POOL: '0xB45CA7A8637984f843465bbdD9782f11bB555364',
  USER_DATA_STORAGE: '0x89c00F79d4C5E594787c0F7cAF6F250e2142342B',
  WORLD_ID_VERIFIER: '0x26CEd0f39e318AF8669F21503c3C7b2C53278f5d',
  GROUP_DEPLOYER: '0xEb51e23478AC2e57a98525B8EB623772EBa163E7',
} as const

// Testnet addresses (placeholders - update when deployed)
export const TESTNET_CONTRACTS: ProtocolContracts = {
  FACTORY: '0x0000000000000000000000000000000000000000',
  ROUTER: '0x0000000000000000000000000000000000000000',
  INCENTIVE_POOL: '0x0000000000000000000000000000000000000000',
  INSURANCE_POOL: '0x0000000000000000000000000000000000000000',
  USER_DATA_STORAGE: '0x0000000000000000000000000000000000000000',
  WORLD_ID_VERIFIER: '0x0000000000000000000000000000000000000000',
  GROUP_DEPLOYER: '0x0000000000000000000000000000000000000000',
} as const

/**
 * Get protocol contracts for a specific chain
 */
export function getContracts(chainId: ChainId = CHAIN_ID.WORLDCHAIN_MAINNET): ProtocolContracts {
  switch (chainId) {
    case CHAIN_ID.WORLDCHAIN_MAINNET:
      return MAINNET_CONTRACTS
    case CHAIN_ID.WORLDCHAIN_TESTNET:
      return TESTNET_CONTRACTS
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`)
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Contract Metadata
// ═══════════════════════════════════════════════════════════════════════════

export interface ContractInfo {
  name: string
  address: Address
  description: string
  upgradeable: boolean
}

export const CONTRACT_INFO: Record<keyof ProtocolContracts, Omit<ContractInfo, 'address'>> = {
  FACTORY: {
    name: 'ROSCAFactory',
    description: 'Orchestrates group creation and reputation tracking',
    upgradeable: false,
  },
  ROUTER: {
    name: 'ROSCARouter',
    description: 'Single entry point for World App MiniKit transactions',
    upgradeable: false,
  },
  INCENTIVE_POOL: {
    name: 'IncentivePool',
    description: 'Distributes bonus grants to cycle completers (UUPS upgradeable)',
    upgradeable: true,
  },
  INSURANCE_POOL: {
    name: 'InsurancePool',
    description: 'Manages insurance fund for group defaults',
    upgradeable: false,
  },
  USER_DATA_STORAGE: {
    name: 'UserDataStorage',
    description: 'Eternal storage for user reputation and verification data',
    upgradeable: false,
  },
  WORLD_ID_VERIFIER: {
    name: 'WorldIDVerifier',
    description: 'Handles World ID proof verification',
    upgradeable: false,
  },
  GROUP_DEPLOYER: {
    name: 'GroupDeployer',
    description: 'Deploys ROSCAGroup contracts on behalf of Factory',
    upgradeable: false,
  },
} as const
