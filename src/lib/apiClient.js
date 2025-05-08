import axios from 'axios';
import CacheService from "../services/cacheService.js";

const apiClient = axios.create({
    baseURL: "https://itx-frontend-test.onrender.com/"
});

apiClient.interceptors.request.use(
    async config => {
        if (config.method === 'get' && config.useCache) {
            const cacheKey = CacheService.getCacheKey(config);
            const cachedResponse = CacheService.getFromCache(cacheKey);

            if (cachedResponse) {
                throw {
                    isLocal: true, data: {
                        ...config,
                        data: cachedResponse,
                        cached: true,
                        status: 200,
                        statusText: 'OK',
                        headers: {},
                        config
                    }
                };
            }

            config.__cacheKey = cacheKey;
        }

        return config;
    },
    error => {
        return error?.isLocal
            ? Promise.resolve(error)
            : Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        const config = response.config;

        if (config.method === 'get' && config.useCache && !response.cached) {
            const cacheKey = config.__cacheKey || CacheService.getCacheKey(config);
            CacheService.saveToCache(cacheKey, response.data);
        }
        return response;
    },
    async error => {
        if(error?.isLocal){
            return Promise.resolve(error.data);
        }

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