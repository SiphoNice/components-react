import React from "react";

const Button = ({ styleClass, value, onClick, type }) => {
    return (
        <>
            <button type={type} className={`btn shadow ${styleClass}`} onClick={onClick}>
                {value}
            </button>
        </>
    )
}

export default Button;