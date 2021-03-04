import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:9000",
});

export default instance

// the axios is created to fetch the api fron the backend
// when app is already deployed the base URL has to be changed