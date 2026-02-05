// ═══════════════════════════════════════════════════════════════════════════
// ROSCA Protocol ABIs
// Human-readable format for viem compatibility
// Updated: 2026-02-04 (v2 deployment with separated contracts)
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// ROSCAFactory ABI
// ═══════════════════════════════════════════════════════════════════════════

export const FACTORY_ABI = [
  // View functions
  'function getAllGroups() view returns (address[])',
  'function totalGroups() view returns (uint256)',
  'function allGroups(uint256 index) view returns (address)',
  'function isValidGroup(address group) view returns (bool)',
  'function isTokenAllowed(address token) view returns (bool)',
  'function allowedTokens(address token) view returns (bool)',
  'function minGroupSize() view returns (uint8)',
  'function maxGroupSize() view returns (uint8)',
  'function unbanFeeMultiplierBps() view returns (uint256)',
  'function admin() view returns (address)',
  'function pendingAdmin() view returns (address)',
  'function incentivePool() view returns (address)',
  'function insurancePool() view returns (address)',
  'function router() view returns (address)',

  // User data (delegates to UserDataStorage)
  'function getUserReputation(address user) view returns (uint32 completedCycles, uint32 defaultCount, uint64 totalVolumeContributed, uint40 firstParticipation, bool isBanned)',
  'function isVerifiedHuman(address user) view returns (bool)',
  'function meetsVerificationLevel(address user, uint8 requiredLevel) view returns (bool)',
  'function getUserVerificationLevel(address user) view returns (uint8)',
  'function getUserVerificationLevelRaw(address user) view returns (uint8)',
  'function isBanned(address user) view returns (bool)',
  'function getDefaultedAmount(address user, address token) view returns (uint256)',
  'function getDefaultedTokens(address user) view returns (address[])',
  'function meetsRequirements(address user, uint32 minCompletedCycles) view returns (bool)',

  // Write functions
  'function createGroup((string name, uint8 memberCount, uint256 contributionAmount, uint32 frequencySeconds, address paymentToken, uint16 collateralPercent, uint16 escrowPercent, uint8 escrowDelayEpochs, uint32 gracePeriodSeconds, uint8 requiredVerificationLevel, bool isInsured, uint32 minCompletedCycles, uint32 maxDefaultCount, uint64 minTotalVolume, uint40 minAccountAge, uint8 payoutOrder, bool affectsReputation) config, address[] whitelist) returns (address group)',
  'function unban()',

  // Admin functions
  'function setRouter(address _router)',
  'function setUnbanFeeMultiplier(uint256 _multiplierBps)',
  'function setGroupSizeLimits(uint8 _minSize, uint8 _maxSize)',
  'function addAllowedToken(address token)',
  'function removeAllowedToken(address token)',
  'function transferAdmin(address _newAdmin)',
  'function acceptAdmin()',
  'function cancelAdminTransfer()',

  // Events
  'event GroupCreated(address indexed group, address indexed creator, uint8 memberCount, uint256 contributionAmount, address token)',
  'event UserBannedEvent(address indexed user, uint32 defaultCount)',
  'event UserUnbanned(address indexed user)',
  'event UnbanFeePaid(address indexed user, address indexed token, uint256 fee)',
  'event CycleCompleted(address indexed user, address indexed group, uint256 volume)',
  'event DefaultRecorded(address indexed user, address indexed group)',
  'event TokenAllowlistUpdated(address indexed token, bool allowed)',
  'event RouterSet(address indexed router)',
  'event AdminTransferInitiated(address indexed currentAdmin, address indexed pendingAdmin)',
  'event AdminTransferCompleted(address indexed oldAdmin, address indexed newAdmin)',
  'event GroupSizeLimitsUpdated(uint8 newMinSize, uint8 newMaxSize)',
] as const

// ═══════════════════════════════════════════════════════════════════════════
// ROSCARouter ABI
// ═══════════════════════════════════════════════════════════════════════════

