import React from "react";
import Button from "../Components/button";
const ButtonPage = () => {

    function handleClick(e) {
        e.preventDefault();
        alert("This function is working...")
    }
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h3>Button Component</h3>
                    <p>Buttons can be used to perform some user required functionalities.</p>
                    <hr />
                    <h5>Component Example:</h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <Button value="Save" type="button" styleClass='btn-secondary' onClick={handleClick} /> <br /><br />
                            <Button value="Submit" type="submit" styleClass='btn-primary' onClick={handleClick} /> <br /><br />
                        </div>
                    </div>
                    <div className="alert alert-primary mt-2">How to use the button component?</div>
                    <h6 className="mt-2">Import the button component to a React Component </h6>
                    <strong>Add the component on React file pass in the - the compoent recieves the below props: <br />
                        <em>
                            type <br />
                            value <br />
                            styleClass<br />
                            onClick <br />
                        </em>
                    </strong>

                    <div className="row mb-5 mt-5">
                        <div className="col-lg-12 shadow py-10 px-10">
                            <pre className="mt-5 mb-5">
                                <code>
                                    import Button from ".../components/button";
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    function Form()  &#123;
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    return
                                    &#40;
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    &lt;Button type="button"  value="Submit" styleClass="btn-secondary"  onClick="function" /&gt;
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    &#41; &#125;
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    export default Form;
                                </code>
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ButtonPage;