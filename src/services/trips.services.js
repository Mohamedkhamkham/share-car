import axios from 'axios'

class TripService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/trips`
        });

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    updateTrip(id, trip) {
        return this.api.put(`/${id}`, trip)

    }

    getTrips() {
        return this.api.get('/getAllTrips');
    }

    saveTrip(trip) {
        return this.api.post('/saveTrip', trip);
    }


    getTripDetails(id) {
        return this.api.get(`/${id}`)
    }

    deleteTrip(id){
        return this.api.delete(`/${id}`)
}
}


const tripServiceInstance = new TripService()

export default tripServiceInstance
