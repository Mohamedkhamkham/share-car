import React from 'react';
import NewTripForm from '../components/NewTripForm/NewTripForm'
import { useNavigate } from 'react-router-dom'

const NewTripPage = () => {
    const navigate = useNavigate()

    const redirectToMisViajes = () => {
        navigate('/viajes')
    }

    return (
        <NewTripForm fireFinalActions={redirectToMisViajes} />

    );
}

export default NewTripPage;