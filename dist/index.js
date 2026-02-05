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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CONTRACT_INFO: () => CONTRACT_INFO,
  ERC20_ABI: () => ERC20_ABI,
  FACTORY_ABI: () => FACTORY_ABI,
  GROUP_ABI: () => GROUP_ABI,
  GroupStatus: () => GroupStatus,
  INCENTIVE_POOL_ABI: () => INCENTIVE_POOL_ABI,
  INSURANCE_POOL_ABI: () => INSURANCE_POOL_ABI,
  MAINNET_CONTRACTS: () => MAINNET_CONTRACTS,
  MemberStatus: () => MemberStatus,
  PayoutOrder: () => PayoutOrder,
  ROUTER_ABI: () => ROUTER_ABI,
  TESTNET_CONTRACTS: () => TESTNET_CONTRACTS,
  TOKENS: () => TOKENS,
  TOKEN_ADDRESSES: () => TOKEN_ADDRESSES,
  USER_DATA_STORAGE_ABI: () => USER_DATA_STORAGE_ABI,
  VerificationLevel: () => VerificationLevel,
  WORLD_ID_VERIFIER_ABI: () => WORLD_ID_VERIFIER_ABI,
  formatTokenAmount: () => formatTokenAmount,
  getContracts: () => getContracts,
  getToken: () => getToken,
  getTokenByAddress: () => getTokenByAddress,
  getTokenDecimals: () => getTokenDecimals,
  getTokenSymbol: () => getTokenSymbol,
  getTokensByCategory: () => getTokensByCategory,
  parseTokenAmount: () => parseTokenAmount
});
module.exports = __toCommonJS(index_exports);

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

// src/tokens.ts
var TOKEN_ADDRESSES = {
  // Stablecoins - USD
  USDC: "0x79A02482A880bCE3F13e09Da970dC34db4CD24d1",
  // Stablecoins - EUR
  EURC: "0x1C60ba0A0eD1019e8Eb035E6daF4155A5cE2380B",
  // LATAM Stablecoins (Ripio)
  wARS: "0x0DC4F92879B7670e5f4e4e6e3c801D229129D90D",
  wBRL: "0xD76f5Faf6888e24D9F04Bf92a0c8B921FE4390e0",
  wCLP: "0x6a73D28E38E6F9568F4AdF49b460417Bca469651",
  wCOP: "0x8a1D45e102e886510e891d2Ec656a708991e2D76",
  wMXN: "0x337E7456B420bD3481e7FA61fA9850343d610d34",
  wPEN: "0x4f4EB5B64C38dBF0e596629b5aE43eDE1BfF2eBE",
  // Native Tokens
  WLD: "0x2cFc85d8E48F8EAB294be644d9E25C3030863003",
  WETH: "0x4200000000000000000000000000000000000006"
};
var TOKENS = [
  // Stablecoins - USD
  {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    address: TOKEN_ADDRESSES.USDC,
    category: "stablecoin-usd"
  },
  // Stablecoins - EUR
  {
    symbol: "EURC",
    name: "Euro Coin",
    decimals: 6,
    address: TOKEN_ADDRESSES.EURC,
    category: "stablecoin-eur"
  },
  // LATAM Stablecoins (Ripio)
  {
    symbol: "wARS",
    name: "Wrapped Argentine Peso",
    decimals: 18,
    address: TOKEN_ADDRESSES.wARS,
    category: "stablecoin-latam"
  },
  {
    symbol: "wBRL",
    name: "Wrapped Brazilian Real",
    decimals: 18,
    address: TOKEN_ADDRESSES.wBRL,
    category: "stablecoin-latam"
  },
  {
    symbol: "wCLP",
    name: "Wrapped Chilean Peso",
    decimals: 18,
    address: TOKEN_ADDRESSES.wCLP,
    category: "stablecoin-latam"
  },
  {
    symbol: "wCOP",
    name: "Wrapped Colombian Peso",
    decimals: 18,
    address: TOKEN_ADDRESSES.wCOP,
    category: "stablecoin-latam"
  },
  {
    symbol: "wMXN",
    name: "Wrapped Mexican Peso",
    decimals: 18,
    address: TOKEN_ADDRESSES.wMXN,
    category: "stablecoin-latam"
  },
  {
    symbol: "wPEN",
    name: "Wrapped Peruvian Sol",
    decimals: 18,
    address: TOKEN_ADDRESSES.wPEN,
    category: "stablecoin-latam"
  },
  // Native Tokens
  {
    symbol: "WLD",
    name: "Worldcoin",
    decimals: 18,
    address: TOKEN_ADDRESSES.WLD,
    category: "native"
  },
  {
    symbol: "WETH",
    name: "Wrapped ETH",
    decimals: 18,
    address: TOKEN_ADDRESSES.WETH,
    category: "native"
  }
];
function getToken(symbol) {
  const token = TOKENS.find((t) => t.symbol === symbol);
  if (!token) throw new Error(`Unknown token: ${symbol}`);
  return token;
}
function getTokenByAddress(address) {
  return TOKENS.find((t) => t.address.toLowerCase() === address.toLowerCase());
}
function getTokenSymbol(address) {
  const token = getTokenByAddress(address);
  return token?.symbol ?? "UNKNOWN";
}
function getTokenDecimals(address) {
  const token = getTokenByAddress(address);
  return token?.decimals ?? 18;
}
function getTokensByCategory(category) {
  return TOKENS.filter((t) => t.category === category);
}
function formatTokenAmount(amount, address) {
  const token = getTokenByAddress(address);
  const decimals = token?.decimals ?? 18;
  const symbol = token?.symbol ?? "TOKEN";
  const value = Number(amount) / Math.pow(10, decimals);
  if (symbol === "USDC" || symbol === "EURC") {
    return `$${value.toFixed(2)}`;
  }
  return `${value.toFixed(decimals <= 6 ? 2 : 4)} ${symbol}`;
}
function parseTokenAmount(amount, symbol) {
  const token = getToken(symbol);
  return BigInt(Math.floor(amount * Math.pow(10, token.decimals)));
}

