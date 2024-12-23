import axios from 'axios';
import type { AxiosInstance } from 'axios';

export const API_URL = 'http://localhost:5000/';

export const apiUsers: AxiosInstance = axios.create({
	baseURL: API_URL + 'usuarios',
	headers: {
		'Content-Type': 'application/json',
	  },
})

export const apiLogin: AxiosInstance = axios.create({
	baseURL: API_URL + 'login',
	headers: {
		'Content-Type': 'application/json',
	  },
})
