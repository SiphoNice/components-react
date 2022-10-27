import React from "react";
import Table from "../Components/table";

const TablePage = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h3>Table Component</h3>
                    <p>Table can be used to display output for the users .</p>
                    <hr />
                    <h5>Component Example:</h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <Table dataHeadings={[{ heading: "Heading 1" }, { heading: "Heading 2" }, { heading: "Heading 3" },
                            { heading: "Heading 4" }]} data={[{ content: "Content 1" }, { content: "Content 2" }, {
                                content: "Content 3"
                            }, { content: "Content 4" }]} />
                        </div>
                    </div>
                    <div className="alert alert-primary mt-2">How to use the select table component?</div>
                    <h6 className="mt-2">Import the select table component to a React Component </h6>
                    <strong>Add the component on React file pass in the props: <br />
                        <em>
                            id <br />
                            headingData<br />
                            data <br />
                            styleClass <br />
                        </em>
                    </strong>
                    <div className="row mb-5 mt-5">
                        <div className="col-lg-12 shadow py-10 px-10">
                            <pre className="mt-5">
                                <code>
                                    import Table from ".../components/table";
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
                                    &lt;Table data="options"   headingData="options" styleClass="table-secondary"
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
export default TablePage;