import httpClient from './httpClient';

const login = async (username: string, password: string) => {
    try {
        const response = await httpClient.post('/login', { username, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed. Please check your credentials.');
    }
};

const logout = async () => {
    try {
        const response = await httpClient.post('/logout');
        return response.data;
    } catch (error) {
        throw new Error('Logout failed. Please try again.');
    }
};

export { login, logout };
