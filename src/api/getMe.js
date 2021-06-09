import axios from '../servives';


// eslint-disable-next-line
export const getMeApi = {
	getMe: async () => {
		// eslint-disable-next-line no-console
		console.log(localStorage.getItem('token'), '<----');
		try {
			const res = await axios.get(
				'/user/get-me',
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

};
