import axios from '../utils/axios';

// eslint-disable-next-line
export const authApi = {
  login: async (data) => {
    try {
      const res = await axios.post(
        '/',
        data,
      );
      return res;
    } catch (error) {
      throw error;
    }
  },

};
