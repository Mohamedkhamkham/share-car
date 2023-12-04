import { useState, useEffect } from 'react'
import { APIProvider, Map, Marker, useMarkerRef } from '@vis.gl/react-google-maps'
import { useNavigate } from 'react-router-dom'






const MapRender = () => {
    //  const [trip, setTrips] = useState([])

    //  const navigate = useNavigate()



    // useEffect(() => {
    //     loadTrips()
    // }, [])


    // const handleMarkerClick = (tripId) => {
    //     navigate(`/misViajes/${tripId}`)
    // }


    const mapStyle = {
        height: '400px',
        width: '100%',
    }
    // const loadEvents = () => {
    //     eventServices
    //         .getEvents()
    //         .then(({ data }) => {
    //             console.log('Eventos cargados:', data)
    //             setEvents(data)
    //         })
    //         .catch(err => console.log(err))
    // }




    // const loadTrips = () => {
    //     TripService
    //         .getTrips(loggedUser._id)
    //         .then(({ data }) => setTrips(data))
    //         .catch(err => console.log(err));
    // }



    return (
        <APIProvider apiKey={'apikey'}>
            <Map zoom={12} center={{ lat: 40.4169177926384, lng: -3.7036169094295338 }} style={mapStyle}>
                {/* {trip.map((trip) => (
                    <Marker
                        key={trip._id}
                        id={trip._id}
                        position={{
                            lat: trip.location.coordinates[1],
                            lng: trip.location.coordinates[0],
                        }}
                        onClick={() => handleMarkerClick(event._id)}
                    />
                ))} */}
            </Map>
        </APIProvider>

    )
}
export default MapRender