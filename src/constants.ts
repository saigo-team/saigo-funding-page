import { TokenInfo } from './types';
import { ethers } from 'ethers';

export const BNB_CHAIN_ID = 56;
export const BNB_TESTNET_CHAIN_ID = 97;

// 定义网络ID类型
export type NetworkId = typeof BNB_CHAIN_ID | typeof BNB_TESTNET_CHAIN_ID;

// 配置当前使用的网络 - 设置为主网或测试网
// 将此变量设置为 BNB_CHAIN_ID 使用主网，或设置为 BNB_TESTNET_CHAIN_ID 使用测试网
export const CURRENT_NETWORK_ID: NetworkId = BNB_TESTNET_CHAIN_ID; // 或 BNB_TESTNET_CHAIN_ID

// 网络配置
export const NETWORK_CONFIG = {
  [BNB_CHAIN_ID]: {
    chainId: ethers.utils.hexValue(BNB_CHAIN_ID),
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  },
  [BNB_TESTNET_CHAIN_ID]: {
    chainId: ethers.utils.hexValue(BNB_TESTNET_CHAIN_ID),
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'tBNB',
      symbol: 'tBNB',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
  },
};

export const SAIGO_CONTRACT_ADDRESS = "0x0f09114b5933db0aa7e303910c220390df1918ee";
export const SWAP_TARGET_CONTRACT_ADDRESS = "0x5290Ff33bA88FC941aec6CA3b3f5c35A4Bbba35f";//新合约 带时间戳

// 获取当前网络的原生代币符号
export const getCurrentNetworkCurrency = () => {
  return NETWORK_CONFIG[CURRENT_NETWORK_ID].nativeCurrency.symbol;
};

// 更新 TOKENS 对象以使用当前网络的原生代币符号
export const TOKENS: Record<string, TokenInfo> = {
  BNB: {
    symbol: getCurrentNetworkCurrency(),
    name: getCurrentNetworkCurrency(),
    decimals: 18,
    logoUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
  },
  SAIGO: {
    symbol: "SAIGO",
    name: "SAIGO",
    decimals: 18,
    address: SAIGO_CONTRACT_ADDRESS,
    logoUrl: "https://raw.githubusercontent.com/mmm-saigo/picture/refs/heads/main/logo.png",
  }
};

// Fundraising constants
// export const FUNDRAISING_GOAL = 7000; // Goal in BNB
// export const FUNDRAISING_CURRENT = 0; // Current amount raised in BNB
