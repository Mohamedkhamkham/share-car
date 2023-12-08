import { useEffect, useState } from "react"
import { Form, ButtonGroup, Button, Card, Col, Row, Container } from "react-bootstrap"
import TripService from "../../services/trips.services"
import ReservaService from "../../services/reserva.services"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import uploadServices from '../../services/upload.services'

const Detalles = () => {

    const navigate = useNavigate()
    const { loggedUser } = useContext(AuthContext)
    let idsReservados = [];
    const formatDate = (date) => {

        const fechaObjeto = new Date(date)
        const anio = fechaObjeto.getFullYear()
        const mes = String(fechaObjeto.getMonth() + 1).padStart(2, '0')
        const dia = String(fechaObjeto.getDate()).padStart(2, '0')

        const fechaFormateada = `${anio}-${mes}-${dia}`
        return fechaFormateada

    }

    const [loadingImage, setLoadingImage] = useState(true)
    const { trip_id } = useParams()

    const body = {
        user_id: loggedUser._id,
        trip_id: trip_id
    }

    const [reservas, setReserva] = useState([])

    const [trip, setTrip] = useState({
        origin: "",
        destination: "",
        date: "",
        time: "",
        availableSeats: 0,
        price: 0,
        image: "",
        trip: 1,
        owner: 1
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setTrip({ ...trip, [name]: value })
    }

    const handleTripSubmit = e => {
        e.preventDefault()

        TripService
            .updateTrip(trip_id, trip)
            .then(() => {
                navigate('/viajes')
            })
            .catch(err => console.log(err))
    }

    const deleteTripSubmit = e => {
        e.preventDefault()

        TripService
            .deleteTrip(trip_id)
            .then(() => {
                navigate('/viajes')
            })
            .catch(err => console.log(err))
    }

    const agregarTripSubmit = e => {
        e.preventDefault()
        setReserva(trip_id);
        ReservaService
            .reservaTrip(body)
            .then(() => {
                navigate(`/detalles/${trip_id}`)
            })
            .catch(err => console.log(err))
    }

    const cancelarTripSubmit = e => {
        e.preventDefault()
        setReserva([]);
        ReservaService
            .reservaTrip(body)
            .then(() => {
                navigate(`/detalles/${trip_id}`)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadTripDetails(loggedUser._id)
    }, [trip_id, loggedUser._id])

    const loadTripDetails = (id) => {

        TripService
            .getTripDetails(trip_id)
            .then(({ data }) => setTrip(data))
            .catch(err => console.log(err))

        ReservaService
            .getReserva(id)
            .then(({ data }) => {
                const newIdsReservados = data.trips.map(el => el._id);
                setReserva(newIdsReservados);
            })
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {


        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setTrip({ ...trip, image: res.data.cloudinary_url })
                setLoadingImage(false)

            })
            .catch(err => {
                console.log(err)
                setLoadingImage(true)
            })
    }

    return (
        <Container className="d-flex align-items-center justify-content-center ">
            <div className="NewTripForm">
                <h1>Detalles del viaje</h1>
                <Form onSubmit={handleTripSubmit}>
                    {/* Origen y Destino */}
                    <Row className>
                        <Col md={12}>
                            <Form.Group controlId="origin">
                                <Form.Label >Origen</Form.Label>
                                <Form.Control type="text" placeholder="Ej. Ciudad de origen" value={trip.origin} name="origin" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="destination">
                                <Form.Label >Destino</Form.Label>
                                <Form.Control type="text" placeholder="Ej. Ciudad de destino" value={trip.destination} name="destination" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Fecha, Hora, Asientos disponibles y Precio */}
                    <Row className="mb-3">
                        <Col md={3}>
                            <Form.Group controlId="date">
                                <Form.Label >Fecha</Form.Label>
                                <Form.Control type="date" value={formatDate(trip.date)} name="date" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="time">
                                <Form.Label >Hora</Form.Label>
                                <Form.Control type="time" value={trip.time} name="time" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="availableSeats">
                                <Form.Label >Asientos disponibles</Form.Label>
                                <Form.Control type="number" value={trip.availableSeats} name="availableSeats" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="price">
                                <Form.Label >Precio (Eur.)</Form.Label>
                                <Form.Control type="number" value={trip.price} name="price" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* URL de la Imagen */}
                    {
                        loggedUser._id === trip.owner ?
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group className="mb-3" controlId="image">
                                        <Form.Label>Imagen</Form.Label>
                                        <Form.Control type="file" onChange={handleFileUpload} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            : ''
                    }

                    {/* Botones */}
                    <Row>
                        {loggedUser._id === trip.owner &&
                            <ButtonGroup className="d-flex justify-content-center m-1">
                                <Button variant="warning" type="submit" disabled={loadingImage} >
                                    Editar
                                </Button>
                                <Button variant="danger" size="lg" className="ms-2" onClick={deleteTripSubmit}>Eliminar</Button>
                            </ButtonGroup>
                        }

                        {loggedUser._id != trip.owner &&
                            <ButtonGroup className="d-flex justify-content-center m-1">
                                {/* {console.log(reserva)} */}

                                {reservas.includes(trip_id) ? <Button variant="danger" size="lg" className="ms-2" onClick={cancelarTripSubmit}>Cancelar</Button> : <Button variant="success" size="lg" onClick={agregarTripSubmit}>Reservar</Button>}

                                {/* <Button variant="success" size="lg" onClick={agregarTripSubmit}>Reservar</Button>
                                <Button variant="danger" size="lg" className="ms-2" onClick={cancelarTripSubmit}>Cancelar</Button> */}
                            </ButtonGroup>
                        }
                    </Row>
                </Form>
            </div>
        </Container>

    )

}

export default Detalles