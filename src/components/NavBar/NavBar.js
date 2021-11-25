import React from "react";
import "./NavBar.scss";
import { MdMenu } from "react-icons/md";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-md shadow header">
            <div className="header__logo">
                <a href="./index.html" className="navbar-brand logo__link">
                    <img
                        src={require("../../img/vinyl.png").default}
                        alt=""
                        width="60"
                        height="60"
                        className="d-inline-block"
                    />
                    VinylRec
                </a>
            </div>
            <CartWidget />
            <button
                className="navbar-toggler header__button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {" "}
                <MdMenu />{" "}
            </button>
            <nav className="collapse navbar-collapse justify-content-end header__nav" id="navbarNav">
                <ul className="navbar-nav">
                    <a href="./index.html" className="nav-link">
                        <li className="nav-item">Inicio</li>{" "}
                    </a>
                    <a href="./pages/about.html" className="nav-link">
                        <li className="nav-item">Nosotros</li>
                    </a>
                    <a href="./pages/contact.html" className="nav-link">
                        <li className="nav-item">Contacto</li>
                    </a>
                    <a href="./pages/help.html" className="nav-link">
                        <li className="nav-item">Ayuda</li>
                    </a>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
