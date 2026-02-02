type Address = `0x${string}`;
declare const CHAIN_ID: {
    readonly WORLDCHAIN_MAINNET: 480;
    readonly WORLDCHAIN_TESTNET: 4801;
};
type ChainId = (typeof CHAIN_ID)[keyof typeof CHAIN_ID];
interface ProtocolContracts {
    FACTORY: Address;
    ROUTER: Address;
    INCENTIVE_POOL: Address;
    INSURANCE_POOL: Address;
}
declare const MAINNET_CONTRACTS: ProtocolContracts;
declare const TESTNET_CONTRACTS: ProtocolContracts;
/**
 * Get protocol contracts for a specific chain
 */
declare function getContracts(chainId?: ChainId): ProtocolContracts;
interface ContractInfo {
    name: string;
    address: Address;
    description: string;
    upgradeable: boolean;
}
declare const CONTRACT_INFO: Record<keyof ProtocolContracts, Omit<ContractInfo, 'address'>>;

export { type Address, CHAIN_ID, CONTRACT_INFO, type ChainId, type ContractInfo, MAINNET_CONTRACTS, type ProtocolContracts, TESTNET_CONTRACTS, getContracts };
