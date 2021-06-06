
import { Toastify } from './toast'

export const apiErrorHandler = (error) => {
	let title = '';
	let message = 'Something wrong';
	Toastify({ msg: `${error.response.data.message}`, type: 'error' });

};