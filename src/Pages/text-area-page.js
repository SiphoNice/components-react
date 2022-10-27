import React, { useState } from "react";
import TextArea from "../Components/text-area";
const TextAreaPage = () => {
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);

    }

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h3>Text Area Component</h3>
                    <p>Text area can be used to perform some user required functionalities.</p>
                    <hr />
                    <h5>Component Example:</h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <TextArea id="messages" rows="7" value={inputValue} onChange={handleOnChange} />
                        </div>
                    </div>
                    <div className="alert alert-primary mt-2">How to use the text area component?</div>
                    <h6 className="mt-2">Import the text area component to a React Component </h6>
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
                                    import TextArea from ".../components/text-area";
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
                                    &lt;TextArea type="text"   styleClass="className"
                                    value="value" /&gt;
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
export default TextAreaPage;