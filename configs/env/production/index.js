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
			address: '0xcdc54fBF11F9c28E55410af0227298098719D176',
			abi: crowdfundingABI
		}
	}
};
