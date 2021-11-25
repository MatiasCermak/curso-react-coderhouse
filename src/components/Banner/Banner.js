import React from "react";
import "./Banner.scss";

const Banner = () => {
    return (
        <div class="banner d-flex flex-wrap">
            <div id="carouselExampleControls" class="carousel slide w-100 carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner w-100">
                    <div class="carousel-item w-100 active" data-bs-interval="2000">
                        <div
                            class="
                                    d-flex
                                    carousel-item__image
                                    w-100
                                    bg-banner-1
                                    align-items-center
                                    justify-content-center
                                "
                        >
                            <p class="fs-2">Esos grandes momentos</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div
                            class="
                                    d-flex
                                    carousel-item__image
                                    w-100
                                    bg-banner-2
                                    align-items-center
                                    justify-content-center
                                "
                        >
                            <p class="fs-2">Vivilos otra vez</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div
                            class="
                                    d-flex
                                    carousel-item__image
                                    w-100
                                    bg-banner-3
                                    align-items-center
                                    justify-content-center
                                "
                        >
                            <p class="fs-2">Con nosotros</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;