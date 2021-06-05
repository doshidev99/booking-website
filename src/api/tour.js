import axios from '../servives';


// eslint-disable-next-line
export const tourApi = {
	getAll: async () => {
		try {
			const res = await axios.get(
				'/tour/get-all-tour',
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	getDetail: async (id) => {
		try {
			const res = await axios.get(
				`/tour/get-tourid/${id}`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	booking: async (data) => {
		try {
			const res = await axios.post(
				`/add-to-cart`,
				data
			);
			return res;
		} catch (error) {
			throw error;
		}
	},
	search: async (q) => {
		try {
			const res = await axios.get(
				`tour/get-all-tour?q=${q}`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

};
