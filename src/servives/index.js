import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'localhost:9000/api/',
	validateStatus: (status) => status >= 200 && status < 400,
});

export default axiosClient;
