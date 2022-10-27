import React from "react";

const Themes = ({ theme, setTheme }) => {
    return (
        <div className="themes-item" onClick={setTheme} style={{ '--bg-color': theme }}>
        </div>
    )
}
export default Themes;