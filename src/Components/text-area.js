import React from "react";

const TextArea = (props) => {
    return (
        <div className="mb-3">
            <textarea className={`form-control  ${props.styleClass}`}
                id={props.id} rows={props.rows} onChange={(e) => props.onChange(e)}>
            </textarea>
        </div>
    )
}
export default TextArea;