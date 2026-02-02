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
  PositionMode: () => PositionMode,
  ROUTER_ABI: () => ROUTER_ABI,
  TESTNET_CONTRACTS: () => TESTNET_CONTRACTS,
  TOKENS: () => TOKENS,
  TOKEN_ADDRESSES: () => TOKEN_ADDRESSES,
  VerificationLevel: () => VerificationLevel,
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
  "function isValidGroup(address) view returns (bool)",
  "function getUserReputation(address) view returns (uint32 completedCycles, uint32 defaultCount, uint64 totalVolume, uint40 lastActivity, bool isBanned)",
  "function isVerifiedHuman(address) view returns (bool)",
  "function userVerificationLevel(address) view returns (uint8)",
  // Write functions
  "function createGroup((string name, uint8 capacity, uint256 contributionAmount, uint8 frequencyDays, address paymentToken, uint8 collateralPercent, uint8 escrowPercent, uint8 escrowDelayEpochs, uint8 positionMode, uint8 requiredVerification, uint8 gracePeriodDays, bool isInsured) params, address[] whitelist, uint256 commitDeadline, uint256 startTime, uint256[8] positions) returns (address)",
  // Events
  "event GroupCreated(address indexed group, address indexed creator, uint8 capacity, uint256 contributionAmount, address paymentToken)"
];
var ROUTER_ABI = [
  // Write functions
  "function commit(address group) payable",
  "function contribute(address group, uint8 expectedEpoch)",
  "function withdrawCollateral(address group)",
  "function claimEscrow(address group)",
  "function leaveGroup(address group)"
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
  "function collateralPercent() view returns (uint8)",
  "function escrowPercent() view returns (uint8)",
  "function escrowDelayEpochs() view returns (uint8)",
  "function requiredCollateral() view returns (uint256)",
  // Timing
  "function frequencySeconds() view returns (uint256)",
  "function commitDeadline() view returns (uint256)",
  "function startTime() view returns (uint256)",
  "function gracePeriodSeconds() view returns (uint256)",
  // Insurance
  "function isInsured() view returns (bool)",
  "function insuranceRateBps() view returns (uint256)",
  // Members
  "function getAllMembers() view returns (address[])",
  "function getMember(address) view returns (address wallet, uint8 status, uint8 position, uint256 collateralDeposited, uint256 escrowBalance, uint256 escrowReleaseTime, uint256 totalContributed, bool hasReceivedPayout, uint40 committedAt)",
  "function isWhitelisted(address) view returns (bool)",
  // Epoch info
  "function getEpochInfo() view returns (uint8 epoch, address recipient, uint256 epochStart, uint256 epochEnd, uint256 graceEnd, uint8 paymentsMade, uint8 paymentsExpected)",
  "function getGroupSummary() view returns (uint8 status, uint8 memberCount, uint8 committedCount, uint8 activeCount, uint256 totalCollateral, uint256 totalEscrow, uint256 totalContributed, bool isInsured)",
  "function getContributionBreakdown() view returns (uint256 total, uint256 netToRecipient, uint256 toInsurance)",
  // Events
  "event MemberJoined(address indexed member, uint8 position)",
  "event ContributionMade(address indexed member, uint8 epoch, uint256 amount)",
  "event PayoutReceived(address indexed recipient, uint8 epoch, uint256 amount)"
];
var INSURANCE_POOL_ABI = [
  // View functions
  "function getInsuranceRate(address token) view returns (uint256)",
  "function isFrozen() view returns (bool)",
  "function getBalance(address token) view returns (uint256)",
  "function getPendingClaim(address token, address user) view returns (uint256)",
  "function getTokenStats(address token) view returns (uint256 balance, uint256 totalDeposits, uint256 totalClaimed, uint256 pendingClaims, uint256 rateBps, bool isSupported)",
  "function getSupportedTokens() view returns (address[])",
  "function isTokenSupported(address token) view returns (bool)",
  "function calculateInsurance(address token, uint256 amount) view returns (uint256)",
  // Write functions
  "function claimPending(address token)"
];
var INCENTIVE_POOL_ABI = [
  // View functions
  "function getBalance() view returns (uint256)",
  "function bonusRateBps() view returns (uint256)",
  "function pendingBonus(address user) view returns (uint256)",
  "function totalPendingBonuses() view returns (uint256)",
  // Write functions
  "function claimBonus()"
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
  VerificationLevel2[VerificationLevel2["NONE"] = 0] = "NONE";
  VerificationLevel2[VerificationLevel2["ORB"] = 1] = "ORB";
  VerificationLevel2[VerificationLevel2["PHONE"] = 2] = "PHONE";
  return VerificationLevel2;
})(VerificationLevel || {});
var PositionMode = /* @__PURE__ */ ((PositionMode2) => {
  PositionMode2[PositionMode2["FCFS"] = 0] = "FCFS";
  PositionMode2[PositionMode2["RANDOM"] = 1] = "RANDOM";
  PositionMode2[PositionMode2["AUCTION"] = 2] = "AUCTION";
  PositionMode2[PositionMode2["PRESET"] = 3] = "PRESET";
  return PositionMode2;
})(PositionMode || {});
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
  PositionMode,
  ROUTER_ABI,
  TESTNET_CONTRACTS,
  TOKENS,
  TOKEN_ADDRESSES,
  VerificationLevel,
  formatTokenAmount,
  getContracts,
  getToken,
  getTokenByAddress,
  getTokenDecimals,
  getTokenSymbol,
  getTokensByCategory,
  parseTokenAmount
});
