import { Address } from './addresses.js';

interface Token {
    symbol: string;
    name: string;
    decimals: number;
    address: Address;
    category: 'stablecoin-usd' | 'stablecoin-eur' | 'stablecoin-latam' | 'native';
}
declare const TOKEN_ADDRESSES: {
    readonly USDC: Address;
    readonly EURC: Address;
    readonly wARS: Address;
    readonly wBRL: Address;
    readonly wCLP: Address;
    readonly wCOP: Address;
    readonly wMXN: Address;
    readonly wPEN: Address;
    readonly WLD: Address;
    readonly WETH: Address;
};
type TokenSymbol = keyof typeof TOKEN_ADDRESSES;
declare const TOKENS: Token[];
/**
 * Get token by symbol
 */
declare function getToken(symbol: TokenSymbol): Token;
/**
 * Get token by address
 */
declare function getTokenByAddress(address: Address): Token | undefined;
/**
 * Get token symbol by address
 */
declare function getTokenSymbol(address: Address): string;
/**
 * Get token decimals by address
 */
declare function getTokenDecimals(address: Address): number;
/**
 * Get tokens by category
 */
declare function getTokensByCategory(category: Token['category']): Token[];
/**
 * Format token amount to human-readable string
 */
declare function formatTokenAmount(amount: bigint, address: Address): string;
/**
 * Parse human-readable amount to bigint
 */
declare function parseTokenAmount(amount: number, symbol: TokenSymbol): bigint;

export { TOKENS, TOKEN_ADDRESSES, type Token, type TokenSymbol, formatTokenAmount, getToken, getTokenByAddress, getTokenDecimals, getTokenSymbol, getTokensByCategory, parseTokenAmount };
