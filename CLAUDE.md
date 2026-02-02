# @rosca/contracts

Shared package for ROSCA protocol contract addresses, ABIs, and types.

## Quick Start

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run build` | Build package (tsup) |
| `npm run dev` | Watch mode |
| `npm run typecheck` | TypeScript validation |

## Usage

```typescript
import {
  // Addresses
  MAINNET_CONTRACTS,    // { FACTORY, ROUTER, INCENTIVE_POOL, INSURANCE_POOL }
  TOKEN_ADDRESSES,      // { USDC, WLD, WETH, EURC, wARS, wBRL, ... }
  CHAIN_ID,             // { WORLDCHAIN_MAINNET: 480, WORLDCHAIN_TESTNET: 4801 }

  // ABIs (human-readable for viem)
  FACTORY_ABI,
  ROUTER_ABI,
  GROUP_ABI,
  INSURANCE_POOL_ABI,
  INCENTIVE_POOL_ABI,
  ERC20_ABI,

  // Enums
  GroupStatus,          // COMMIT_PHASE, ACTIVE, COMPLETED, FAILED
  MemberStatus,         // PENDING, COMMITTED, ACTIVE, DEFAULTED, COMPLETED

  // Token utilities
  TOKENS,               // Array of all tokens with metadata
  getToken,             // getToken('USDC') -> { symbol, decimals, address, ... }
  getTokenByAddress,    // getTokenByAddress('0x...') -> Token | undefined
  formatTokenAmount,    // formatTokenAmount(1000000n, USDC) -> "$1.00"
  parseTokenAmount,     // parseTokenAmount(1, 'USDC') -> 1000000n

  // Types
  type Address,
  type Token,
  type GroupInfo,
  type MemberInfo,
} from '@rosca/contracts'
```

## Structure

```
src/
├── index.ts           # Main entry, re-exports all
├── addresses.ts       # Contract addresses by chain
├── tokens.ts          # Token addresses and utilities
└── abis.ts            # Human-readable ABIs
```

## Contract Addresses (World Chain Mainnet)

| Contract | Address |
|----------|---------|
| ROSCAFactory | `0x16795eEE495a07fc4FE94b9f5541F5aB4622DB5b` |
| ROSCARouter | `0xf3D8ABEABd1bFD02b0D2bf3017ada00ebC6cC4Cc` |
| IncentivePool | `0x0cCe743998492fB42A5Fc495769360B4011510e7` |
| InsurancePool | `0x6C467EC0B19bb76b0baCDC44F04dDCFFF48E4730` |

## Updating

1. Edit source files in `src/`
2. `npm run build`
3. `git add -A && git commit -m "feat: update addresses" && git push`
4. In consuming projects: `npm update @rosca/contracts`

## Consumers

- `app.rosca.community` - Mini App
- `analytics.rosca.community` - Dashboard
- `rosca.community` - Landing page
