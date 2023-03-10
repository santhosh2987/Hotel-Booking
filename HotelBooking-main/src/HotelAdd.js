import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HotelService from "./HotelService";

const Create = () => {

    const navigate = useNavigate();

    const [SetValues, setValues] = useState({ name: "", age: "", doa: "", dod: "", count: "", type: "", cost: "", mailID: "", mop: "" });

    const handleInputs = (e) => {
        setValues({ ...SetValues, [e.target.name]: e.target.value });
    }

    const eventShow = (e) => {
        e.preventDefault();
        HotelService.saveCust(SetValues).then(res => console.log(res)).catch(err => console.log(err));
        console.log(SetValues);
        navigate("/results")
    }
    return (
        <form>
            <div>
                <label>Name</label>
            </div>
            <div>
                <input name="name"
                    type="text"
                    value={SetValues.name}
                    onChange={handleInputs}
                />
            </div>

            <br></br><br></br>
            <div>
            <label>Age</label>
            </div>
            <div>
            <input
                name="age"
                type="number"
                value={SetValues.age}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
             <div>
            <label>DOA</label>
            </div>
            <div>
            <input
                name="doa"
                type="text"
                value={SetValues.doa}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label>DOD</label>
            </div>
            <div>
            <input
                name="dod"
                type="text"
                value={SetValues.dod}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label>Count</label>
            </div>
            <div>
            <input
                name="count"
                type="number"
                value={SetValues.count}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label>Type</label>
            </div>
            <div>
            <input
                name="type"
                type="text"
                value={SetValues.type}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label>Cost</label>
            </div>
            <div>
            <input
                name="cost"
                type="number"
                value={SetValues.cost}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label >MailID</label>
            </div>
            <div>
            <input
                name="mailID"
                type="text"
                value={SetValues.mailID}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <label >MOP</label>
            </div>
            <div>
            <input
                name="mop"
                type="text"
                value={SetValues.mop}
                onChange={handleInputs}
            />
            </div>

            <br></br><br></br>
            <div>
            <button name="submit" type="submit" id="asd" onClick={eventShow}>
                Submit
            </button>
            </div>
            <br></br><br></br>
        </form>
    );

}
export default Create;