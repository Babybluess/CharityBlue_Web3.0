import crowdfundingABI from '../cross-env/abis/crowdfunding.json';

export default {
	urlApi: 'https://',
	urlSocket: 'https://',
	linkBscScan: 'https://sepolia.etherscan.io',
	chainId: ['0xaa36a7', '11155111', 11155111],
	nameChain: 'Sepolia Testnet',
	linkRPC: 'https://api.zan.top/node/v1/eth/sepolia/public	',
	symbol: 'ETH',
	contracts: {
		crowdfunding: {
			address: '0x2c4d843Af6F047A75d46FeC9e91CF0d8d271b0Cb',
			abi: crowdfundingABI
		},
		ethToken: {
			address: '0x2c4d843Af6F047A75d46FeC9e91CF0d8d271b0Cb'
		}
	}
};
