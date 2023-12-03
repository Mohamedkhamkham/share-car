import axios from 'axios'

class ReservaService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/reservas`
        });

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getReserva(id) {
        return this.api.get(`/${id}`);
    }

    reservaTrip(trip) {
        return this.api.post(`/`, trip)
    }

    // cancelarTrip(id, trip) {
    //     return this.api.delete(`/${id}`, trip)
    // }

}


const reservaServiceInstance = new ReservaService()

export default reservaServiceInstance
