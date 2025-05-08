const CACHE_TTL = 60 * 60 * 1000;

export default class CacheService{
    static getCacheKey(axiosConfig) {
        const { url, method, params } = axiosConfig;

        const keyBase = `${url}:${method}`;
        const keyParams = params ? JSON.stringify(params) : '';

        return `cache_${keyBase}_${keyParams}`;
    }

    static getFromCache(key) {
        const cached = localStorage.getItem(key);
        if (!cached) return null;

        const parsed = JSON.parse(cached);
        const now = Date.now();

        if (now - parsed.timestamp < CACHE_TTL) {
            return parsed.data;
        }

        localStorage.removeItem(key);
        return null;
    }

    static saveToCache(key, data) {
        localStorage.setItem(key, JSON.stringify({
            timestamp: Date.now(),
            data,
        }))
    }
}