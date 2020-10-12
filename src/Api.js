import axios from 'axios';

class Api {


    static async request(endpoint, paramsOrData = {}, verb = "get") {
        paramsOrData._token = (localStorage.getItem("token"));

        console.debug("API Call:", endpoint, paramsOrData, verb);

        try {
            return (await axios({
                method: verb,
                url: `http://localhost:3001/${endpoint}`,
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

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
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
    
    static async getJob(title) {
        let res = await this.request(`jobs/${title}`);
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

    static async loginUser(data) {
        let res = await this.request('login', data, "post");
        return res;
    }
}

export default Api;