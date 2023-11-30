
import { Card, Col } from "react-bootstrap"
import '../NewTripForm/TripsCard.css'
import { Link } from "react-router-dom"


const TripsCard = ({ _id, origin, destination, date, time, price, availableSeats }) => {


    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear().toString();
        const month = (d.getMonth() + 101).toString().substring(1);
        const day = (d.getDate() + 100).toString().substring(1);
        const hour = (d.getHours()).toString();
        const mins = (d.getMinutes()).toString();
        return hour + ":" + mins + " " + day + "-" + month + "-" + year;
    }



    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article className='TripsCard mb-3'>
                <Card>
                    <Card.Body>
                        <Card.Title>Origin: {origin}</Card.Title>
                        <Card.Title>Destination: {destination}</Card.Title>
                        <Card.Title>Date: {formatDate(date)}</Card.Title>
                        <Card.Title>Time: {time}</Card.Title>
                        <Card.Title>Price: {price}</Card.Title>
                        <Card.Title>AvailableSeats: {availableSeats}</Card.Title>
                        <Card.Title>AvailableSeats: {_id}</Card.Title>
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