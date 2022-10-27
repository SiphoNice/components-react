import React from "react";
import { Link } from "react-router-dom";
import table_icon from "../Assets/images/icons/table-icon.png";
import button_icon from "../Assets/images/icons/button-icon.png";
import toggle_icon from "../Assets/images/icons/toggle-icon.png";
import select_icon from "../Assets/images/icons/select-icon.png";
import textarea_icon from "../Assets/images/icons/textarea-icon.png";
import text_icon from "../Assets/images/icons/text-icon.png";
import logo from "../Assets/images/icons/logo.png";
const Nav = () => {
    return (
        <>
            <header>
                <div className="px-3 py-2 text-bg-dark shadow">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <img src={logo} className="bi d-block mx-auto mb-1" width="40" alt="Input Text" />
                            </Link>
                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <Link to="/button" className="nav-link text-white">
                                        <img src={button_icon} className="bi d-block mx-auto mb-1" width="24" alt="button" />
                                        Button
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/input-text" className="nav-link text-white">
                                        <img src={text_icon} className="bi d-block mx-auto mb-1" width="24" alt="Input Text" />
                                        Input Text
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/select-input" className="nav-link text-white">
                                        <img src={select_icon} className="bi d-block mx-auto mb-1" width="24" alt="Select Input" />
                                        Select Input
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/text-area" className="nav-link text-white">
                                        <img src={textarea_icon} className="bi d-block mx-auto mb-1" width="24" alt="Text Area" />
                                        Text area
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/radio-button" className="nav-link text-white">
                                        <img src={toggle_icon} className="bi d-block mx-auto mb-1" width="24" alt="Table" />
                                        Radio button toggle
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/table" className="nav-link text-white">
                                        <img src={table_icon} className="bi d-block mx-auto mb-1" width="24" alt="Table" />
                                        Table
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Nav;

