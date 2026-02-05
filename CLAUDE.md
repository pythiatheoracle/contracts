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
| ROSCAFactory     | `0x2a1bf876180765D083C49b9Ad595a8542715ceb1` |
| ROSCARouter      | `0x4a3D3Dbf36a845Bfa6a908e5A4fE1E226bc2645c` |
| IncentivePool    | `0x7Ada45cf360Ce92Ace5765d5426075dB1d15Ac39` |
| InsurancePool    | `0xB45CA7A8637984f843465bbdD9782f11bB555364` |
| UserDataStorage  | `0x89c00F79d4C5E594787c0F7cAF6F250e2142342B` |
| WorldIDVerifier  | `0x26CEd0f39e318AF8669F21503c3C7b2C53278f5d` |
| GroupDeployer    | `0xEb51e23478AC2e57a98525B8EB623772EBa163E7` |

## Updating

1. Edit source files in `src/`
2. `npm run build`
3. `git add -A && git commit -m "feat: update addresses" && git push`
4. In consuming projects: `npm update @rosca/contracts`

## Consumers

- `app.rosca.community` - Mini App
- `analytics.rosca.community` - Dashboard
- `rosca.community` - Landing page
