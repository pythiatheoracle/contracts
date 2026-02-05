import { Address } from './addresses.mjs';
export { CHAIN_ID, CONTRACT_INFO, ChainId, ContractInfo, MAINNET_CONTRACTS, ProtocolContracts, TESTNET_CONTRACTS, getContracts } from './addresses.mjs';
export { TOKENS, TOKEN_ADDRESSES, Token, TokenSymbol, formatTokenAmount, getToken, getTokenByAddress, getTokenDecimals, getTokenSymbol, getTokensByCategory, parseTokenAmount } from './tokens.mjs';
export { ERC20_ABI, FACTORY_ABI, GROUP_ABI, INCENTIVE_POOL_ABI, INSURANCE_POOL_ABI, ROUTER_ABI, USER_DATA_STORAGE_ABI, WORLD_ID_VERIFIER_ABI } from './abis.mjs';

declare enum GroupStatus {
    COMMIT_PHASE = 0,
    ACTIVE = 1,
    COMPLETED = 2,
    FAILED = 3
}
declare enum MemberStatus {
    PENDING = 0,
    COMMITTED = 1,
    ACTIVE = 2,
    DEFAULTED = 3,
    COMPLETED = 4
}
declare enum VerificationLevel {
    DEVICE = 0,// Phone/device verification (off-chain only on World Chain)
    ORB = 1
}
declare enum PayoutOrder {
    FIFO = 0,// Position = commit order
    RANDOM = 1
}

interface GroupInfo {
    address: Address;
    name: string;
    status: GroupStatus;
    currentEpoch: number;
    memberCount: number;
    committedCount: number;
    activeCount: number;
    contributionAmount: bigint;
    tokenAddress: Address;
    tokenSymbol: string;
    collateralPercent: number;
    escrowPercent: number;
    frequencyDays: number;
    commitDeadline: Date;
    requiredCollateral: bigint;
    isInsured: boolean;
    insuranceRateBps: number;
}
interface MemberInfo {
    address: Address;
    status: MemberStatus;
    position: number;
    collateralDeposited: bigint;
    escrowBalance: bigint;
    escrowReleaseTime: Date | null;
    totalContributed: bigint;
    hasReceivedPayout: boolean;
    committedAt: Date | null;
}
interface UserReputation {
    completedCycles: number;
    defaultCount: number;
    totalVolumeContributed: bigint;
    firstParticipation: Date | null;
    isBanned: boolean;
}
interface EpochInfo {
    epoch: number;
    recipient: Address;
    epochStart: Date;
    epochEnd: Date;
    gracePeriodEnd: Date;
    paymentsMade: number;
    paymentsExpected: number;
}
interface InsurancePoolStats {
    balance: bigint;
    totalDeposits: bigint;
    totalClaimed: bigint;
    pendingClaims: bigint;
    rateBps: number;
    isSupported: boolean;
}
interface ContributionBreakdown {
    total: bigint;
    netToRecipient: bigint;
    toInsurance: bigint;
}

export { Address, type ContributionBreakdown, type EpochInfo, type GroupInfo, GroupStatus, type InsurancePoolStats, type MemberInfo, MemberStatus, PayoutOrder, type UserReputation, VerificationLevel };
