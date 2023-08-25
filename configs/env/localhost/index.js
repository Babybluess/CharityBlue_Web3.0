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
			address: '0xcdc54fBF11F9c28E55410af0227298098719D176',
			abi: crowdfundingABI
		}
	}
};
