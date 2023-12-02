
import { ButtonGroup, Button, Card, Col } from "react-bootstrap"
import '../NewTripForm/TripsCard.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"


const TripsCard = ({ _id, origin, destination, date, time, price, availableSeats, owner }) => {

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
            <article className='TripsCard mb-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>Origin: {origin}</Card.Title>
                        <Card.Title>Destination: {destination}</Card.Title>
                        <Card.Title>Date: {formatDate(date)}</Card.Title>
                        {/* <Card.Title>Time: {time}</Card.Title>
                        <Card.Title>Price: {price}</Card.Title>
                        <Card.Title>AvailableSeats: {availableSeats}</Card.Title> */}
                        <div className="d-grid">
                            <hr></hr>

                            <Link to={`/detalles/${_id}`} className="btn btn-primary btn-sm">
                                <ButtonGroup style={{ width: '100%' }}>
                                    <Button variant='dark' size='sm'>
                                        Ver Detalles
                                    </Button>
                                    {loggedUser._id === owner &&
                                        <Button className="btn btn-dark btn-sm">Editar</Button>}
                                </ButtonGroup>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </article>
        </Col>
    )
}


export default TripsCard