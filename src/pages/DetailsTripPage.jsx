import { useEffect, useState } from "react"
import { Form, ButtonGroup, Button, Card, Col, Row, Container } from "react-bootstrap"
import TripService from "../services/trips.services"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../contexts/auth.context"

const DetailsTripPage = () => {
    // console.log(owner)
    const navigate = useNavigate()

    const { loggedUser } = useContext(AuthContext)

    const formatDate = (date) => {


        const fechaObjeto = new Date(date);

        const anio = fechaObjeto.getFullYear();
        const mes = String(fechaObjeto.getMonth() + 1).padStart(2, '0');
        const dia = String(fechaObjeto.getDate()).padStart(2, '0');

        const fechaFormateada = `${anio}-${mes}-${dia}`;

        return fechaFormateada

    }

    const { trip_id } = useParams()

    const [trip, setTrip] = useState({
        origin: "",
        destination: "",
        date: "",
        time: "",
        availableSeats: 0,
        price: 0,
        image: "",
        trip: 1
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
                navigate('/misViajes')
            })
            .catch(err => console.log(err))
    }

    const deleteTripSubmit = e => {
        e.preventDefault()

        TripService
            .deleteTrip(trip_id)
            .then(() => {
                navigate('/misViajes')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadTripDetails()
    }, [])

    const loadTripDetails = () => {
        TripService
            .getTripDetails(trip_id)
            .then(({ data }) => setTrip(data))
            .catch(err => console.log(err))
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
                                <Form.Label srOnly>Origen</Form.Label>
                                <Form.Control type="text" placeholder="Ej. Ciudad de origen" value={trip.origin} name="origin" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group controlId="destination">
                                <Form.Label srOnly>Destino</Form.Label>
                                <Form.Control type="text" placeholder="Ej. Ciudad de destino" value={trip.destination} name="destination" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Fecha, Hora, Asientos disponibles y Precio */}
                    <Row className="mb-3">
                        <Col md={3}>
                            <Form.Group controlId="date">
                                <Form.Label srOnly>Fecha</Form.Label>
                                <Form.Control type="date" value={formatDate(trip.date)} name="date" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="time">
                                <Form.Label srOnly>Hora</Form.Label>
                                <Form.Control type="time" value={trip.time} name="time" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="availableSeats">
                                <Form.Label srOnly>Asientos disponibles</Form.Label>
                                <Form.Control type="number" value={trip.availableSeats} name="availableSeats" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="price">
                                <Form.Label srOnly>Precio (Eur.)</Form.Label>
                                <Form.Control type="number" value={trip.price} name="price" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* URL de la Imagen */}
                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="image">
                                <Form.Label srOnly>URL de la Imagen</Form.Label>
                                <Form.Control type="text" placeholder="Ej. https://ejemplo.com/imagen.jpg" value={trip.image} name="image" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Botones */}
                    <Row>
                        {/* <div className="d-flex mb-3"> */}
                        {loggedUser._id === trip.owner &&
                            <ButtonGroup className="d-flex justify-content-center">
                                <Button variant="warning" size="lg" onClick={handleTripSubmit}>Editar</Button>
                                <Button variant="danger" size="lg" className="ms-2" onClick={deleteTripSubmit}>Eliminar</Button>
                            </ButtonGroup>
                        }
                        {/* </div> */}

                    </Row>
                </Form>
            </div>
        </Container>

    )
}

export default DetailsTripPage