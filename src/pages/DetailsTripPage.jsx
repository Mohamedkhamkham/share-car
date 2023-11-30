import { useEffect, useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap';
import tripsService from "../services/trips.services"
import { useParams } from "react-router-dom"


const DetailsTripPage = () => {

    const { trip_id } = useParams()

    const [trip, setTrip] = useState({})

    useEffect(() => {
        loadTripDetails()
    }, [])

    const loadTripDetails = () => {
        tripsService
            .getTripDetails(trip_id)
            .then(({ data }) => setTrip(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="NewTripForm">
            <Form>
                <Form.Group className="ms-5" controlId="origin">
                    <Form.Label>origin</Form.Label>
                    <Form.Control type="text" value={trip.origin} name="origin" />
                </Form.Group>

                <Form.Group className="ms-5" controlId="destination">
                    <Form.Label>destination</Form.Label>
                    <Form.Control type="text" value={trip.destination} name="destination" />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="ms-5" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" value={trip.date} name="date" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="number" value={trip.time} name="time" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="availableSeats">
                            <Form.Label>availableSeats</Form.Label>
                            <Form.Control type="number" value={trip.availableSeats} name="availableSeats" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="price">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="number" value={trip.price} name="price" />
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