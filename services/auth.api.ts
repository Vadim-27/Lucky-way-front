import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const signup = async (body: any) => {
    const response = await instance.post(ENDPOINTS.auth.signup, body);
    return response.data;
};

export const signin = async (body: any) => {
    const response = await instance.post(ENDPOINTS.auth.signin, body);
    return response.data;
};
