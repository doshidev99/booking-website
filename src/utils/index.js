
import { Toastify } from './toast'

export const apiErrorHandler = (error) => {
	Toastify({ msg: `${error.response.data.message}`, type: 'error' });
};