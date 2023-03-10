import React from 'react';
import { useState, useEffect } from 'react';
import HotelService from './HotelService';
import { useNavigate, useParams } from 'react-router-dom';



export default function Updation(){

    const {id} = useParams();

    const navigate = useNavigate();

    const [Setvalues, setValues] = useState({ name: "", age: "", doa: "", dod: "", count: "", type: "", cost: "", mailID: "", mop: "" });

    const handleInputs = (event) => {
        setValues({ ...Setvalues, [event.target.name]: event.target.value });
    }

    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await HotelService.getCustById(id);
                setValues(response.data); 
                console.log(Setvalues);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const eventShow = (event) => {
        event.preventDefault();
        HotelService.updateCust(id, Setvalues);
        navigate("/results");
        console.log(Setvalues);
    }

    const eventCancel = (event) => {
        navigate("/results");
    }

    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                        <input type='text'
                            name='name'
                            value={Setvalues.name}
                            onChange={handleInputs}
                             />
                    </div>

                    <div>
                        <label>Age</label>
                    </div>
                    <div>
                        <input type='number'
                            name='age'
                            value={Setvalues.age}
                            onChange={handleInputs}
                            />
                    </div>

                    <div>
                        <label>DOA</label>
                    </div>
                    <div>
                        <input type='text'
                            name='doa'
                            value={Setvalues.doa}
                            onChange={handleInputs}
                             />
                    </div>

                    <div>
                        <label>DOD</label>
                    </div>
                    <div>
                        <input type='text'
                            name='dod'
                            value={Setvalues.dod}
                            onChange={handleInputs}
                             />
                    </div>
                    <div>
                        <label>Count</label>
                    </div>
                    <div>
                        <input type='number'
                            name='count'
                            value={Setvalues.count}
                            onChange={handleInputs}
                             />
                    </div>

                    <div>
                        <label>Type</label>
                    </div>
                    <div>
                        <input type='text'
                            name='type'
                            value={Setvalues.type}
                            onChange={handleInputs}
                             />
                    </div>
                    <div>
                        <label>Cost</label>
                    </div>
                    <div>
                        <input type='text'
                            name='cost'
                            value={Setvalues.cost}
                            onChange={handleInputs}
                            />
                    </div>
                    <div>
                        <label>MailID</label>
                    </div>
                    <div>
                        <input type='text'
                            name='mailID'
                            value={Setvalues.mailID}
                            onChange={handleInputs}
                           />
                    </div>
                    <div>
                        <label>MOP</label>
                    </div>
                    <div>
                        <input type='text'
                            name='mop'
                            value={Setvalues.mop}
                            onChange={handleInputs}
                             />
                    </div>
                    <button onClick={eventShow}>Update</button>
                    <button onClick={eventCancel}>Cancel</button>

                </form>

            </div>
        </div>
    )
}