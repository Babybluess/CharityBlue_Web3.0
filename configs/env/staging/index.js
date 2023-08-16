import crowdfundingABI from '../cross-env/abis/crowdfunding.json';

export default {
	urlApi: 'https://',
	urlSocket: 'https://',
	linkBscScan: 'https://ropsten.etherscan.io',
	chainId: ['0x3', '0x3', '3', 3],
	nameChain: 'Ethereum Testnet',
	linkRPC: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
	symbol: 'ETH',
	contracts: {
		crowdfunding: {
			address: '0xE9BC0728360637B9C7eb59B53E4F89915f54Da56',
			abi: crowdfundingABI
		}
	}
};
