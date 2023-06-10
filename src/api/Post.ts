import httpClient from './httpClient';

const getPosts = async () => {
    try {
        const response = await httpClient.get('/posts');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching posts.');
    }
};

const createPost = async (postData: any) => {
    try {
        const response = await httpClient.post('/posts', postData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating a post.');
    }
};

export { getPosts, createPost };
