import axios from 'axios'

const endpoint = process.env.REACT_APP_SERVER;

axios.interceptors.request.use(
    config => {
        const configEndpoint = config;
        configEndpoint.url = endpoint + config.url;
        return configEndpoint;
    },
    error => Promise.reject(error),
);