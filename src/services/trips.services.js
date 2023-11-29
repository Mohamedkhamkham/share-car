import axios from 'axios'

class TripService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}`
        });
    }

    getTrips() {
        return this.api.get('/trips/getAllTrips');
    }

    saveTrip(tripData) {
        return this.api.post('/trips/saveTrip', tripData);
    }
}


const tripServiceInstance = new TripService()

export default tripServiceInstance


