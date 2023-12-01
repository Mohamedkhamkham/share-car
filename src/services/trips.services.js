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

    getTrips() {
        return this.api.get('/getAllTrips');
    }

    saveTrip(tripData) {
        return this.api.post('/saveTrip', tripData);
    }


    getTripDetails(trip_id) {
        return this.api.get(`/${trip_id}`)
    }
}


const tripServiceInstance = new TripService()

export default tripServiceInstance
