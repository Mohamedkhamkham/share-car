import { useContext, useEffect, useState } from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
import TripService from '../services/trips.services'
import NewTripForm from '../components/NewTripForm/NewTripForm'
import TripsList from '../components/NewTripForm/TripsList'
import { AuthContext } from '../contexts/auth.context'
import ReservaService from '../services/reserva.services'

const ReservaPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [trips, setTrips] = useState([]);
    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        loadTrips(loggedUser._id)
    }, [loggedUser._id]);

    const loadTrips = (id) => {
        ReservaService
            .getReserva(id)
            .then(({ data }) => {
                const newIdsReservados = data.trips;
                console.log("Reservas from API:", newIdsReservados); // Log to check the data
                setTrips(newIdsReservados);
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        setShowModal(false)
        loadTrips(loggedUser._id);
    }

    return (
        <div className="TripsPage">
            <Container>
                <h1>VIAJES</h1>
                <TripsList trips={trips} />
                <Button variant='dark' size='sm' onClick={() => setShowModal(true)}>Crear Nuevo</Button>
                <hr />
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo viaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewTripForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default ReservaPage