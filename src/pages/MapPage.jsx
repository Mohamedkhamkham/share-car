import Carousel from "../components/Carousel/Carousel"
import MapMarker from "../components/Map/MapMarker"
import { mapImages } from "../consts/trip-consts";

const MapPage = () => {
    return (
        <div>
            <Carousel images={mapImages} />
            <MapMarker />
        </div>
    )
}

export default MapPage

