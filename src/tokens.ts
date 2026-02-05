// ═══════════════════════════════════════════════════════════════════════════
// ROSCA Supported Tokens
// World Chain (Chain ID: 480)
// ═══════════════════════════════════════════════════════════════════════════

import type { Address } from './addresses'

export interface Token {
  symbol: string
  name: string
  decimals: number
  address: Address
  category: 'stablecoin-usd' | 'stablecoin-eur' | 'stablecoin-latam' | 'native'
}

// ═══════════════════════════════════════════════════════════════════════════
// Token Addresses (World Chain Mainnet)
// ═══════════════════════════════════════════════════════════════════════════

export const TOKEN_ADDRESSES = {
  // Stablecoins - USD
  USDC: '0x79A02482A880bCE3F13e09Da970dC34db4CD24d1' as Address,

  // Stablecoins - EUR
  EURC: '0x1C60ba0A0eD1019e8Eb035E6daF4155A5cE2380B' as Address,

  // LATAM Stablecoins (Ripio)
  wARS: '0x0DC4F92879B7670e5f4e4e6e3c801D229129D90D' as Address,
  wBRL: '0xD76f5Faf6888e24D9F04Bf92a0c8B921FE4390e0' as Address,
  wCLP: '0x6a73D28E38E6F9568F4AdF49b460417Bca469651' as Address,
  wCOP: '0x8a1D45e102e886510e891d2Ec656a708991e2D76' as Address,
  wMXN: '0x337E7456B420bD3481e7FA61fA9850343d610d34' as Address,
  wPEN: '0x4f4EB5B64C38dBF0e596629b5aE43eDE1BfF2eBE' as Address,

  // Native Tokens
  WLD: '0x2cFc85d8E48F8EAB294be644d9E25C3030863003' as Address,
  WETH: '0x4200000000000000000000000000000000000006' as Address,
} as const

export type TokenSymbol = keyof typeof TOKEN_ADDRESSES

// ═══════════════════════════════════════════════════════════════════════════
// Token Metadata
// ═══════════════════════════════════════════════════════════════════════════

export const TOKENS: Token[] = [
  // Stablecoins - USD
  {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    address: TOKEN_ADDRESSES.USDC,
    category: 'stablecoin-usd',
  },

  // Stablecoins - EUR
  {
    symbol: 'EURC',
    name: 'Euro Coin',
    decimals: 6,
    address: TOKEN_ADDRESSES.EURC,
    category: 'stablecoin-eur',
  },

  // LATAM Stablecoins (Ripio)
  {
    symbol: 'wARS',
    name: 'Wrapped Argentine Peso',
    decimals: 18,
    address: TOKEN_ADDRESSES.wARS,
    category: 'stablecoin-latam',
  },
  {
    symbol: 'wBRL',
    name: 'Wrapped Brazilian Real',
    decimals: 18,
    address: TOKEN_ADDRESSES.wBRL,
    category: 'stablecoin-latam',
  },
  {
    symbol: 'wCLP',
    name: 'Wrapped Chilean Peso',
    decimals: 18,
    address: TOKEN_ADDRESSES.wCLP,
    category: 'stablecoin-latam',
  },
  {
    symbol: 'wCOP',
    name: 'Wrapped Colombian Peso',
    decimals: 18,
    address: TOKEN_ADDRESSES.wCOP,
    category: 'stablecoin-latam',
  },
  {
    symbol: 'wMXN',
    name: 'Wrapped Mexican Peso',
    decimals: 18,
    address: TOKEN_ADDRESSES.wMXN,
    category: 'stablecoin-latam',
  },
  {
    symbol: 'wPEN',
    name: 'Wrapped Peruvian Sol',
    decimals: 18,
    address: TOKEN_ADDRESSES.wPEN,
    category: 'stablecoin-latam',
  },

  // Native Tokens
  {
    symbol: 'WLD',
    name: 'Worldcoin',
    decimals: 18,
    address: TOKEN_ADDRESSES.WLD,
    category: 'native',
  },
  {
    symbol: 'WETH',
    name: 'Wrapped ETH',
    decimals: 18,
    address: TOKEN_ADDRESSES.WETH,
    category: 'native',
  },
]

// ═══════════════════════════════════════════════════════════════════════════
// Token Utilities
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Get token by symbol
 */
export function getToken(symbol: TokenSymbol): Token {
  const token = TOKENS.find((t) => t.symbol === symbol)
  if (!token) throw new Error(`Unknown token: ${symbol}`)
  return token
}

/**
 * Get token by address
 */
export function getTokenByAddress(address: Address): Token | undefined {
  return TOKENS.find((t) => t.address.toLowerCase() === address.toLowerCase())
}

/**
 * Get token symbol by address
 */
export function getTokenSymbol(address: Address): string {
  const token = getTokenByAddress(address)
  return token?.symbol ?? 'UNKNOWN'
}

/**
 * Get token decimals by address
 */
export function getTokenDecimals(address: Address): number {
  const token = getTokenByAddress(address)
  return token?.decimals ?? 18
}

/**
 * Get tokens by category
 */
export function getTokensByCategory(category: Token['category']): Token[] {
  return TOKENS.filter((t) => t.category === category)
}

/**
 * Format token amount to human-readable string
 */
export function formatTokenAmount(amount: bigint, address: Address): string {
  const token = getTokenByAddress(address)
  const decimals = token?.decimals ?? 18
  const symbol = token?.symbol ?? 'TOKEN'
  const value = Number(amount) / Math.pow(10, decimals)

  if (symbol === 'USDC' || symbol === 'EURC') {
    return `$${value.toFixed(2)}`
  }
  return `${value.toFixed(decimals <= 6 ? 2 : 4)} ${symbol}`
}

/**
 * Parse human-readable amount to bigint
 */
export function parseTokenAmount(amount: number, symbol: TokenSymbol): bigint {
  const token = getToken(symbol)
  return BigInt(Math.floor(amount * Math.pow(10, token.decimals)))
}
