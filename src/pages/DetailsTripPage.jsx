import { useEffect, useState } from "react"
import { Form, ButtonGroup, Button, Card, Col, Row, Container } from "react-bootstrap"
import TripService from "../services/trips.services"
import ReservaService from "../services/reserva.services"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../contexts/auth.context"
import uploadServices from '../services/upload.services'
import Detalles from "../components/Detalles/Detalles"

const DetailsTripPage = () => {
    return (
        <Detalles />
    )
}

export default DetailsTripPage