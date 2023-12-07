import { useState, useEffect } from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { useNavigate } from 'react-router-dom'
import TripServices from '../../services/trips.services'
import '../Map/MapMarker.css'

const MapMarker = () => {
    const [trips, setTrips] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        loadEvents()
    }, [])

    const handleMarkerClick = (tripId) => {
        navigate(`/detalles/${tripId}`)
    }

    const mapStyle = {
        height: '400px',
        width: '60%',
    }
    const mapContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100px',
    }
    const loadEvents = () => {
        TripServices
            .getTrips()
            .then(({ data }) => {
                console.log('Eventos cargados:', data)
                setTrips(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div style={mapContainerStyle}>
            <APIProvider apiKey='AIzaSyC3RuJsUQ3759MGeXPIp02-hIREZpkrLqs'>
                <Map zoom={12} center={{ lat: 40.4169177926384, lng: -3.7036169094295338 }} style={mapStyle}>
                    {trips.map((trip) => (
                        <Marker
                            key={trip._id}
                            id={trip._id}
                            position={{
                                lng: trip.location.coordinatesDestination[1],
                                lat: trip.location.coordinatesDestination[0],
                            }}

                            onClick={() => handleMarkerClick(trip._id)}
                        />
                    ))}
                </Map>
            </APIProvider>
        </div>
    )
}

export default MapMarker

