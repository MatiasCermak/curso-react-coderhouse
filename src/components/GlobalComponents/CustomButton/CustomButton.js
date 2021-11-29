import "./CustomButton.scss";
import { Link } from "react-router-dom";
import { JSXElementConstructor } from "react";

const CustomButton = ({ text, handleClick, to }) => {
    const varButton = to !== undefined;
    if (varButton) {
        return (
            <Link
                to={to}
                className="btn customButton d-flex align-items-center justify-content-center "
                onClick={() => handleClick()}
            >
                {text}
            </Link>
        );
    } else {
        return (
            <button className="customButton" onClick={() => handleClick()}>
                {text}
            </button>
        );
    }
};

export default CustomButton;
