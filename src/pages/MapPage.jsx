import MapRender from "../components/Map/Map";
import Carousel2 from "../components/Carousel/Carousel";
import { mapImages } from "../consts/trip-consts";

const MapPage = () => {

    return (
        <>
            <MapRender />
            <Carousel2 images={mapImages} />
        </>
    );
};

export default MapPage;
