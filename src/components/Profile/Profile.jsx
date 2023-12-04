import { useContext, useState, useEffect } from "react"
import { Form, Button, Modal, Row, Col, Container, Image } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import userService from "../../services/user.services"

const Profile = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: '',
        carModel: '',
        carColor: '',
        imageUrl: ''

    })

    const [showModal, setShowModal] = useState(false)

    const navigate = useNavigate()

    const { loggedUser } = useContext(AuthContext);

    const getUser = (id) => {
        userService
            .getById(id)
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setUserData({ ...userData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        userService
            .updateUser(loggedUser._id, userData)
            .then(() => setShowModal(true))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUser(loggedUser._id)
    }, [])

    return (
        <Container className="d-flex align-items-center justify-content-center">
            <div className="justify-content-center align-items-center mx-auto">
                <div className=" d-flex align-items-center mx-auto justify-content-center ">
                    <h1>Perfil</h1>

                </div>
                <Form onSubmit={handleFormSubmit}>
                    <Col xs={2} md={6} ms={3} bg={3} className="d-flex align-items-center mx-auto">
                        <Image className="imgProfile d-flex align-items-center mx-auto" src={(userData.imageUrl != null && userData.imageUrl !== "") ? userData.imageUrl : "../../../public/icono_sin.avif"} roundedCircle />
                    </Col>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={userData.email} onChange={handleInputChange} name="email" />
                            </Form.Group>
                        </Col>


                        {/* <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" value={userData.password} onChange={handleInputChange} name="password" />
                        </Form.Group> */}
                        <Col>
                            <Form.Group>
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" value={userData.username} onChange={handleInputChange} name="username" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="carModel">
                        <Form.Label>Modelo de coche</Form.Label>
                        <Form.Control type="text" value={userData.carModel} onChange={handleInputChange} name="carModel" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="carColor">
                        <Form.Label>Color del coche</Form.Label>
                        <Form.Control type="text" value={userData.carColor} onChange={handleInputChange} name="carColor" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="imageUrl">
                        <Form.Label>Foto de perfil</Form.Label>
                        <Form.Control type="text" value={userData.imageUrl} onChange={handleInputChange} name="imageUrl" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="primary" type="submit">Actualizar</Button>
                    </div>

                </Form>

                <Modal show={showModal} onHide={() => navigate('/')}>
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizado</Modal.Title>
                    </Modal.Header>
                </Modal>
            </div>

        </Container>
    )
}

export default Profile