import axios from 'axios'

class TripService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/trips`
        });
    }

    getTrips() {
        return this.api.get('/getAllTrips');
    }

    saveTrip(tripData) {
        return this.api.post('/saveTrip', tripData);
    }
}


const tripServiceInstance = new TripService()

export default tripServiceInstance