export const ROUTER_ABI = [
  // View functions
  'function factory() view returns (address)',
  'function getGroupStatus(address group) view returns (uint8)',
  'function getRequiredCollateral(address group) view returns (uint256)',
  'function getContributionAmount(address group) view returns (uint256)',
  'function isWhitelisted(address group, address user) view returns (bool)',
  'function getCurrentEpoch(address group) view returns (uint8)',
  'function hasContributed(address group, address user) view returns (bool)',

  // Write functions (standard)
  'function commit(address group)',
  'function contribute(address group, uint8 expectedEpoch)',
  'function withdrawCollateral(address group)',
  'function claimEscrow(address group)',
  'function leaveGroup(address group)',

  // Write functions (FromBalance - MiniKit Pay flow)
  'function commitFromBalance(address group, address user)',
  'function contributeFromBalance(address group, address user, uint8 expectedEpoch)',

  // Events
  'event CommitRouted(address indexed group, address indexed user)',
  'event ContributionRouted(address indexed group, address indexed user, uint256 amount)',
  'event WithdrawRouted(address indexed group, address indexed user)',
] as const

// ═══════════════════════════════════════════════════════════════════════════
// ROSCAGroup ABI
// ═══════════════════════════════════════════════════════════════════════════

export const GROUP_ABI = [
  // Basic info
  'function name() view returns (string)',
  'function status() view returns (uint8)',
  'function currentEpoch() view returns (uint8)',

  // Member counts
  'function memberCount() view returns (uint8)',
  'function committedCount() view returns (uint8)',
  'function activeCount() view returns (uint8)',

  // Financial params
  'function contributionAmount() view returns (uint256)',
  'function paymentToken() view returns (address)',
  'function collateralPercent() view returns (uint16)',
  'function escrowPercent() view returns (uint16)',
  'function escrowDelayEpochs() view returns (uint8)',
  'function requiredCollateral() view returns (uint256)',
  'function expectedPayout() view returns (uint256)',

  // Timing
  'function frequencySeconds() view returns (uint32)',
  'function commitDeadline() view returns (uint256)',
  'function startTime() view returns (uint256)',
  'function gracePeriodSeconds() view returns (uint32)',

  // Insurance
  'function isInsured() view returns (bool)',
  'function insuranceRateBps() view returns (uint256)',

  // Reputation requirements
  'function requiredVerificationLevel() view returns (uint8)',
  'function affectsReputation() view returns (bool)',
  'function payoutOrder() view returns (uint8)',

  // Members
  'function getAllMembers() view returns (address[])',
  'function getMember(address) view returns (address addr, uint8 status, uint8 position, uint256 collateralDeposited, uint256 escrowBalance, uint256 escrowReleaseTime, uint256 totalContributed, bool hasReceivedPayout, uint40 committedAt)',
  'function isWhitelisted(address) view returns (bool)',
  'function hasContributedInEpoch(address user, uint8 epoch) view returns (bool)',

  // Aggregated views
  'function getEpochInfo() view returns (uint8 epoch, address recipient, uint256 epochStart, uint256 epochEnd, uint256 gracePeriodEnd, uint8 paymentsMade, uint8 paymentsExpected)',
  'function getGroupSummary() view returns (uint8 currentStatus, uint8 committed, uint8 active, uint8 epoch, uint256 localInsurance, uint256 collateralHeld, uint256 escrowHeld, bool insured)',
  'function getContributionBreakdown() view returns (uint256 total, uint256 netToRecipient, uint256 toInsurance)',

  // Write functions
  'function commit()',
  'function commitFor(address user)',
  'function contribute(uint8 expectedEpoch)',
  'function contributeFor(address user, uint8 expectedEpoch)',
  'function finalizeCommitPhase()',
  'function finalizeCycle()',
  'function claimEscrow()',
  'function claimEscrowFor(address user)',
  'function claimCollateral()',
  'function withdrawCollateralFor(address user)',
  'function refundCollateral()',
  'function leave()',
  'function leaveFor(address user)',

  // Events
  'event MemberCommitted(address indexed member, uint8 position, uint256 collateral)',
  'event GroupActivated(uint256 startTime, uint8 totalMembers)',
  'event GroupFailed_Event()',
  'event Contribution(address indexed from, address indexed to, uint256 amount, uint8 epoch)',
  'event PayoutClaimed(address indexed member, uint256 immediateAmount, uint256 escrowAmount)',
  'event EscrowReleased(address indexed member, uint256 amount)',
  'event CollateralReturned(address indexed member, uint256 amount)',
  'event CollateralSlashed(address indexed member, uint256 amount)',
  'event MemberDefaultedEvent(address indexed member, uint8 epoch)',
  'event InsurancePayout(address indexed victim, uint256 amount)',
  'event CycleCompleted()',
  'event EpochAdvanced(uint8 fromEpoch, uint8 toEpoch)',
] as const

