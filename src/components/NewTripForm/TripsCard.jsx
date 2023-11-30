
import { Card, Col } from "react-bootstrap"
import '../NewTripForm/TripsCard.css'
import { Link } from "react-router-dom"


const TripsCard = ({ _id, origin, destination, date, time, price, availableSeats }) => {
    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article className='TripsCard mb-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>Origin: {origin}</Card.Title>
                        <Card.Title>Destination: {destination}</Card.Title>
                        <Card.Title>Date: {date}</Card.Title>
                        <Card.Title>Time: {time}</Card.Title>
                        <Card.Title>Price: {price}</Card.Title>
                        <Card.Title>AvailableSeats: {availableSeats}</Card.Title>
                        <div className="d-grid">
                            <Link to={`/detalles/${_id}`} className="btn btn-primary btn-sm">Ver detalles</Link>
                        </div>
                    </Card.Body>
                </Card>
            </article>
        </Col>
    )
}


export default TripsCard