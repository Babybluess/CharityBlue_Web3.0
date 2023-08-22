import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

type Error = any;

const makeRequest = async (options: AxiosRequestConfig) => {
	try {
		const response: AxiosResponse = await axios(options);

		return response;
	} catch (error: Error | AxiosError) {
		if (error.response.status === 401) {
			localStorage.clear();
			window.location.reload();
		}
		throw error.response;
	}
};

export default makeRequest;