// ═══════════════════════════════════════════════════════════════════════════
// InsurancePool ABI
// ═══════════════════════════════════════════════════════════════════════════

export const INSURANCE_POOL_ABI = [
  // View functions
  'function admin() view returns (address)',
  'function factory() view returns (address)',
  'function isFrozen() view returns (bool)',
  'function getInsuranceRate(address token) view returns (uint256)',
  'function getBalance(address token) view returns (uint256)',
  'function getPendingClaim(address token, address user) view returns (uint256)',
  'function getTokenStats(address token) view returns (uint256 balance, uint256 deposits, uint256 claimed, uint256 pending, uint256 rateBps, bool isSupported)',
  'function getSupportedTokens() view returns (address[])',
  'function getTokenCount() view returns (uint256)',
  'function isTokenSupported(address token) view returns (bool)',
  'function calculateInsurance(address token, uint256 contributionAmount) view returns (uint256)',

  // Write functions
  'function claimPending(address token) returns (uint256 paid)',

  // Admin functions
  'function addToken(address token, uint256 rateBps)',
  'function setInsuranceRate(address token, uint256 newRateBps)',
  'function freeze()',
  'function unfreeze()',
  'function transferAdmin(address _newAdmin)',
  'function acceptAdmin()',
  'function cancelAdminTransfer()',
  'function adminWithdraw(address token, address to, uint256 amount)',

  // Events
  'event Deposited(address indexed group, address indexed token, uint256 amount)',
  'event PendingClaimPaid(address indexed victim, address indexed token, uint256 amount)',
  'event AdminTransferCompleted(address indexed oldAdmin, address indexed newAdmin)',
  'event FactorySet(address indexed factory)',
  'event TokenAdded(address indexed token, uint256 rateBps)',
  'event RateUpdated(address indexed token, uint256 oldRate, uint256 newRate)',
  'event Frozen(address indexed by)',
  'event Unfrozen(address indexed by)',
] as const

// ═══════════════════════════════════════════════════════════════════════════
// IncentivePool ABI
// ═══════════════════════════════════════════════════════════════════════════

export const INCENTIVE_POOL_ABI = [
  // View functions
  'function factory() view returns (address)',
  'function paymentToken() view returns (address)',
  'function bonusRateBps() view returns (uint256)',
  'function pendingBonus(address user) view returns (uint256)',
  'function totalPendingBonuses() view returns (uint256)',
  'function totalDistributed() view returns (uint256)',
  'function totalGrantsReceived() view returns (uint256)',
  'function getPoolStats() view returns (uint256 balance, uint256 pending, uint256 distributed, uint256 grantsReceived, uint256 currentRateBps)',
  'function calculatePotentialBonus(uint256 volumeContributed) view returns (uint256)',
  'function getAvailableBalance() view returns (uint256)',

  // Write functions
  'function claimBonus()',
  'function depositGrant(uint256 amount)',

  // Admin functions
  'function setBonusRate(uint256 newRateBps)',
  'function setFactory(address newFactory)',
  'function emergencyWithdraw(address token, address to, uint256 amount)',
  'function initiateControlTransfer(address newAdmin)',
  'function acceptControlTransfer()',
  'function cancelControlTransfer()',

  // Events
  'event GrantDeposited(address indexed donor, uint256 amount)',
  'event BonusRateUpdated(uint256 oldRate, uint256 newRate)',
  'event BonusRecorded(address indexed user, uint256 amount, uint256 volumeContributed)',
  'event BonusClaimed(address indexed user, uint256 amount)',
  'event ControlTransferCompleted(address indexed oldAdmin, address indexed newAdmin)',
] as const

