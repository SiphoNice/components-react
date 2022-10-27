import React from "react";
import SelectInpt from "../Components/select-input";
const SelectInputPage = () => {
    const handleOption = () => {

    }
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h3>Select input Component</h3>
                    <p>Select input a can be used to perform some user required functionalities.</p>
                    <hr />
                    <h5>Component Example:</h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <SelectInpt

                                data={[{ value: 1, label: "option 1" }, { value: 2, label: "option 2" }, { value: 3, label: "option 3" }]}
                                placeholder="Select option"
                                onChange={handleOption} />
                        </div>
                    </div>
                    <div className="alert alert-primary mt-2">How to use the Select Input component?</div>
                    <h6 className="mt-2">Import the select inputtext area component to a React Component </h6>
                    <strong>Add the component on React file pass in the props: <br />
                        <em>
                            id <br />
                            styleClass<br />
                            onChange <br />
                            value <br />
                        </em>
                    </strong>
                    <div className="row mb-5 mt-5">
                        <div className="col-lg-12 shadow py-10 px-10">
                            <pre className="mt-5">
                                <code>
                                    import SelectInpt from ".../components/select-input";
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
                                    &lt;SelectInpt data="options"   placeholder="select options" onChange="function"
                                    /&gt;
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

export default SelectInputPage;