import axios from "axios";
import { history } from "..";
//setup hằng số
export const DOMAIN = 'https://elearningnew.cybersoft.edu.vn';
export const USER_LOGIN = 'userLogin';
export const COURSEDETAIL = 'courseDetail';
export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJDT0RFIFdJVEggTUVOVE9SIFRIw4FORyAyIiwiSGV0SGFuU3RyaW5nIjoiMDEvMDkvMjAyNCIsIkhldEhhblRpbWUiOiIxNzI1MTQ4ODAwMDAwIiwibmJmIjoxNzA2NzIwNDAwLCJleHAiOjE3MjUyOTY0MDB9.eD1cwprT529UK3XwL1cUQz8OkQjsFEzbMCQwLmI9f0U';

//interceptor
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})
export const httpNonAuth = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})


export const { getStoreJson, setStoreJson, getStore, setStore, clearStorage } = {
    getStoreJson: (name: string): any => {
        if (localStorage.getItem(name)) {
            const strResult: string | null | any = localStorage.getItem(name);
            return JSON.parse(strResult);
        }
        return undefined;
    },
    setStoreJson: (name: string, data: any): void => {
        const strJSON = JSON.stringify(data);
        localStorage.setItem(name, strJSON);
    },
    getStore: (name: string): string | null => {
        return localStorage.getItem(name);
    },
    setStore: (name: string, data: string): void => {
        localStorage.setItem(name, data);
    },
    clearStorage: (name: string): any => {
        localStorage.removeItem(name)
    }
}
httpNonAuth.interceptors.request.use((config: any) => {
    config.baseURL = DOMAIN;
    config.headers = { ...config.headers }
    config.headers.tokenCybersoft = TOKEN_CYBERSOFT;
    return config
}, err => {
    return Promise.reject(err)
});
http.interceptors.request.use((config: any) => {
    config.headers = { ...config.headers }
    let token = getStoreJson('credentials')?.accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = TOKEN_CYBERSOFT;
    return config
}, err => {
    return Promise.reject(err);
});

//Cấu hình cho response (kết quả trả về từ api)
http.interceptors.response.use((res) => {
    return res;
}, (err) => {
    //Xử lý lỗi cho api bị lỗi theo status code 
    if (err.response?.status === 401) {
        alert('Đăng nhập để vào trang này !')
        history.push('/login')
        if (err.response?.status === 403) {
            alert('Không đủ quyền truy cập vào trang này !');
            history.push('/admin/login');
        }
    }
    return Promise.reject(err);
})