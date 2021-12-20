import "./HelpAccordion.scss";

import React from "react";

const HelpAccordion = () => {
    return (
        <section className="container h-100">
            <div className="main_help__faq">
                <h2 className="faq__title title center">Preguntas Frecuentes - FAQs</h2>
                <div className="accordion accordion-flush faq__accordion shadow" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                ¿Los discos son originales?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat earum, aut quis nemo
                                soluta animi assumenda rerum inventore non. Atque explicabo accusantium dolorum
                                consectetur quis error, saepe doloremque vero veritatis?
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                ¿Hacen envío de discos al interior de Córdoba?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos cumque eum praesentium
                                similique iusto doloremque! Obcaecati ullam vitae, explicabo, eaque, modi commodi
                                aperiam magnam voluptatem laudantium sit debitis. Laborum consectetur aspernatur quos
                                magni autem porro sunt consequatur? Doloribus, minima.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                ¿Puedo pagar con transferencia?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem porro enim at velit in
                                quibusdam inventore delectus nulla accusamus cupiditate a perspiciatis, cumque tempora
                                commodi cum neque. Voluptatibus ipsum corrupti accusantium, quam ad esse doloribus quod
                                modi nulla. Deleniti magni blanditiis repellat debitis neque, nostrum omnis expedita
                                quam accusamus sunt.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseFour"
                            >
                                ¿Tienen locales en otras provincias?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos cumque eum praesentium
                                similique iusto doloremque! Obcaecati ullam vitae, explicabo, eaque, modi commodi
                                aperiam magnam voluptatem laudantium sit debitis. Laborum consectetur aspernatur quos
                                magni autem porro sunt consequatur? Doloribus, minima.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpAccordion;
