import axios from '../servives';

// eslint-disable-next-line
export const chatApi = {
	getAllChatRoom: async (data) => {
		try {
			const res = await axios.get(
				'/chat/get-all-chatroom',
				data,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	getById: async (id) => {
		try {
			const res = await axios.get(
				`/chat/get-all-chatroom/${id}`,
			);
			return res;
		} catch (error) {
			throw error;
		}
	},

	addMessage: async (data) => {
		try {
			const res = await axios.post(
				`/chat/add-message`,
				data
			);
			return res;
		} catch (error) {
			throw error;
		}
	},


};
