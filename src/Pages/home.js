import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/icons/logo2.png";
const Home = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={logo} alt="logo" width="72" />
            <h1 className="display-5 fw-bold">Components UI</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Is simple React UI library designed and developed with functionalities to help  to build small and large scale applicaions. The UI includes, button, input text, select input, text area, radio toogle and table components.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/demo" type="button" className="btn btn-secondary btn-lg px-4 gap-3" style={{ paddingTop: "11px" }}>Demo App</Link>
                </div>
            </div>
        </div>
    )
}
export default Home;