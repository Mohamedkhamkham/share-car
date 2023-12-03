import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import TripService from '../../services/trips.services'

const NewTripForm = ({ fireFinalActions }) => {

    const [tripData, setTripData] = useState({
        origin: '',
        destination: '',
        date: '',
        time: "",
        availableSeats: 0,
        price: 0,
        image: ''
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
        <Container className="d-flex align-items-center justify-content-center ">
            <div className="newTripPage">
                <Form onSubmit={handleTripSubmit}>
                    <Form.Group className="mb-3" controlId="origin">
                        <Form.Label>Origen: </Form.Label>
                        <Form.Control type="text" value={tripData.origin} name="origin" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="destination">
                        <Form.Label>Destino: </Form.Label>
                        <Form.Control type="text" value={tripData.destination} name="destination" onChange={handleInputChange} />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label>Fecha: </Form.Label>
                                <Form.Control type="date" value={tripData.date} name="date" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="time">
                                <Form.Label>Hora: </Form.Label>
                                <Form.Control type="time" value={tripData.time} name="time" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="availableSeats">
                                <Form.Label>Asientos Disponinles</Form.Label>
                                <Form.Control type="number" value={tripData.availableSeats} name="availableSeats" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" value={tripData.price} name="price" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>Url de la Imagen: </Form.Label>
                                <Form.Control type="text" value={tripData.image} name="image" onChange={handleInputChange} />
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
        </Container>
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
