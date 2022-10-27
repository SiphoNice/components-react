import React, { useState } from "react";
import InputText from "../Components/input-text";
const InputTextPage = () => {

    const [inputValue, setInputValue] = useState("");
    const [inputEmail, setEmail] = useState("");
    const handleOnChange = (e) => {
        setInputValue(e.target.value);

    }
    const handleOnChange2 = (e) => {

        setEmail(e.target.value)
    }
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h3>Input Text Component</h3>
                    <p>Input text can be used to perform some user required functionalities.</p>
                    <hr />
                    <h5>Component Example:</h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <InputText type="text" id="inputName" placeholder="Example 1" value={inputValue}
                                onChange={handleOnChange} />
                        </div>
                        <div className="col-lg-12">
                            <InputText type="email" id="inputName" styleClass="simpleInput" placeholder="Example 2"
                                value={inputEmail} onChange={handleOnChange2} />
                        </div>
                    </div>
                    <div className="alert alert-primary mt-2">How to use the input text component?</div>
                    <h6 className="mt-2">Import the input text component to a React Component </h6>
                    <strong>Add the component on React file pass in the props: <br />
                        <em>
                            type <br />
                            id <br />
                            styleClass<br />
                            onChange <br />
                            placeholder <br />
                            value <br />
                            onChange <br />
                        </em>
                    </strong>
                    <div className="row mb-5 mt-5">
                        <div className="col-lg-12 shadow py-10 px-10">
                            <pre className="mt-5">
                                <code>
                                    import InputText from ".../components/input-text";
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
                                    &lt;InputText type="text"   styleClass="simpleInput"
                                    placeholder="Enter name" value="value" /&gt;
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
export default InputTextPage;