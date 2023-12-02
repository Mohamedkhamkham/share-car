import { useEffect, useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap';
import TripService from "../services/trips.services"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


const DetailsTripPage = () => {

    const navigate = useNavigate()

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
        time: 0,
        availableSeats: 0,
        price: 0,
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
        <div className="NewTripForm">
            <Form onSubmit={handleTripSubmit}>
                <Form.Group className="ms-5" controlId="origin">
                    <Form.Label>origin</Form.Label>
                    <Form.Control type="text" value={trip.origin} name="origin" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="ms-5" controlId="destination">
                    <Form.Label>destination</Form.Label>
                    <Form.Control type="text" value={trip.destination} name="destination" onChange={handleInputChange} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="ms-5" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" value={formatDate(trip.date)} name="date" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="number" value={trip.time} name="time" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="availableSeats">
                            <Form.Label>availableSeats</Form.Label>
                            <Form.Control type="number" value={trip.availableSeats} name="availableSeats" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="price">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="number" value={trip.price} name="price" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid mb-2">
                    <Button variant="primary" type="submit">
                        Editar viaje
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default DetailsTripPage