import axios from 'axios';
const baseURL = 'https://kobecoin2-kobenguyent.b4a.run/'
const client = axios.create();
client.defaults.baseURL = baseURL;

export const apiHelper = {
    async get (endpoint:string) {
        return client.get(endpoint)
    },

    async post (endpoint:string, payload?: any) {
        return client.post(endpoint, payload)
    }
}
