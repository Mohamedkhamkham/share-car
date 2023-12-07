import { useContext, useEffect, useState } from 'react'
import TripsCard from './TripsCard'
import { Row } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'
import FavoritosService from '../../services/favoritos.services'

const TripsList = ({ trips }) => {

    const { loggedUser } = useContext(AuthContext)
    const [userFavs, setUserFavs] = useState({})

    useEffect(() => {
        loadFavs()
    }, [])

    const loadFavs = () => {
        FavoritosService
            .getFavoritos(loggedUser._id)
            .then(favs => { setUserFavs(favs.data) })
            .catch(err => console.log(err))

    }
    return (

        !trips ?
            <h1>cargando</h1>
            :
            <>
                <Row>
                    {
                        trips.map(elm => <TripsCard {...elm} key={elm._id} loadFavs={loadFavs} userFavs={userFavs.trips} />)
                    }
                </Row>
            </>
    )
}

export default TripsList



