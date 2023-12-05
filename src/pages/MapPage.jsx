import MapRender from "../components/Map/Map";
import Carousel2 from "../components/Carousel/Carousel";

const MapPage = () => {
    const images = [
        { src: '/src/assets/AhorroCo2.png', text: 'Al optar por el coche compartido, se logra una disminución significativa de las emisiones de CO2, contribuyendo activamente a la lucha contra el cambio climático.' },
        { src: '/src/assets/Ahorrocostes.png', text: 'Puedes ahorrar significativamente en combustible, estacionamiento y mantenimiento del vehículo.' },
        { src: '/src/assets/reduccionTrafico.png', text: 'Aumentar la ocupación media de los coches reduce el número de vehículos en circulación, disminuyendo los cuellos de botella en las carreteras ' },
    ];

    return (
        <>
            <MapRender />
            <Carousel2 images={images} />
        </>
    );
};

export default MapPage;
