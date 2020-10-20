import axios from 'axios';
import jwt from 'jsonwebtoken';

class Api {

    static async request(endpoint, paramsOrData = {}, verb = "get") {
        const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001/";
        paramsOrData._token = (localStorage.getItem("token"));

        console.debug("API Call:", endpoint, paramsOrData, verb);

        try {
            return (await axios({
                method: verb,
                url: BASE_URL  + endpoint,
                [verb === "get" ? "params" : "data"]: paramsOrData
            })).data;
            // axios sends query string data via the "params" key,
            // and request body data via the "data" key,
            // so the key we need depends on the HTTP verb
        }

        catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getCompany(handle, username) {
        let res = await this.request(`companies/${handle}`, {username: username});
        return res.company;
    }

    static async getCompanies() {
        let res = await this.request(`companies`);
        return res.companies;
    }
    
    static async searchCompanies(searchTerm) {
        let res = await this.request('companies', {search: searchTerm})
        return res.companies;
    }
    
    static async getJob(id) {
        let res = await this.request(`jobs/${id}`);
        return res.job;
    }
    
    static async getJobs() {
        let res = await this.request(`jobs`);
        return res.jobs;
    }

    static async searchJobs(searchTerm) {
        let res = await this.request('jobs', {search: searchTerm});
        return res.jobs;
    }

    static async apply(id) {
        let res = await this.request(`jobs/${id}/apply`, {}, "post");
        return res;
    }

    static async loginUser(data) {
        let res = await this.request('login', data, "post");
        return res;
    }
    
    static async signUpUser(data) {
        let res = await this.request('users', data, "post");
        return res;
    }

    static async getUser(token) {
        let payload = jwt.decode(token);
        let res = await this.request(`users/${payload.username}` )
        return res.user;
    }

    static async updateUser(username, data){
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }
}

export default Api;