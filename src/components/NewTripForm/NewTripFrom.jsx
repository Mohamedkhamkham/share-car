import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import TripService from '../services/tripsServices'

const NewTripForm = () => {

    const [tripData, setTripData] = useState({
        origin: '',
        destination: '',
        date: 0,
        time: 0,
        availableSeats: 0,
        price: 0
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setTripData({ ...tripData, [name]: value })
    }

    const handleTripSubmit = e => {
        e.preventDefault()

        TripService
            .saveTrip(tripData)
            .then(response => console.log('funciona'))

    }

    return (
        <div className="NewTripForm">
            <Form onSubmit={handleTripSubmit}>
                <Form.Group className="ms-5" controlId="origin">
                    <Form.Label>origin</Form.Label>
                    <Form.Control type="text" value={tripData.origin} name="origin" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="ms-5" controlId="destination">
                    <Form.Label>destination</Form.Label>
                    <Form.Control type="text" value={tripData.destination} name="destination" onChange={handleInputChange} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="ms-5" controlId="Date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="Date" value={tripData.date} name="Date" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="Time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="number" value={tripData.time} name="Time" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="availableSeats">
                            <Form.Label>availableSeats</Form.Label>
                            <Form.Control type="number" value={tripData.availableSeats} name="availableSeats" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="price">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="number" value={tripData.price} name="price" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid mb-2">

                    <Button variant="primary" type="submit">
                        Crear nuevo viaje
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default NewTripForm;
