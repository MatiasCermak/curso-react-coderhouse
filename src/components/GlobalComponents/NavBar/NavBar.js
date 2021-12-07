import React, { useContext } from "react";
import "./NavBar.scss";
import { MdMenu } from "react-icons/md";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const NavBar = () => {
    const { isEmpty } = useContext(CartContext);
    return (
        <header className="navbar navbar-expand-md shadow header">
            <div className="header__logo">
                <Link to="/" className="navbar-brand logo__link">
                    <img
                        src={require("../../../img/vinyl.png").default}
                        alt=""
                        width="60"
                        height="60"
                        className="d-inline-block"
                    />
                    VinylRec
                </Link>
            </div>
            {isEmpty() ? "" : <CartWidget />}
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
                    <Link to="/" className="nav-link">
                        <li className="nav-item">Inicio</li>{" "}
                    </Link>
                    <Link to="/about" className="nav-link">
                        <li className="nav-item">Nosotros</li>
                    </Link>
                    <Link to="/contact" className="nav-link">
                        <li className="nav-item">Contacto</li>
                    </Link>
                    <Link to="/help" className="nav-link">
                        <li className="nav-item">Ayuda</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
