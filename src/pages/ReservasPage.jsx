import { useContext, useEffect, useState } from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
import NewTripForm from '../components/NewTripForm/NewTripForm'
import TripsList from '../components/Trips/TripsList'
import { AuthContext } from '../contexts/auth.context'
import ReservaService from '../services/reserva.services'

const ReservaPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [trips, setTrips] = useState([]);
    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        loadBookings()
    }, [loggedUser._id]);

    const loadBookings = () => {
        ReservaService
            .getReserva(loggedUser._id)
            .then(({ data }) => {
                const newIdsReservados = data.trips;
                setTrips(newIdsReservados);
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        setShowModal(false)
        loadBookings();
    }

    return (
        <div className="TripsPage">
            <Container>
                <h1>RESERVAS</h1>
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