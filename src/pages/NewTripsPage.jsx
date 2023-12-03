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
        <NewTripForm fireFinalActions={redirectToMisViajes} />

    );
}

export default NewTripPage;