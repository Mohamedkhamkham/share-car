
import { ButtonGroup, Button, Card, Col } from "react-bootstrap"
import '../NewTripForm/TripsCard.css'
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/auth.context"

import { useState } from 'react'
import heartOn from './../../assets/corazon-relleno.svg'
import heartOff from './../../assets/corazon-sin-relleno.svg'
import FavoritosService from "../../services/favoritos.services"



const TripsCard = ({ _id, origin, destination, date, time, price, availableSeats, owner, image }) => {

    const { loggedUser } = useContext(AuthContext)
    // const { trip_id } = useParams()
    const body = {
        user_id: loggedUser._id,
        trip_id: _id
    }
    const [like, setLike] = useState([])
    const [trips, setTrips] = useState([])

    const agregarFavSubmit = e => {
        e.preventDefault()
        setLike(_id);
        FavoritosService
            .favoritoTrip(body)
            .then(() => {
                console.log(false)
            })
            .catch(err => console.log(err))
    }

    const cancelarFavSubmit = e => {
        e.preventDefault()
        setLike([]);
        FavoritosService
            .favoritoTrip(body)
            .then(() => {
                console.log(false)
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
                const newIdsFavoritos = data.trips;
                console.log("Fav from API:", newIdsFavoritos); // Log to check the data
                setTrips(newIdsFavoritos);
            })
            .catch(err => console.log(err))
    }


    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article clasName='TripsCard mb-3'>
                <Card>
                    <Card.Img variant="top" src={image} className="img-fluid" />
                    <Card.Body>
                        <Card.Title className="mb-2">Origen: {origin}</Card.Title>
                        <Card.Title className="mb-2">Destino: {destination}</Card.Title>
                        <Card.Title className="mb-2">Fecha: {formatDate(date)}</Card.Title>
                        {/* <Link to="/" className="nav-link"> */}
                        <div className="LikeButton" onClick={like ? agregarFavSubmit : cancelarFavSubmit}>
                            <img src={trips.includes(_id) ? heartOn : heartOff} alt="" />
                        </div>
                        {/* </Link> */}
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