import {
  ERC20_ABI,
  FACTORY_ABI,
  GROUP_ABI,
  INCENTIVE_POOL_ABI,
  INSURANCE_POOL_ABI,
  ROUTER_ABI
} from "./chunk-DBVRNBSA.mjs";
import {
  CHAIN_ID,
  CONTRACT_INFO,
  MAINNET_CONTRACTS,
  TESTNET_CONTRACTS,
  getContracts
} from "./chunk-HLZW3NOH.mjs";
import {
  TOKENS,
  TOKEN_ADDRESSES,
  formatTokenAmount,
  getToken,
  getTokenByAddress,
  getTokenDecimals,
  getTokenSymbol,
  getTokensByCategory,
  parseTokenAmount
} from "./chunk-OV5W76SX.mjs";

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
export {
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
};
