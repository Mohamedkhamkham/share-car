import React from 'react';
import { Container } from 'react-bootstrap'
import NewTripForm from '../components/NewTripForm/NewTripForm'
import { useNavigate } from 'react-router-dom'

const NewTripPage = () => {
    const navigate = useNavigate()

    const redirectToMisViajes = () => {
        navigate('/misViajes')
    }

    return (
        <div className="NewTripPage">
            <Container>
                <h1>Nuevo viaje </h1>
                <hr></hr>
                <NewTripForm fireFinalActions={redirectToMisViajes} />
            </Container>
        </div>
    );
}

export default NewTripPage;
