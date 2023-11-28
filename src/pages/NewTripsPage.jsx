import React from 'react';
import { Container } from 'react-bootstrap';
import NewTripForm from '../components/NewTripForm/NewTripFrom'

const NewTripPage = () => {
    return (
        <div className="NewTripPage">
            <Container>
                <h1>Nuevo viaje </h1>
                <hr></hr>
                <NewTripForm />
            </Container>
        </div>
    );
}

export default NewTripPage;
