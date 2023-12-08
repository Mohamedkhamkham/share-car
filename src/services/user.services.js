import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAll() {
        return this.api.get("/")
    }

    getById(id) {
        return this.api.get(`/${id}`)
    }

    updateUser(id, userData) {
        return this.api.put(`/${id}`, userData)
    }

    delete(id) {
        return this.api.delete(`/${id}`)
    }

}

const userService = new UserService()

export default userService