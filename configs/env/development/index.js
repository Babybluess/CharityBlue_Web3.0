import crowdfundingABI from '../cross-env/abis/crowdfunding.json';

export default {
	urlApi: 'https://',
	urlSocket: 'https://',
	linkBscScan: 'https://sepolia.etherscan.io',
	chainId: ['0xaa36a7', '11155111', 11155111],
	nameChain: 'Sepolia Testnet',
	linkRPC: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
	symbol: 'ETH',
	contracts: {
		crowdfunding: {
			address: '0x304756BbaEbe70F19e16b5efdbfc18420Ed2a86c',
			abi: crowdfundingABI
		}
	}
};
