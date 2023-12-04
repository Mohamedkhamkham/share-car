import TripsCard from './TripsCard'
import { Row } from 'react-bootstrap'

const TripsList = ({ trips }) => {
    return (
        !trips ?
            <h1>cargando</h1>
            :
            <>
                <Row>
                    {
                        trips.map(elm => <TripsCard {...elm} key={elm._id} />)
                    }
                </Row>
            </>
    )
}

export default TripsList



