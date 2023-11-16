import axios, { AxiosInstance } from "axios";

class APIServiceImplementation {
    private http: AxiosInstance;

    constructor() {
        this.http = axios.create({
            baseURL: 'http://erp-api.somee.com/api',
            headers: {}
        })
    }

    async login(username: string, password: string) {
        return this.http.post('/users/login', undefined, {
            params: {username, password}
        })
    }
}

export const APIService = new APIServiceImplementation()