// ═══════════════════════════════════════════════════════════════════════════
// UserDataStorage ABI
// ═══════════════════════════════════════════════════════════════════════════

export const USER_DATA_STORAGE_ABI = [
  // View functions
  'function admin() view returns (address)',
  'function pendingAdmin() view returns (address)',
  'function maxDefaultsBeforeBan() view returns (uint32)',
  'function getUserReputation(address user) view returns (uint32 completedCycles, uint32 defaultCount, uint64 totalVolumeContributed, uint40 firstParticipation, bool isBanned)',
  'function isVerifiedHuman(address user) view returns (bool)',
  'function getVerificationLevel(address user) view returns (uint8)',
  'function getDefaultedAmount(address user, address token) view returns (uint256)',
  'function getDefaultedTokens(address user) view returns (address[])',
  'function isNullifierUsed(uint8 level, uint256 nullifierHash) view returns (bool)',
  'function isBanned(address user) view returns (bool)',
  'function meetsVerificationLevel(address user, uint8 requiredLevel) view returns (bool)',
  'function isAuthorizedWriter(address writer) view returns (bool)',

  // Admin functions
  'function addAuthorizedWriter(address writer)',
  'function removeAuthorizedWriter(address writer)',
  'function setMaxDefaultsBeforeBan(uint32 _maxDefaults)',
  'function transferAdmin(address newAdmin)',
  'function acceptAdmin()',
  'function cancelAdminTransfer()',

  // Events
  'event UserVerified(address indexed user, uint8 level, uint256 nullifierHash)',
  'event CycleCompleted(address indexed user, uint256 volumeContributed)',
  'event DefaultRecorded(address indexed user, address indexed token, uint256 amount, uint32 totalDefaults)',
  'event UserBanned(address indexed user, uint32 defaultCount)',
  'event UserUnbanned(address indexed user)',
  'event FirstParticipationRecorded(address indexed user, uint40 timestamp)',
  'event WriterAdded(address indexed writer)',
  'event WriterRemoved(address indexed writer)',
  'event MaxDefaultsBeforeBanUpdated(uint32 oldValue, uint32 newValue)',
  'event AdminTransferCompleted(address indexed oldAdmin, address indexed newAdmin)',
] as const

// ═══════════════════════════════════════════════════════════════════════════
// WorldIDVerifier ABI
// ═══════════════════════════════════════════════════════════════════════════

export const WORLD_ID_VERIFIER_ABI = [
  // View functions
  'function worldId() view returns (address)',
  'function externalNullifier() view returns (uint256)',
  'function userDataStorage() view returns (address)',
  'function isVerifiedHuman(address user) view returns (bool)',
  'function meetsVerificationLevel(address user, uint8 requiredLevel) view returns (bool)',
  'function getUserVerificationLevel(address user) view returns (uint8)',

  // Write functions
  'function verifyHuman(uint8 level, uint256 root, uint256 nullifierHash, uint256[8] proof)',

  // Events
  'event HumanVerified(address indexed user, uint256 indexed nullifierHash, uint8 level)',
] as const

// ═══════════════════════════════════════════════════════════════════════════
// ERC20 ABI (minimal)
// ═══════════════════════════════════════════════════════════════════════════

export const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address account) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function transferFrom(address from, address to, uint256 amount) returns (bool)',
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'event Approval(address indexed owner, address indexed spender, uint256 value)',
] as const
