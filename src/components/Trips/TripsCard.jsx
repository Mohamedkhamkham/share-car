import { ButtonGroup, Button, Card, Col } from "react-bootstrap"
import '../Trips/TripsCard.css'
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { useState } from 'react'
import heartOn from './../../assets/corazon-relleno.svg'
import heartOff from './../../assets/corazon-sin-relleno.svg'
import FavoritosService from "../../services/favoritos.services"

const TripsCard = ({ _id, origin, destination, date, image }) => {

    const { loggedUser } = useContext(AuthContext)
    const body = {
        user_id: loggedUser._id,
        trip_id: _id
    }

    const [idsFavoritos, setIdsFavoritos] = useState([])

    const favorite = e => {
        e.preventDefault()
        FavoritosService
            .favoritoTrip(body)
            .then(({ data }) => {
                const recu = data.trips.map(el => el)
                setIdsFavoritos(recu);
            })
            .catch(err => console.log(err))
    }

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear().toString();
        const month = (d.getMonth() + 101).toString().substring(1);
        const day = (d.getDate() + 100).toString().substring(1);
        return day + "-" + month + "-" + year;
    }

    useEffect(() => {
        loadTrips(loggedUser._id)
    }, [loggedUser._id]);

    const loadTrips = (id) => {
        FavoritosService
            .getFavoritos(id)
            .then(({ data }) => {
                setIdsFavoritos(data.trips.map(el => el._id));
            })
            .catch(err => console.log(err))
    }

    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article className='TripsCard mb-3'>
                <Card>
                    <Card.Img variant="top" src={image} className="img-fluid" />
                    <Card.Body>
                        <Card.Title className="mb-2">Origen: {origin}</Card.Title>
                        <Card.Title className="mb-2">Destino: {destination}</Card.Title>
                        <Card.Title className="mb-2">Fecha: {formatDate(date)}</Card.Title>

                        <div className="LikeButton" onClick={favorite}>
                            <img src={idsFavoritos.includes(_id) ? heartOn : heartOff} alt="" />
                        </div>

                        <hr />

                        <div className="d-grid gap-2">
                            <Link to={`/detalles/${_id}`} className="btn btn-primary btn-sm">
                                Ver Detalles
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </article>
        </Col>
    )
}

export default TripsCard