import axios from 'axios';

const httpClient = (token = null) =>
    axios.create({
        baseURL: 'http://localhost:8080/api',
        headers: token ? { authorization: `Bearer ${token}` } : undefined,
    });

export default httpClient;
