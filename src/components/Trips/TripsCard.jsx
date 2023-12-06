import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import heartOn from './../../assets/corazon-relleno.svg';
import heartOff from './../../assets/corazon-sin-relleno.svg';
import FavoritosService from "../../services/favoritos.services";
import { formatDate } from "../../utils/date-utils";
import './TripsCard.css'; // Importa tu hoja de estilos

const TripsCard = ({ _id, origin, destination, date, image, userFavs }) => {
    const { loggedUser } = useContext(AuthContext);

    const [isFavorite, setIsFavorite] = useState(userFavs?.some(fav => fav._id === _id));

    const addFavorite = () => {
        const body = {
            user_id: loggedUser._id,
            trip_id: _id
        };

        FavoritosService.favoritoTrip(body)
            .then(({ data }) => {
                setIsFavorite(!isFavorite);
            })
            .catch(err => console.log(err));
    };

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
                            <img src={isFavorite ? heartOn : heartOff} />
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
