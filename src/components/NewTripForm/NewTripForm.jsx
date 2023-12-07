import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react'
import TripService from '../../services/trips.services'
import uploadServices from '../../services/upload.services'
import FormError from '../FormError/FormError'
// import ReactGoogleAutocomplete from "react-google-autocomplete"
// import CityForm from '../BuscadorGoogle/CityForm'


const NewTripForm = ({ fireFinalActions }) => {
    // const api = "AIzaSyC3RuJsUQ3759MGeXPIp02-hIREZpkrLqs"
    const [tripData, setTripData] = useState({
        origin: "",
        destination: "",
        date: "",
        time: "",
        availableSeats: 0,
        price: 0,
        image: "",
        trip: 1,
        owner: 1,
        latitudeOrigin: '',
        longitudeOrigin: '',
        latitudeDestination: '',
        longitudeDestination: ''

    })

    const [loadingImage, setLoadingImage] = useState(true)
    const [errors, setErrors] = useState([])

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
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })

    }

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setTripData({ ...tripData, image: res.data.cloudinary_url })
                setLoadingImage(false)

            })
            .catch(err => {
                console.log(err)
                setLoadingImage(true)
            })
    }

    const [selectedPlace, setSelectedPlace] = useState({
        formatted_address: tripData.origin,
    });

    const handlePlaceSelected = (place, fieldName) => {
        const value = place.formatted_address;
        setTripData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

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


                    {/* <Form.Group className="mb-3" controlId="longitudeOrigin">
                        <Form.Label>longitude Origin: </Form.Label>
                        <Form.Control type="text" value={tripData.longitudeOrigin} name="longitudeOrigin" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="latitudeOrigin">
                        <Form.Label>latitude Origin: </Form.Label>
                        <Form.Control type="text" value={tripData.latitudeOrigin} name="latitudeOrigin" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="longitudeDestination">
                        <Form.Label>longitude Destination: </Form.Label>
                        <Form.Control type="text" value={tripData.longitudeDestination} name="longitudeDestination" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="latitudeDestination">
                        <Form.Label>latitude Destination: </Form.Label>
                        <Form.Control type="text" value={tripData.latitudeDestination} name="latitudeDestination" onChange={handleInputChange} />
                    </Form.Group> */}

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
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>
                        </Col>

                    </Row>

                    <div className="d-grid mb-2">
                        {errors.length > 0 && (
                            <FormError>
                                {errors.map((elm, index) => (
                                    <p key={index}>{elm}</p>
                                ))}
                            </FormError>
                        )}

                        <Button variant="dark" type="submit" disabled={loadingImage}
                        >
                            Crear nuevo viaje
                        </Button>
                    </div>
                </Form>
            </div>


        </Container>
    )
}

export default NewTripForm;

