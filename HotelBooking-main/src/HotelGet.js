import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Table1 = () => {

    const navigate = useNavigate();

    const [details, setDetails] = useState([]);


    useEffect(() => {
        
        const fetchData = async () => {

            try{    
                const response = await axios.get("http://localhost:1940/show");
                setDetails(response.data);
            }
            catch(e){
                console.log(e);
            }
        }
        fetchData();
    });
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:1940/delete/${id}`)
        .then(response=>{
            const updatedLogin = response.filter((CustDetails)=>CustDetails.id!==id);
            setDetails(updatedLogin);
        });
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>DOA</th>
                    <th>DOD</th>
                    <th>Count</th>
                    <th>Type</th>
                    <th>Cost</th>
                    <th>mailID</th>
                    <th>MOP</th>
                    <th>CheckedOut</th>
                    <th>CustChanges</th>
                </tr>
            </thead>
            <tbody>
                {details.map(user => (
                    <tr key={user.id}>
                        <td d>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.doa}</td>
                        <td>{user.dod}</td>
                        <td>{user.count}</td>
                        <td>{user.type}</td>
                        <td>{user.cost}</td>
                        <td>{user.mailID}</td>
                        <td>{user.mop}</td>
                        <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
                        <td><button onClick={() => handleEdit(user.id)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table1;