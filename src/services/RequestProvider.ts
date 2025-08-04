import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL, authenticate } from './APIs';
import Cookies from 'js-cookie';

export const axiosApiInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// ----------------------------------------------------------------------

axiosApiInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const url = config.url || '';

        if (url.includes(authenticate.login) || url.includes(authenticate.register)) {
            config.withCredentials = false;
        } else {
            const token = Cookies.get('Token');
            if (token && config.headers) {
                config.headers.set('Authorization', `Bearer ${token}`);
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// ----------------------------------------------------------------------

axiosApiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response === undefined) {
            error = { ...error, message: 'خطای بدون کد' };
        } else {
            switch (error.response.status) {
                case 400:
                    error = { ...error, message: 'سرویس در دسترس نیست' };
                    break;
                case 401:
                    error = { ...error, message: 'عدم دسترسی. لطفاً وارد شوید.' };
                    break;
                case 404:
                    error = { ...error, message: 'سرویس یافت نشد' };
                    break;
                case 500:
                    error = { ...error, message: 'خطای داخلی سرور' };
                    break;
                default:
                    error = { ...error, message: 'خطای تعریف نشده' };
            }
        }
        throw error;
    }
);

// ----------------------------------------------------------------------

/**
 * GET Request
 */
export const get = async <T = any>(
    url: string,
    params: Record<string, any> | null = null,
    showNotif: boolean = false
): Promise<T> => {
    try {
        const { data }: AxiosResponse<T> = await axiosApiInstance.get(url, { params });
        return onFulfilledAction(showNotif, data);
    } catch (error: any) {
        console.error('error', error?.message);
        throw error;
    }
};

// ----------------------------------------------------------------------

/**
 * POST Request
 */
export const post = async <T = any>(
    url: string,
    body: any,
    params: Record<string, any> | null = null,
    showNotif: boolean = false
): Promise<T> => {
    try {
        const { data }: AxiosResponse<T> = await axiosApiInstance.post(url, body, { params });
        return onFulfilledAction(showNotif, data);
    } catch (error: any) {
        console.error('error', error?.message);
        throw error;
    }
};

// ----------------------------------------------------------------------

/**
 * PUT Request
 */
export const put = async <T = any>(
    url: string,
    body: any = null,
    params: Record<string, any> | null = null,
    showNotif: boolean = false
): Promise<T> => {
    try {
        const { data }: AxiosResponse<T> = await axiosApiInstance.put(url, body, { params });
        return onFulfilledAction(showNotif, data);
    } catch (error: any) {
        console.error('error', error?.message);
        throw error;
    }
};

// ----------------------------------------------------------------------

const onFulfilledAction = <T = any>(showNotif: boolean, data: T): T => {
    if (showNotif && data) {
        console.log(data || 'با موفقیت انجام شد');
    }

    if (!data) {
        console.error('No data');
        return null as any;
    }

    return data;
};
