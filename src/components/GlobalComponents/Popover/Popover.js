import React, { useState, useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Popover.scss";

const PopoverContext = React.createContext();

const Popover = ({ text, children }) => {
    const [contextState, setContextState] = useState({ popoverText: text, isActive: false });
    const stateSend = { state: contextState, setterFn: setContextState };
    return (
        <PopoverContext.Provider value={stateSend}>
            <PopoverTrigger>{children}</PopoverTrigger>
        </PopoverContext.Provider>
    );
};

const PopoverTrigger = ({ children }) => {
    const popoverContext = useContext(PopoverContext);
    const handleClick = () =>
        popoverContext.setterFn({
            popoverText: popoverContext.state.popoverText,
            isActive: !popoverContext.state.isActive,
        });

    return (
        <div className="popover__container" onClick={handleClick}>
            {children}
        </div>
    );
};

const PopoverContent = () => {
    const popoverContext = useContext(PopoverContext);
    return (
        popoverContext.state.isActive && (
            <div className="popover__content">
                <PopoverCloseButton />
                {popoverContext.state.popoverText}
            </div>
        )
    );
};

const PopoverCloseButton = () => {
    const popoverContext = useContext(PopoverContext);
    const handleClick = () =>
        popoverContext.setterFn({
            popoverText: popoverContext.state.popoverText,
            isActive: !popoverContext.state.isActive,
        });

    return (
        <div className="icon__container" onClick={handleClick}>
            <AiFillCloseCircle />
        </div>
    );
};

export default { Popover, PopoverTrigger };