// src/abis.ts
var FACTORY_ABI = [
  // View functions
  "function getAllGroups() view returns (address[])",
  "function totalGroups() view returns (uint256)",
  "function allGroups(uint256 index) view returns (address)",
  "function isValidGroup(address group) view returns (bool)",
  "function isTokenAllowed(address token) view returns (bool)",
  "function allowedTokens(address token) view returns (bool)",
  "function minGroupSize() view returns (uint8)",
  "function maxGroupSize() view returns (uint8)",
  "function unbanFeeMultiplierBps() view returns (uint256)",
  "function admin() view returns (address)",
  "function pendingAdmin() view returns (address)",
  "function incentivePool() view returns (address)",
  "function insurancePool() view returns (address)",
  "function router() view returns (address)",
  // User data (delegates to UserDataStorage)
  "function getUserReputation(address user) view returns (uint32 completedCycles, uint32 defaultCount, uint64 totalVolumeContributed, uint40 firstParticipation, bool isBanned)",
  "function isVerifiedHuman(address user) view returns (bool)",
  "function meetsVerificationLevel(address user, uint8 requiredLevel) view returns (bool)",
  "function getUserVerificationLevel(address user) view returns (uint8)",
  "function getUserVerificationLevelRaw(address user) view returns (uint8)",
  "function isBanned(address user) view returns (bool)",
  "function getTotalDefaultedAmount(address user) view returns (uint256)",
  "function meetsRequirements(address user, uint32 minCompletedCycles) view returns (bool)",
  // Write functions
  "function createGroup((string name, uint8 memberCount, uint256 contributionAmount, uint32 frequencySeconds, address paymentToken, uint16 collateralPercent, uint16 escrowPercent, uint8 escrowDelayEpochs, uint32 gracePeriodSeconds, uint8 requiredVerificationLevel, bool isInsured, uint32 minCompletedCycles, uint32 maxDefaultCount, uint64 minTotalVolume, uint40 minAccountAge, uint8 payoutOrder, bool affectsReputation) config, address[] whitelist) returns (address group)",
  "function unban(address token)",
  // Admin functions
  "function setRouter(address _router)",
  "function setUnbanFeeMultiplier(uint256 _multiplierBps)",
  "function setGroupSizeLimits(uint8 _minSize, uint8 _maxSize)",
  "function addAllowedToken(address token)",
  "function removeAllowedToken(address token)",
  "function transferAdmin(address _newAdmin)",
  "function acceptAdmin()",
  "function cancelAdminTransfer()",
  // Events
  "event GroupCreated(address indexed group, address indexed creator, uint8 memberCount, uint256 contributionAmount, address token)",
  "event UserBannedEvent(address indexed user, uint32 defaultCount)",
  "event UserUnbanned(address indexed user, uint256 feePaid)",
  "event CycleCompleted(address indexed user, address indexed group, uint256 volume)",
  "event DefaultRecorded(address indexed user, address indexed group)",
  "event TokenAllowlistUpdated(address indexed token, bool allowed)",
  "event RouterSet(address indexed router)",
  "event AdminTransferInitiated(address indexed currentAdmin, address indexed pendingAdmin)",
  "event AdminTransferCompleted(address indexed oldAdmin, address indexed newAdmin)",
  "event GroupSizeLimitsUpdated(uint8 newMinSize, uint8 newMaxSize)"
];
var ROUTER_ABI = [
  // View functions
  "function factory() view returns (address)",
  "function getGroupStatus(address group) view returns (uint8)",
  "function getRequiredCollateral(address group) view returns (uint256)",
  "function getContributionAmount(address group) view returns (uint256)",
  "function isWhitelisted(address group, address user) view returns (bool)",
  "function getCurrentEpoch(address group) view returns (uint8)",
  "function hasContributed(address group, address user) view returns (bool)",
  // Write functions (standard)
  "function commit(address group)",
  "function contribute(address group, uint8 expectedEpoch)",
  "function withdrawCollateral(address group)",
  "function claimEscrow(address group)",
  "function leaveGroup(address group)",
  // Write functions (FromBalance - MiniKit Pay flow)
  "function commitFromBalance(address group, address user)",
  "function contributeFromBalance(address group, address user, uint8 expectedEpoch)",
  // Events
  "event CommitRouted(address indexed group, address indexed user)",
  "event ContributionRouted(address indexed group, address indexed user, uint256 amount)",
  "event WithdrawRouted(address indexed group, address indexed user)"
];
var GROUP_ABI = [
  // Basic info
  "function name() view returns (string)",
  "function status() view returns (uint8)",
  "function currentEpoch() view returns (uint8)",
  // Member counts
  "function memberCount() view returns (uint8)",
  "function committedCount() view returns (uint8)",
  "function activeCount() view returns (uint8)",
  // Financial params
  "function contributionAmount() view returns (uint256)",
  "function paymentToken() view returns (address)",
  "function collateralPercent() view returns (uint16)",
  "function escrowPercent() view returns (uint16)",
  "function escrowDelayEpochs() view returns (uint8)",
  "function requiredCollateral() view returns (uint256)",
  "function expectedPayout() view returns (uint256)",
  // Timing
  "function frequencySeconds() view returns (uint32)",
  "function commitDeadline() view returns (uint256)",
  "function startTime() view returns (uint256)",
  "function gracePeriodSeconds() view returns (uint32)",
  // Insurance
  "function isInsured() view returns (bool)",
  "function insuranceRateBps() view returns (uint256)",
  // Reputation requirements
  "function requiredVerificationLevel() view returns (uint8)",
  "function affectsReputation() view returns (bool)",
  "function payoutOrder() view returns (uint8)",
  // Members
  "function getAllMembers() view returns (address[])",
  "function getMember(address) view returns (address addr, uint8 status, uint8 position, uint256 collateralDeposited, uint256 escrowBalance, uint256 escrowReleaseTime, uint256 totalContributed, bool hasReceivedPayout, uint40 committedAt)",
  "function isWhitelisted(address) view returns (bool)",
  "function hasContributedInEpoch(address user, uint8 epoch) view returns (bool)",
  // Aggregated views
  "function getEpochInfo() view returns (uint8 epoch, address recipient, uint256 epochStart, uint256 epochEnd, uint256 gracePeriodEnd, uint8 paymentsMade, uint8 paymentsExpected)",
  "function getGroupSummary() view returns (uint8 currentStatus, uint8 committed, uint8 active, uint8 epoch, uint256 localInsurance, uint256 collateralHeld, uint256 escrowHeld, bool insured)",
  "function getContributionBreakdown() view returns (uint256 total, uint256 netToRecipient, uint256 toInsurance)",
  // Write functions
  "function commit()",
  "function commitFor(address user)",
  "function contribute(uint8 expectedEpoch)",
  "function contributeFor(address user, uint8 expectedEpoch)",
  "function finalizeCommitPhase()",
  "function finalizeCycle()",
  "function claimEscrow()",
  "function claimEscrowFor(address user)",
  "function claimCollateral()",
  "function withdrawCollateralFor(address user)",
  "function refundCollateral()",
  "function leave()",
  "function leaveFor(address user)",
  // Events
  "event MemberCommitted(address indexed member, uint8 position, uint256 collateral)",
  "event GroupActivated(uint256 startTime, uint8 totalMembers)",
  "event GroupFailed_Event()",
  "event Contribution(address indexed from, address indexed to, uint256 amount, uint8 epoch)",
  "event PayoutClaimed(address indexed member, uint256 immediateAmount, uint256 escrowAmount)",
  "event EscrowReleased(address indexed member, uint256 amount)",
  "event CollateralReturned(address indexed member, uint256 amount)",
  "event CollateralSlashed(address indexed member, uint256 amount)",
  "event MemberDefaultedEvent(address indexed member, uint8 epoch)",
  "event InsurancePayout(address indexed victim, uint256 amount)",
  "event CycleCompleted()",
  "event EpochAdvanced(uint8 fromEpoch, uint8 toEpoch)"
];
var INSURANCE_POOL_ABI = [
  // View functions
  "function admin() view returns (address)",
  "function factory() view returns (address)",
  "function isFrozen() view returns (bool)",
  "function getInsuranceRate(address token) view returns (uint256)",
  "function getBalance(address token) view returns (uint256)",
  "function getPendingClaim(address token, address user) view returns (uint256)",
  "function getTokenStats(address token) view returns (uint256 balance, uint256 deposits, uint256 claimed, uint256 pending, uint256 rateBps, bool isSupported)",
  "function getSupportedTokens() view returns (address[])",
  "function getTokenCount() view returns (uint256)",
  "function isTokenSupported(address token) view returns (bool)",
  "function calculateInsurance(address token, uint256 contributionAmount) view returns (uint256)",
  // Write functions
  "function claimPending(address token) returns (uint256 paid)",
  // Admin functions
  "function addToken(address token, uint256 rateBps)",
  "function setInsuranceRate(address token, uint256 newRateBps)",
  "function freeze()",
  "function unfreeze()",
  "function transferAdmin(address _newAdmin)",
  "function acceptAdmin()",
  "function cancelAdminTransfer()",
  "function adminWithdraw(address token, address to, uint256 amount)",
  // Events
  "event Deposited(address indexed group, address indexed token, uint256 amount)",
  "event PendingClaimPaid(address indexed victim, address indexed token, uint256 amount)",
  "event AdminTransferCompleted(address indexed oldAdmin, address indexed newAdmin)",
  "event FactorySet(address indexed factory)",
  "event TokenAdded(address indexed token, uint256 rateBps)",
  "event RateUpdated(address indexed token, uint256 oldRate, uint256 newRate)",
  "event Frozen(address indexed by)",
  "event Unfrozen(address indexed by)"
];
var INCENTIVE_POOL_ABI = [
  // View functions
  "function factory() view returns (address)",
  "function paymentToken() view returns (address)",
  "function bonusRateBps() view returns (uint256)",
  "function pendingBonus(address user) view returns (uint256)",
  "function totalPendingBonuses() view returns (uint256)",
  "function totalDistributed() view returns (uint256)",
  "function totalGrantsReceived() view returns (uint256)",
  "function getPoolStats() view returns (uint256 balance, uint256 pending, uint256 distributed, uint256 grantsReceived, uint256 currentRateBps)",
  "function calculatePotentialBonus(uint256 volumeContributed) view returns (uint256)",
  "function getAvailableBalance() view returns (uint256)",
  // Write functions
  "function claimBonus()",
  "function depositGrant(uint256 amount)",
  // Admin functions
  "function setBonusRate(uint256 newRateBps)",
  "function setFactory(address newFactory)",
  "function emergencyWithdraw(address token, address to, uint256 amount)",
  "function initiateControlTransfer(address newAdmin)",
  "function acceptControlTransfer()",
  "function cancelControlTransfer()",
  // Events
  "event GrantDeposited(address indexed donor, uint256 amount)",
  "event BonusRateUpdated(uint256 oldRate, uint256 newRate)",
  "event BonusRecorded(address indexed user, uint256 amount, uint256 volumeContributed)",
  "event BonusClaimed(address indexed user, uint256 amount)",
  "event ControlTransferCompleted(address indexed oldAdmin, address indexed newAdmin)"
];
var USER_DATA_STORAGE_ABI = [
  // View functions
  "function admin() view returns (address)",
  "function pendingAdmin() view returns (address)",
  "function maxDefaultsBeforeBan() view returns (uint32)",
  "function getUserReputation(address user) view returns (uint32 completedCycles, uint32 defaultCount, uint64 totalVolumeContributed, uint40 firstParticipation, bool isBanned)",
  "function isVerifiedHuman(address user) view returns (bool)",
  "function getVerificationLevel(address user) view returns (uint8)",
  "function getTotalDefaultedAmount(address user) view returns (uint256)",
  "function isNullifierUsed(uint8 level, uint256 nullifierHash) view returns (bool)",
  "function isBanned(address user) view returns (bool)",
  "function meetsVerificationLevel(address user, uint8 requiredLevel) view returns (bool)",
  "function isAuthorizedWriter(address writer) view returns (bool)",
  // Admin functions
  "function addAuthorizedWriter(address writer)",
  "function removeAuthorizedWriter(address writer)",
  "function setMaxDefaultsBeforeBan(uint32 _maxDefaults)",
  "function transferAdmin(address newAdmin)",
  "function acceptAdmin()",
  "function cancelAdminTransfer()",
  // Events
  "event UserVerified(address indexed user, uint8 level, uint256 nullifierHash)",
  "event CycleCompleted(address indexed user, uint256 volumeContributed)",
  "event DefaultRecorded(address indexed user, uint256 amount, uint32 totalDefaults)",
  "event UserBanned(address indexed user, uint32 defaultCount)",
  "event UserUnbanned(address indexed user)",
  "event FirstParticipationRecorded(address indexed user, uint40 timestamp)",
  "event WriterAdded(address indexed writer)",
  "event WriterRemoved(address indexed writer)",
  "event MaxDefaultsBeforeBanUpdated(uint32 oldValue, uint32 newValue)",
  "event AdminTransferCompleted(address indexed oldAdmin, address indexed newAdmin)"
];
var WORLD_ID_VERIFIER_ABI = [
  // View functions
  "function worldId() view returns (address)",
  "function externalNullifier() view returns (uint256)",
  "function userDataStorage() view returns (address)",
  "function isVerifiedHuman(address user) view returns (bool)",
  "function meetsVerificationLevel(address user, uint8 requiredLevel) view returns (bool)",
  "function getUserVerificationLevel(address user) view returns (uint8)",
  // Write functions
  "function verifyHuman(uint8 level, uint256 root, uint256 nullifierHash, uint256[8] proof)",
  // Events
  "event HumanVerified(address indexed user, uint256 indexed nullifierHash, uint8 level)"
];
var ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)"
];

