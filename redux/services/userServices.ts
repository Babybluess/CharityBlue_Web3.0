import { AxiosRequestConfig } from 'axios';
import configs from '../../configs/index';
import makeRequest from './httpServices';

export function getDataUser() {
    const options: AxiosRequestConfig = {};
    options.method = 'GET';
    options.url = configs.urlApi + `users/2`;
    options.headers = {
        'Content-Type': 'application/json',
    };

    return makeRequest(options);
}

export function getListUser(page: number) {
    const options: AxiosRequestConfig = {};
    options.method = 'GET';
    options.url = configs.urlApi + `users?page=${page}`;
    options.headers = {
        'Content-Type': 'application/json',
    };

    return makeRequest(options);
}
