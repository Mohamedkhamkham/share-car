import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import heartOn from './../../assets/corazon-relleno.svg'
import heartOff from './../../assets/corazon-sin-relleno.svg'
import FavoritosService from "../../services/favoritos.services"
import { formatDate } from "../../utils/date-utils"
import './TripsCard.css'

const TripsCard = ({ _id, origin, destination, date, image }) => {
    const { loggedUser } = useContext(AuthContext);

    const [userFavs, setUserFavs] = useState([])

    const addFavorite = () => {
        const body = {
            user_id: loggedUser._id,
            trip_id: _id
        };

        FavoritosService.favoritoTrip(body)
            .then(({ data }) => {
                setUserFavs(data.trips)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        loadFavs()
    }, [])

    const loadFavs = () => {
        FavoritosService
            .getFavoritos(loggedUser._id)
            .then((favs) => {
                if (favs.data.trips.length > 0) {
                    const ids = favs.data.trips.map(el => el._id)
                    setUserFavs(ids)
                }

            })
            .catch(err => console.log(err))

    }

    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article className='TripsCard mb-3'>
                <Card>
                    <Card.Img variant="top" src={image} className="" height="250px" />
                    <Card.Body>
                        <Card.Title className="mb-2">Origen: {origin}</Card.Title>
                        <Card.Title className="mb-2">Destino: {destination}</Card.Title>
                        <Card.Title className="mb-2">Fecha: {formatDate(date)}</Card.Title>

                        <div className="LikeButton" onClick={addFavorite}>
                            <img src={userFavs.includes(_id) ? heartOn : heartOff} />
                        </div>

                        <hr />

                        <div className="d-grid gap-2">
                            <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm">
                                Ver Detalles
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </article>
        </Col>
    );
};

export default TripsCard;
