import "./CategoryList.scss";

import { NavLink } from "react-router-dom";
import React from "react";

const CategoryList = () => {
    return (
        <section className="d-flex flex-wrap categories">
            <ul className="categories__list d-flex flex-row flex-wrap justify-content-around w-100">
                <li className="categorias-list-item">
                    <NavLink
                        to="/category/pop"
                        className={({ isActive }) =>
                            isActive ? "categorias-list-link-active" : "categorias-list-link"
                        }
                    >
                        Pop
                    </NavLink>
                </li>
                <li className="categorias-list-item">
                    <NavLink
                        to="/category/electro"
                        className={({ isActive }) =>
                            isActive ? "categorias-list-link-active" : "categorias-list-link"
                        }
                    >
                        Electro
                    </NavLink>
                </li>
                <li className="categorias-list-item">
                    <NavLink
                        to="/category/rock"
                        className={({ isActive }) =>
                            isActive ? "categorias-list-link-active" : "categorias-list-link"
                        }
                    >
                        Rock
                    </NavLink>
                </li>
                <li className="categorias-list-item">
                    <NavLink
                        to="/category/heavy-metal"
                        className={({ isActive }) =>
                            isActive ? "categorias-list-link-active" : "categorias-list-link"
                        }
                    >
                        Heavy Metal
                    </NavLink>
                </li>
                <li className="categorias-list-item">
                    <NavLink
                        to="/category/blues"
                        className={({ isActive }) =>
                            isActive ? "categorias-list-link-active" : "categorias-list-link"
                        }
                    >
                        Blues
                    </NavLink>
                </li>
                <li className="categorias-list-item">
                    <NavLink
                        to="/category/classic"
                        className={({ isActive }) =>
                            isActive ? "categorias-list-link-active" : "categorias-list-link"
                        }
                    >
                        Clásico
                    </NavLink>
                </li>
                <li className="categorias-list-item">
                    <NavLink
                        to="/category/jazz"
                        className={({ isActive }) =>
                            isActive ? "categorias-list-link-active" : "categorias-list-link"
                        }
                    >
                        Jazz
                    </NavLink>
                </li>
                <li className="categorias-list-item">
                    <NavLink
                        to="/category/hip-hop"
                        className={({ isActive }) =>
                            isActive ? "categorias-list-link-active" : "categorias-list-link"
                        }
                    >
                        Hip-Hop
                    </NavLink>
                </li>
            </ul>
        </section>
    );
};

export default CategoryList;
