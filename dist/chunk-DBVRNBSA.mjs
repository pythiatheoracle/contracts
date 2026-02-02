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

export {
  FACTORY_ABI,
  ROUTER_ABI,
  GROUP_ABI,
  INSURANCE_POOL_ABI,
  INCENTIVE_POOL_ABI,
  ERC20_ABI
};
