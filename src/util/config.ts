import axios from "axios";
import { history } from "..";

//setup hằng số
export const DOMAIN = 'https://elearningnew.cybersoft.edu.vn';
export const USER_LOGIN = 'userLogin';
export const COURSEDETAIL = 'courseDetail';
export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MyIsIkhldEhhblN0cmluZyI6IjA0LzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5OTA1NjAwMDAwMCIsIm5iZiI6MTY2OTQ4MjAwMCwiZXhwIjoxNjk5MjAzNjAwfQ.7A1g8RqPPK_ttr9NYitsWT7Cbe11nz4qye-QxZ_b8fk';

//interceptor
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})
export const httpNonAuth = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})


export const { getStoreJson, setStoreJson, getStore, setStore } = {
    //  tại sao lại dùng any vì local stote của mình khi parse ra ob ra format model ,user login ... sẽ ra nhiều kiểu format  
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
    }
}
httpNonAuth.interceptors.request.use((config: any) => {//cấu hình cho page không cần đăng nhập 
    config.baseURL = DOMAIN;
    config.headers = { ...config.headers }
    config.headers.tokenCybersoft = TOKEN_CYBERSOFT;
    return config
}, err => {
    return Promise.reject(err)
});
http.interceptors.request.use((config: any) => {//cấu hình cho page cần đăng nhập 
    config.headers = { ...config.headers }
    let token = getStoreJson(USER_LOGIN)?.accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = `TOKEN_CYBERSOFT`;
    return config
}, err => {
    return Promise.reject(err)
});



