import axios from '../servives';


// eslint-disable-next-line
export const userApi = {
	getAll: async () => {
		try {
			const res = await axios.get(
				'/user/get-all-user',
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	addUser: async (data) => {
		try {
			const res = await axios.post(
				'/user/add-user',
				data
			);
			return res;
		} catch (error) {
			throw error;
		}
	},


	getById: async (id) => {
		try {
			const res = await axios.get(
				`/user/get-userID/${id}`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	updateUser: async ({ id, data }) => {
		try {
			const res = await axios.put(
				`/user/update-userID/${id}`,
				data
			);
			return res;
		} catch (error) {
			throw error;
		}
	},



	delUser: async (id) => {
		try {
			const res = await axios.put(
				`/user/delete-userID/${id}`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},
};
