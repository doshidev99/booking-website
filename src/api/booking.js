import axios from '../servives';


export const bookingApi = {
	getAll: async () => {
		try {
			const res = await axios.get(
				'/cart',
			);
			return res;
		} catch (error) {
			throw error;
		}
	}
}