import { MESSAGE } from '@/constants';
import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import configs from '../configs';
import { RootState } from '../redux/reducers/index';
import * as types from '../redux/types';
import Loading from './Loading';

declare global {
	interface Window {
		ethereum: any;
	}
}
export interface LayoutProps {
	children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	const { orderReducers } = useSelector((state: RootState) => state);
	const { isLoading } = orderReducers;
	const dispatch = useDispatch();

	useEffect(() => {
		const address = localStorage.getItem('address');

		if (address) {
			if (address.length > 0) {
				handleConnectWallet();
			}
		} else {
			dispatch({ type: types.userTypes.UPDATE_DATA_USER, data: { address: '' } });
		}
	}, []);

	const handleConnectWallet = () => {
		const binanceChain = window && window.ethereum ? window.ethereum : undefined;

		dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: true } });

		if (binanceChain !== undefined) {
			binanceChain.autoRefreshOnNetworkChange = false;
			binanceChain.isConnected();

			try {
				binanceChain
					.request({ method: 'eth_requestAccounts', params: [] })
					.then(async (accounts: Array<string>) => {
						if (accounts.length === 0) {
							console.log('Please connect to Binance Smart Chain!');
						} else {
							const addressUser = accounts[0];

							binanceChain.on('accountsChanged', () => {
								localStorage.removeItem('address');
								window.location.reload();
							});

							let chainId = 1;

							if (isMobile) {
								chainId = binanceChain.chainId;
							} else {
								await binanceChain
									.request({ method: 'eth_chainId', params: [] })
									.then(async (response: number) => {
										chainId = response;
									})
									.catch((err: Error) => {
										console.error(err);
									});
							}

							const isBinanceChain = configs.chainId.includes(chainId);

							if (isBinanceChain) {
								localStorage.setItem('address', addressUser);

								dispatch({
									type: types.orderTypes.UPDATE_DATA_ORDER,
									data: { isLoading: false }
								});
							} else {
								try {
									binanceChain
										.request({
											method: 'wallet_switchEthereumChain',
											params: [{ chainId: configs.chainId[0] }]
										})
										.then(async () => {
											localStorage.setItem('address', addressUser);

											dispatch({
												type: types.orderTypes.UPDATE_DATA_ORDER,
												data: { isLoading: false }
											});
										})
										.catch((err: Error) => {
											handleAddNetwork(binanceChain);
											console.error(err);
										});
								} catch (error) {
									console.log({ error });
									dispatch({
										type: types.orderTypes.UPDATE_DATA_ORDER,
										data: { isLoading: false }
									});
								}
							}

							dispatch({
								type: types.userTypes.UPDATE_DATA_USER,
								data: {
									address: addressUser,
									chainId,
									binanceChain,
									isBinanceChain: isBinanceChain
								}
							});
						}
					})
					.catch((err: Error) => {
						console.error(err);
						dispatch({
							type: types.orderTypes.UPDATE_DATA_ORDER,
							data: { isLoading: false }
						});
					});
			} catch (error) {
				console.error('err ethereum', error);
				dispatch({
					type: types.userTypes.UPDATE_DATA_USER,
					data: {
						binanceChain: 1,
						isBinanceChain: false
					}
				});

				dispatch({
					type: types.modalTypes.UPDATE_DATA_MODAL,
					data: {
						isPopupDetect: true
					}
				});
				dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: false } });
			}
		} else {
			console.log('error');
			toast.error(MESSAGE.errorExtension);
			dispatch({
				type: types.userTypes.UPDATE_DATA_USER,
				data: {
					binanceChain: 1,
					isBinanceChain: false
				}
			});

			dispatch({
				type: types.modalTypes.UPDATE_DATA_MODAL,
				data: {
					isPopupDetect: true
				}
			});
			dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: false } });
		}
	};

	const handleAddNetwork = (binanceChain: any) => {
		try {
			binanceChain
				.request({
					method: 'wallet_addEthereumChain',
					params: [
						{
							chainId: configs.chainId[0],
							chainName: configs.nameChain,
							rpcUrls: [configs.linkRPC],
							iconUrls: [],
							nativeCurrency: {
								name: configs.symbol,
								symbol: configs.symbol,
								decimals: 18
							},
							blockExplorerUrls: [configs.linkBscScan]
						}
					]
				})
				.then(async () => {
					dispatch({
						type: types.orderTypes.UPDATE_DATA_ORDER,
						data: { isLoading: false }
					});
				})
				.catch((err: Error) => {
					toast.error(err.message);
					console.error(err);
					dispatch({
						type: types.orderTypes.UPDATE_DATA_ORDER,
						data: { isLoading: false }
					});
				});
		} catch (error) {
			console.log({ error });
			dispatch({ type: types.orderTypes.UPDATE_DATA_ORDER, data: { isLoading: false } });
		}
	};

	return (
		<>
			{props.children}
			<ToastContainer
				position="bottom-right"
				pauseOnFocusLoss={false}
				hideProgressBar={true}
			/>
			<Loading isLoading={isLoading} />
		</>
	);
};

export default Layout;
