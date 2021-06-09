import axios from 'axios';

axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem('token')}` }
const axiosClient = axios.create({
	baseURL: 'http://localhost:9000/api',
	validateStatus: (status) => status >= 200 && status < 400,
});

export default axiosClient;
