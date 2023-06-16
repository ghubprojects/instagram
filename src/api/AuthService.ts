import httpClient from './httpClient';

const AuthService = {
    login: async (username: string, password: string) => {
        try {
            const response = await httpClient().post('/auth/login', { username, password });
            localStorage.setItem('token', response.data.results.token);
            return response.data;
        } catch (error) {
            throw new Error('Login failed. Please check your credentials.');
        }
    },

    register: async (username: string, password: string) => {
        try {
            const response = await httpClient().post('/auth/register', { username, password });
            return response.data;
        } catch (error) {
            throw new Error('Registration failed. Please try again.');
        }
    },

    logout: async () => {
        try {
            const response = await httpClient().post('/auth/logout');
            return response.data;
        } catch (error) {
            throw new Error('Logout failed. Please try again.');
        }
    },
};

export default AuthService;
