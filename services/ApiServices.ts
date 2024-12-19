import axios, { AxiosInstance, AxiosResponse } from 'axios';

type IRes<DATA> = Promise<AxiosResponse<DATA>>;

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const apiService: AxiosInstance = axios.create({ baseURL });

export { apiService, baseURL };
export type { IRes };
