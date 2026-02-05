# @rosca/contracts

Shared package for ROSCA protocol contract addresses, ABIs, and types.

## Quick Start

| Command             | Description           |
| ------------------- | --------------------- |
| `npm install`       | Install dependencies  |
| `npm run build`     | Build package (tsup)  |
| `npm run dev`       | Watch mode            |
| `npm run typecheck` | TypeScript validation |

## Usage

```typescript
import {
  // Addresses
  MAINNET_CONTRACTS, // { FACTORY, ROUTER, INCENTIVE_POOL, INSURANCE_POOL }
  TOKEN_ADDRESSES, // { USDC, WLD, WETH, EURC, wARS, wBRL, ... }
  CHAIN_ID, // { WORLDCHAIN_MAINNET: 480, WORLDCHAIN_TESTNET: 4801 }

  // ABIs (human-readable for viem)
  FACTORY_ABI,
  ROUTER_ABI,
  GROUP_ABI,
  INSURANCE_POOL_ABI,
  INCENTIVE_POOL_ABI,
  ERC20_ABI,

  // Enums
  GroupStatus, // COMMIT_PHASE, ACTIVE, COMPLETED, FAILED
  MemberStatus, // PENDING, COMMITTED, ACTIVE, DEFAULTED, COMPLETED

  // Token utilities
  TOKENS, // Array of all tokens with metadata
  getToken, // getToken('USDC') -> { symbol, decimals, address, ... }
  getTokenByAddress, // getTokenByAddress('0x...') -> Token | undefined
  formatTokenAmount, // formatTokenAmount(1000000n, USDC) -> "$1.00"
  parseTokenAmount, // parseTokenAmount(1, 'USDC') -> 1000000n

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

| Contract         | Address                                      |
| ---------------- | -------------------------------------------- |
| ROSCAFactory     | `0x5142DCD24FE7e9D2a3B933fCCc6D22dd7b0D72dC` |
| ROSCARouter      | `0x2942FB98e1336d4241b5Cb40330BcA1db438A774` |
| IncentivePool    | `0x2a1baf86aaDbE9cCF263F43152f2Fb3C75c7F786` |
| InsurancePool    | `0x253EE2C09eB2bBAc3e62D65D257b53E151CA3126` |
| UserDataStorage  | `0x340e91f8f561b7355FA11227816b447211739acE` |
| WorldIDVerifier  | `0x3d8e4906558A213b7493Aa73CB80A83713A5d19f` |
| GroupDeployer    | `0x34222E5A2f91AA8E8e586a22952fbE3078625CD8` |

## Updating

1. Edit source files in `src/`
2. `npm run build`
3. `git add -A && git commit -m "feat: update addresses" && git push`
4. In consuming projects: `npm update @rosca/contracts`

## Consumers

- `app.rosca.community` - Mini App
- `analytics.rosca.community` - Dashboard
- `rosca.community` - Landing page
