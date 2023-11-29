import { useEffect, useState } from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
import TripService from '../services/trips.services'
import NewTripForm from '../components/NewTripForm/NewTripForm'

const TripsPage = () => {

    const [showModal, setShowModal] = useState(false)
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

    const fireFinalActions = () => {
        setShowModal(false)
        loadTrips()
    }


    return (
        <div className="TripsPage">
            <Container>

                <h1>Mis viajes</h1>
                <Button variant='primary' size='sm' onClick={() => setShowModal(true)}>Crear Nuevo</Button>
                <hr />
                {/* {
                    trips.map(elm => <p>{elm._id}</p>)
                } */}
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal>Nuevo viaje</Modal>
                </Modal.Header>
                <Modal.Body>
                    <NewTripForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </div>
    )
}


export default TripsPage