import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"

import { useNavigate } from "react-router-dom"

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        username: '',
        carModel: '',
        carColor: '',

    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleFormSubmit}>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" value={signupData.username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="carModel">
                <Form.Label>Modelo de coche</Form.Label>
                <Form.Control type="text" value={signupData.carModel} onChange={handleInputChange} name="carModel" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="carColor">
                <Form.Label>Color del coche</Form.Label>
                <Form.Control type="text" value={signupData.carColor} onChange={handleInputChange} name="carColor" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="primary" type="submit">Registrarme</Button>
            </div>

        </Form>
    )
}

export default SignupForm