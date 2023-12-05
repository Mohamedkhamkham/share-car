import React, { useState, useEffect } from "react";
import "../Carousel/Carousel.css";

function Carousel2(props) {
    const [position, setPosition] = useState(0);

    const LeftClick = () => {
        if (position > 0) {
            setPosition(position - 1);
        } else {
            setPosition(props.images.length - 1);
        }
    };

    const RigthClick = () => {
        if (position < props.images.length - 1) {
            setPosition(position + 1);
        } else {
            setPosition(0);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            RigthClick();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [position]);

    return (
        <div className="carousel-container">
            <div className="image-container">
                <img
                    src={props.images[position].src}
                    alt=""
                    className="carousel-image"
                />
                <div className="text-container">
                    {props.images[position].text}
                </div>
            </div>
        </div>
    );
}

export default Carousel2;
