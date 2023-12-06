import { useContext, useEffect, useState } from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
import NewTripForm from '../components/NewTripForm/NewTripForm'
import TripsList from '../components/Trips/TripsList'
import { AuthContext } from '../contexts/auth.context'
import FavoritosService from '../services/favoritos.services'

const FavoritosPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [trips, setTrips] = useState([]);
    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        loadFavorites()
    }, [loggedUser._id]);

    const loadFavorites = () => {
        FavoritosService
            .getFavoritos(loggedUser._id)
            .then(({ data }) => {
                const newIdsFavoritos = data.trips;
                setTrips(newIdsFavoritos);
            })
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        setShowModal(false)
        loadFavorites();
    }

    return (
        <div className="TripsPage">
            <Container>
                <h1>FAVORITOS</h1>
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

export default FavoritosPage