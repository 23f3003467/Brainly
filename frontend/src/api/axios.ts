import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || ""
})

api.interceptors.request.use((config: any = {}) => {
    const token = localStorage.getItem("token")

    // Ensure headers object exists and is correctly typed
    config.headers = config.headers ?? {}

    if (token) {
        // set Authorization header
        // headers can be a plain object or specific typed headers
        (config.headers as Record<string, string>)["authorization"] = `${token}`
    }

    return config
})

export default api
