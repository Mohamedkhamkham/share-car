import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import TripService from '../services/trips.services'
const TripsPage = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        loadTrips()
    }, []);

    const loadTrips = () => {

        TripService
            .getTrips()
            .then(({ data }) => setTrips(data))
            .catch(err => console.log(err));
    }

    return (
        <div className="TripsPage">
            <Container>

                <h1>Mis viajes</h1>
                <hr />
                {/* {
                    trips.map(elm => <p>{elm._id}</p>)
                } */}
            </Container>

        </div>
    )
}


export default TripsPage