// src/index.ts
var GroupStatus = /* @__PURE__ */ ((GroupStatus2) => {
  GroupStatus2[GroupStatus2["COMMIT_PHASE"] = 0] = "COMMIT_PHASE";
  GroupStatus2[GroupStatus2["ACTIVE"] = 1] = "ACTIVE";
  GroupStatus2[GroupStatus2["COMPLETED"] = 2] = "COMPLETED";
  GroupStatus2[GroupStatus2["FAILED"] = 3] = "FAILED";
  return GroupStatus2;
})(GroupStatus || {});
var MemberStatus = /* @__PURE__ */ ((MemberStatus2) => {
  MemberStatus2[MemberStatus2["PENDING"] = 0] = "PENDING";
  MemberStatus2[MemberStatus2["COMMITTED"] = 1] = "COMMITTED";
  MemberStatus2[MemberStatus2["ACTIVE"] = 2] = "ACTIVE";
  MemberStatus2[MemberStatus2["DEFAULTED"] = 3] = "DEFAULTED";
  MemberStatus2[MemberStatus2["COMPLETED"] = 4] = "COMPLETED";
  return MemberStatus2;
})(MemberStatus || {});
var VerificationLevel = /* @__PURE__ */ ((VerificationLevel2) => {
  VerificationLevel2[VerificationLevel2["DEVICE"] = 0] = "DEVICE";
  VerificationLevel2[VerificationLevel2["ORB"] = 1] = "ORB";
  return VerificationLevel2;
})(VerificationLevel || {});
var PayoutOrder = /* @__PURE__ */ ((PayoutOrder2) => {
  PayoutOrder2[PayoutOrder2["FIFO"] = 0] = "FIFO";
  PayoutOrder2[PayoutOrder2["RANDOM"] = 1] = "RANDOM";
  return PayoutOrder2;
})(PayoutOrder || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CONTRACT_INFO,
  ERC20_ABI,
  FACTORY_ABI,
  GROUP_ABI,
  GroupStatus,
  INCENTIVE_POOL_ABI,
  INSURANCE_POOL_ABI,
  MAINNET_CONTRACTS,
  MemberStatus,
  PayoutOrder,
  ROUTER_ABI,
  TESTNET_CONTRACTS,
  TOKENS,
  TOKEN_ADDRESSES,
  USER_DATA_STORAGE_ABI,
  VerificationLevel,
  WORLD_ID_VERIFIER_ABI,
  formatTokenAmount,
  getContracts,
  getToken,
  getTokenByAddress,
  getTokenDecimals,
  getTokenSymbol,
  getTokensByCategory,
  parseTokenAmount
});
