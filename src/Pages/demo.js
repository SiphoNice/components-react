import React, { useState } from "react";
import InputText from "../Components/input-text";
import SelectInpt from "../Components/select-input";
import TextArea from "../Components/text-area";
import RadioButton from "../Components/radio-button";
import Button from "../Components/button";
const Demo = () => {
    const [radio, setRadio] = useState("");
    return (
        <>
            <div class=" col-lg-12">
                <div class="row align-items-center g-lg-5 py-5">
                    <div class="col-lg-6 text-center text-lg-start">
                        <h1 class="display-4 fw-bold lh-1 mb-3">Components UI Demo Output</h1>
                        <p class="col-lg-10 fs-4">
                            This is a simple page that displays all the components created.
                        </p>
                    </div>
                    <div class="col-md-10 mx-auto col-lg-6">
                        <form class="p-4 p-md-5 border rounded-3 bg-light">
                            <div class="form-floating mb-3">
                                <InputText placeholder="Name" id="floatingInput" type="text" />
                            </div>
                            <div class="form-floating mb-3">
                                <InputText placeholder="Surname" id="floatingInput" type="text" />
                            </div>
                            <div class="form-floating mb-3">
                                <SelectInpt styleClass="custom_select_input" data={[{
                                    value: "South African",
                                    label: "South African"
                                }, { value: "Zimbabwe", label: "Zimbabwe" }, {
                                    value: "Zambia",
                                    label: "Zambia"
                                }]} placeholder="Select Country" />
                            </div>
                            <div class="form-floating mb-3">
                                <TextArea row="7" />
                            </div>
                            <div class="form-floating mb-3">
                                <RadioButton
                                    type="radio"
                                    label="Male"
                                    checked={radio === "Male"}
                                    value="Male"
                                    onChange={(e) => setRadio(e.target.value)} />
                                <RadioButton
                                    type="radio"
                                    label="Female"
                                    checked={radio === "Female"}
                                    value="Female"
                                    onChange={(e) => setRadio(e.target.value)} />
                            </div>
                            <Button type="button" styleClass="w-100 btn btn-lg btn-primary" value="Book Appointment" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo;