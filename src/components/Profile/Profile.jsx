import { useContext, useState, useEffect } from "react"
import { Form, Button, Modal, Row, Col, Container, Image } from "react-bootstrap"


import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import userService from "../../services/user.services"
import uploadServices from '../../services/upload.services'

const Profile = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: '',
        carModel: '',
        carColor: '',
        imageUrl: ''

    })
    const [loadingImage, setLoadingImage] = useState(true)

    const [showModal, setShowModal] = useState(false)

    const Navigate = useNavigate()

    const { loggedUser } = useContext(AuthContext);

    const getUser = () => {
        userService
            .getById(loggedUser._id)
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

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setUserData({ ...userData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)

            })
            .catch(err => {
                console.log(err)
                setLoadingImage(true)
            })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ marginBottom: '20px' }}>
            <div className="justify-content-center align-items-center mx-auto">
                <div className=" d-flex align-items-center mx-auto justify-content-center ">
                    <h1>Perfil</h1>

                </div>
                <Form onSubmit={handleFormSubmit}>
                    <Col xs={2} md={6} ms={3} bg={3} className="d-flex align-items-center mx-auto">
                        <Image className="imgProfile d-flex align-items-center mx-auto" src={(userData.imageUrl != null && userData.imageUrl !== "") ? userData.imageUrl : "../../../public/icono_sin.png"} roundedCircle />
                    </Col>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={userData.email} onChange={handleInputChange} name="email" />
                            </Form.Group>
                        </Col>

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

                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" onChange={handleFileUpload} />
                        </Form.Group>
                    </Col>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">Actualizar</Button>
                    </div>

                </Form>

                <Modal show={showModal} onHide={() => Navigate('/')}>
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizado</Modal.Title>
                    </Modal.Header>
                </Modal>
            </div>

        </Container>
    )
}

export default Profile