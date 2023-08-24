export const gasPrice = 20;
export const MESSAGE = {
	connectWallet: 'Connect wallet successfully!',
	networkError: 'Network error!',
	errorExtension: 'Please install Metamask Extension!',
	contributionSuccess: 'Contribution successfully!',
	pleaseContribution: 'Please contribute before voting!',
	pleaseConnectWallet: 'Please connect wallet!',
	voted: 'You voted for this project!',
	voteSuccess: 'Vote successfully!'
};

export const listCampaign = [
	{
		id: 0,
		avatar: '/images/emergency.avif',
		title: 'Help Donate For Cianjur Earthquake Victims',
		type: 'SOCIAL SERVICE',
		bg: '#DFDCFA',
		text: '#664df9',
		description:
			'Help Donate for Cianjur Earthquake Victims by providing food, clothes, medicines, for their daily needs'
	},
	{
		id: 1,
		avatar: '/images/educationCampaign.jpg',
		title: 'Campaign To Provide Books For Children',
		type: 'EDUCATION',
		bg: '#F9DCE6',
		text: '#F96E9E',
		description:
			'Campaign to provide quality books for children who are in need of proper education for their development'
	},
	{
		id: 2,
		avatar: '/images/cancer.avif',
		title: 'Help Children Cancer Fighters',
		type: 'MEDICAL HELP',
		bg: '#CEE3DE',
		text: '#228267',
		description:
			'Help the Children of Cancer Warriors to meet their needs for care and treatment as well as possible to achieve recovery'
	}
];
