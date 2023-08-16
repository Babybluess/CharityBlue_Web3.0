import crowdfundingABI from '../cross-env/abis/crowdfunding.json';

export default {
	urlApi: 'https://',
	urlSocket: 'https://',
	linkBscScan: 'https://etherscan.io',
	chainId: ['0x1', '0x1', '1', 1],
	nameChain: 'Ethereum Mainnet',
	linkRPC: 'https://ethereum.publicnode.com',
	symbol: 'ETH',
	contracts: {
		crowdfunding: {
			address: '0xE9BC0728360637B9C7eb59B53E4F89915f54Da56',
			abi: crowdfundingABI
		}
	}
};
