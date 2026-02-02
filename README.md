# @rosca/contracts

ROSCA Protocol smart contract addresses, ABIs, and types for World Chain.

## Installation

```bash
npm install @rosca/contracts
```

## Usage

### Import Everything

```typescript
import {
  MAINNET_CONTRACTS,
  TOKEN_ADDRESSES,
  FACTORY_ABI,
  GroupStatus,
  getToken,
  formatTokenAmount,
} from '@rosca/contracts'
```

### Import Specific Modules

```typescript
// Only addresses
import { MAINNET_CONTRACTS, getContracts } from '@rosca/contracts/addresses'

// Only tokens
import { TOKEN_ADDRESSES, TOKENS, getToken } from '@rosca/contracts/tokens'

// Only ABIs
import { FACTORY_ABI, ROUTER_ABI, GROUP_ABI } from '@rosca/contracts/abis'
```

## API

### Addresses

```typescript
import { MAINNET_CONTRACTS, getContracts, CHAIN_ID } from '@rosca/contracts'

// Direct access
const factoryAddress = MAINNET_CONTRACTS.FACTORY

// By chain ID
const contracts = getContracts(CHAIN_ID.WORLDCHAIN_MAINNET)
console.log(contracts.ROUTER)
```

### Tokens

```typescript
import {
  TOKEN_ADDRESSES,
  TOKENS,
  getToken,
  getTokenByAddress,
  formatTokenAmount,
  parseTokenAmount,
} from '@rosca/contracts'

// Get USDC address
const usdcAddress = TOKEN_ADDRESSES.USDC

// Get token metadata
const usdc = getToken('USDC')
console.log(usdc.decimals) // 6

// Format amount
const formatted = formatTokenAmount(1000000n, TOKEN_ADDRESSES.USDC)
console.log(formatted) // "$1.00"

// Parse amount
const amount = parseTokenAmount(100, 'USDC')
console.log(amount) // 100000000n
```

### ABIs

```typescript
import { FACTORY_ABI, GROUP_ABI } from '@rosca/contracts'
import { createPublicClient, http } from 'viem'
import { worldchain } from 'viem/chains'

const client = createPublicClient({
  chain: worldchain,
  transport: http(),
})

const groups = await client.readContract({
  address: MAINNET_CONTRACTS.FACTORY,
  abi: FACTORY_ABI,
  functionName: 'getAllGroups',
})
```

### Types & Enums

```typescript
import {
  GroupStatus,
  MemberStatus,
  type GroupInfo,
  type MemberInfo,
} from '@rosca/contracts'

if (group.status === GroupStatus.ACTIVE) {
  // Group is running
}

if (member.status === MemberStatus.DEFAULTED) {
  // Member has defaulted
}
```

## Contract Addresses

### World Chain Mainnet (480)

| Contract | Address |
|----------|---------|
| ROSCAFactory | `0x16795eEE495a07fc4FE94b9f5541F5aB4622DB5b` |
| ROSCARouter | `0xf3D8ABEABd1bFD02b0D2bf3017ada00ebC6cC4Cc` |
| IncentivePool | `0x0cCe743998492fB42A5Fc495769360B4011510e7` |
| InsurancePool | `0x6C467EC0B19bb76b0baCDC44F04dDCFFF48E4730` |

### Supported Tokens

| Token | Decimals | Address |
|-------|----------|---------|
| USDC | 6 | `0x79A02482A880bCE3F13e09Da970dC34db4CD24d1` |
| WLD | 18 | `0x2cFc85d8E48F8EAB294be644d9E25C3030863003` |
| WETH | 18 | `0x4200000000000000000000000000000000000006` |
| EURC | 6 | `0x1C60ba0A0eD1019e8Eb035E6daF4155A5cE2380B` |

## License

MIT
