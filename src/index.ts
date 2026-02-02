// ═══════════════════════════════════════════════════════════════════════════
// @rosca/contracts
// ROSCA Protocol smart contract addresses, ABIs, and types for World Chain
// ═══════════════════════════════════════════════════════════════════════════

// Re-export everything
export * from './addresses'
export * from './tokens'
export * from './abis'

// ═══════════════════════════════════════════════════════════════════════════
// Enums
// ═══════════════════════════════════════════════════════════════════════════

export enum GroupStatus {
  COMMIT_PHASE = 0,
  ACTIVE = 1,
  COMPLETED = 2,
  FAILED = 3,
}

export enum MemberStatus {
  PENDING = 0,
  COMMITTED = 1,
  ACTIVE = 2,
  DEFAULTED = 3,
  COMPLETED = 4,
}

export enum VerificationLevel {
  NONE = 0,
  ORB = 1,
  PHONE = 2,
}

export enum PositionMode {
  FCFS = 0,        // First Come First Serve
  RANDOM = 1,      // Random assignment at start
  AUCTION = 2,     // Bid for positions
  PRESET = 3,      // Creator sets positions
}

// ═══════════════════════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════════════════════

import type { Address } from './addresses'

export interface GroupInfo {
  address: Address
  name: string
  status: GroupStatus
  currentEpoch: number
  memberCount: number
  committedCount: number
  activeCount: number
  contributionAmount: bigint
  tokenAddress: Address
  tokenSymbol: string
  collateralPercent: number
  escrowPercent: number
  frequencyDays: number
  commitDeadline: Date
  requiredCollateral: bigint
  isInsured: boolean
  insuranceRateBps: number
}

export interface MemberInfo {
  address: Address
  status: MemberStatus
  position: number
  collateralDeposited: bigint
  escrowBalance: bigint
  escrowReleaseTime: Date | null
  totalContributed: bigint
  hasReceivedPayout: boolean
  committedAt: Date | null
}

export interface UserReputation {
  completedCycles: number
  defaultCount: number
  totalVolume: bigint
  lastActivity: Date | null
  isBanned: boolean
}

export interface EpochInfo {
  epoch: number
  recipient: Address
  epochStart: Date
  epochEnd: Date
  gracePeriodEnd: Date
  paymentsMade: number
  paymentsExpected: number
}

export interface InsurancePoolStats {
  balance: bigint
  totalDeposits: bigint
  totalClaimed: bigint
  pendingClaims: bigint
  rateBps: number
  isSupported: boolean
}

export interface ContributionBreakdown {
  total: bigint
  netToRecipient: bigint
  toInsurance: bigint
}
