import React, { useState } from "react";
import RadioButton from "../Components/radio-button";

const RadioButtonTogglePage = () => {

    const [radio, setRadio] = useState("");
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h3>Radio Button Toggle Component</h3>
                    <p>Radio Button Toggle can be used to perform some user required functionalities.</p>
                    <hr />
                    <h5>Component Example:</h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Is it checked? {radio}</p>
                            <RadioButton type="radio"
                                label="Male"
                                checked={radio === "Male"}
                                value="Male"
                                onChange={(e) => setRadio(e.target.value)} />

                            <RadioButton type="radio"
                                label="Female"
                                checked={radio === "Female"}
                                value="Female"
                                onChange={(e) => setRadio(e.target.value)} />
                        </div>
                    </div>
                    <div className="alert alert-primary mt-2">How to use the Radio Button Toggle component?</div>
                    <h6 className="mt-2">Import the radio button toggle component to a React Component </h6>
                    <strong>Add the component on React file pass in the - the compoent recieves the below props: <br />
                        <em>
                            type <br />
                            id <br />
                            styleClass<br />
                            label <br />
                            onChange <br />
                            checked <br />
                            value <br />
                        </em>
                    </strong>
                    <div className="row mb-5 mt-5">
                        <div className="col-lg-12 shadow py-10 px-10">
                            <pre className="mt-5 mb-5">
                                <code>
                                    import RadioButton from ".../components/radio-button";
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
                                    &lt;RadioButton type="radio"  value="value" label="label" checked="checkedValue" onChange="setState" /&gt;
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

export default RadioButtonTogglePage;