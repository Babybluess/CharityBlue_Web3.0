import Web3 from 'web3';
import { convertWeiBigNumberToNumber } from '../utils/web3js';
import configs from '../configs';

export const getBalanceETH = async (address) => {
	try {
		const web3 = new Web3(configs.linkRPC);
		let balance = await web3.eth.getBalance(address);

		balance = convertWeiBigNumberToNumber(balance);

		return parseFloat(balance);
	} catch (error) {
		return 0;
	}
};
