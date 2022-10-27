import React from "react";

const SelectInpt = (props) => {

    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
            <select className={`form-select ${props.styleClass}`} value={props.value} onChange={handleChange}>
                <option value="">{props.placeholder}</option>
                {props.data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}
                        label={item.label}
                    >
                    </option>
                ))}
            </select>
        </>
    )
}

export default SelectInpt;