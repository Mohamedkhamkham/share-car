import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import TripService from '../../services/trips.services'

const NewTripForm = ({ fireFinalActions }) => {

    const [tripData, setTripData] = useState({
        origin: '',
        destination: '',
        date: '',
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
            .then(() => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
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
                        <Form.Group className="ms-5" controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" value={tripData.date} name="date" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="ms-5" controlId="time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="number" value={tripData.time} name="time" onChange={handleInputChange} />
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

{/* <TextField
    id="datetime-local"
    label="Next appointment"
    type="datetime-local"                   //https://v4.mui.com/es/components/pickers/
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    InputLabelProps={{
        shrink: true,
    }}
/> */}
