import axios from 'axios';
const apiClient = axios.create({
    baseURL: "https://itx-frontend-test.onrender.com/"
});

apiClient.interceptors.request.use(
    async config => {
        return config;
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async error => {
        if (error.response) {
            console.error(`HTTP error: ${error.response.status} - ${error.response.statusText}`);
            throw {
                status: error.response.status,
                message: error.response.data.message || error.response.statusText,
            };
        } else if (error.request) {
            console.error('No Response error:', error.request);
            throw {message: 'No response was received'};
        } else {
            console.error('Request Setup error:', error.message);
            throw {message: error.message};
        }
    }
);

export default apiClient;