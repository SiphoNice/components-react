import React from "react";
const RadioButton = (props) => {
    return (
        <>
            <div className="form-check form-switch">
                <input className={`form-check-input ${props.styleClass}`}
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    checked={props.checked}
                    onChange={props.onChange}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.label}</label>
            </div>

        </>
    )
}
export default RadioButton;