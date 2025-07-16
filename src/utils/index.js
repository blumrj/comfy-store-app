import axios from "axios"

const customFetch = axios.create({
    baseURL: "https://strapi-store-server.onrender.com/api"
})

export default customFetch

