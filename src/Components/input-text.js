import React from "react";

const InputText = (props) => {

    return (
        <>
            <div className="mb-3">
                <input
                    type={props.type}
                    className={`form-control text-input ${props.styleClass}`}
                    id={props.inputId}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) => props.onChange(e)}
                />
            </div>
        </>
    )
}
export default InputText;