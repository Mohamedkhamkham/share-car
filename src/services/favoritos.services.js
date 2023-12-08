import axios from 'axios'

class FavoritosService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/favoritos`
        });

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getFavoritos(id) {
        return this.api.get(`/${id}`);
    }

    favoritoTrip(trip) {
        return this.api.post(`/`, trip)
    }
}

const FavoritosServiceInstance = new FavoritosService()

export default FavoritosServiceInstance
