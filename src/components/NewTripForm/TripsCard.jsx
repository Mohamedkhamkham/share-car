
import { ButtonGroup, Button, Card, Col } from "react-bootstrap"
import '../NewTripForm/TripsCard.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"


const TripsCard = ({ _id, origin, destination, date, time, price, availableSeats, owner, image }) => {

    const { loggedUser } = useContext(AuthContext)


    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear().toString();
        const month = (d.getMonth() + 101).toString().substring(1);
        const day = (d.getDate() + 100).toString().substring(1);
        return day + "-" + month + "-" + year;
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
                        <hr />

                        <div className="d-grid gap-2">
                            <Link to={`/detalles/${_id}`} className="btn btn-primary btn-sm">
                                Ver Detalles
                            </Link>
                            {loggedUser._id === owner && (
                                <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm">
                                    Editar
                                </Link>
                                // <Button variant='dark' size='sm'>
                                // Editar
                                // </Button>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </article>
        </Col>
    )
}


export default TripsCard