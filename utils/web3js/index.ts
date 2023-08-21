import Web3 from 'web3';

const convertNumberToWei = (value: number) => {
	return Web3.utils.toWei(`${value}`, 'ether');
};

const numberToGweiHex = (value: number) => {
	return Web3.utils.toHex(Web3.utils.toWei(`${value}`, 'gwei'));
};

const convertWeiBigNumberToNumber = (value: number) => {
	if (value) {
		const toWeiNumber = Web3.utils.fromWei(`${value}`, 'ether');
		return parseFloat(toWeiNumber);
	}

	return null;
};

const timeOut = async (period = 1000) => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(1);
		}, period);
	});
};

export { convertNumberToWei, convertWeiBigNumberToNumber, numberToGweiHex, timeOut };
