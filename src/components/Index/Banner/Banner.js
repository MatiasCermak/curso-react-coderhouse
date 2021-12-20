import "./Banner.scss";

import React from "react";

const Banner = () => {
    return (
        <div className="banner d-flex flex-wrap">
            <div id="carouselExampleControls" className="carousel slide w-100 carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner w-100">
                    <div className="carousel-item w-100 active" data-bs-interval="2000">
                        <div
                            className="
                                    d-flex
                                    carousel-item__image
                                    w-100
                                    bg-banner-1
                                    align-items-center
                                    justify-content-center
                                "
                        >
                            <p>Esos grandes momentos</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div
                            className="
                                    d-flex
                                    carousel-item__image
                                    w-100
                                    bg-banner-2
                                    align-items-center
                                    justify-content-center
                                "
                        >
                            <p>Vivilos otra vez</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div
                            className="
                                    d-flex
                                    carousel-item__image
                                    w-100
                                    bg-banner-3
                                    align-items-center
                                    justify-content-center
                                "
                        >
                            <p>Con nosotros</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
