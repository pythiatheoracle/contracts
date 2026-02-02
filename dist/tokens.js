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

// src/tokens.ts
var tokens_exports = {};
__export(tokens_exports, {
  TOKENS: () => TOKENS,
  TOKEN_ADDRESSES: () => TOKEN_ADDRESSES,
  formatTokenAmount: () => formatTokenAmount,
  getToken: () => getToken,
  getTokenByAddress: () => getTokenByAddress,
  getTokenDecimals: () => getTokenDecimals,
  getTokenSymbol: () => getTokenSymbol,
  getTokensByCategory: () => getTokensByCategory,
  parseTokenAmount: () => parseTokenAmount
});
module.exports = __toCommonJS(tokens_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TOKENS,
  TOKEN_ADDRESSES,
  formatTokenAmount,
  getToken,
  getTokenByAddress,
  getTokenDecimals,
  getTokenSymbol,
  getTokensByCategory,
  parseTokenAmount
});
