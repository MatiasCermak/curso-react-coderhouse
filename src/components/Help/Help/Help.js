import "./Help.scss";

import HelpAccordion from "../HelpAccordion/HelpAccordion";
import HelpForm from "../HelpForm/HelpForm";
import React from "react";

const Help = () => {
    return (
        <main class="main_help d-flex flex-column justify-content-center align-items-center">
            <h1 class="main_help__title fs-2">¿En que podemos ayudarte?</h1>
            <HelpAccordion />
            <HelpForm />
        </main>
    );
};

export default Help;
