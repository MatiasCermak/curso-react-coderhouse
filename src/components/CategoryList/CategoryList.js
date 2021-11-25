import React from "react";
import "./CategoryList.scss";

const CategoryList = () => {
    return (
        <section class="d-flex flex-wrap categories">
            <ul class="categories__list d-flex flex-row flex-wrap justify-content-around w-100">
                <li class="categorias-list-item">
                    <a href="#" class="categorias-list-link">
                        Pop
                    </a>
                </li>
                <li class="categorias-list-item">
                    <a href="#" class="categorias-list-link">
                        Electro
                    </a>
                </li>
                <li class="categorias-list-item">
                    <a href="#" class="categorias-list-link">
                        Rock
                    </a>
                </li>
                <li class="categorias-list-item">
                    <a href="#" class="categorias-list-link">
                        Heavy Metal
                    </a>
                </li>
                <li class="categorias-list-item">
                    <a href="#" class="categorias-list-link">
                        Blues
                    </a>
                </li>
                <li class="categorias-list-item">
                    <a href="#" class="categorias-list-link">
                        Clásico
                    </a>
                </li>
                <li class="categorias-list-item">
                    <a href="#" class="categorias-list-link">
                        Jazz
                    </a>
                </li>
                <li class="categorias-list-item">
                    <a href="#" class="categorias-list-link">
                        Hip-Hop
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default CategoryList;
