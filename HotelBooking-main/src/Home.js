import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1>HOTEL BOOKING COMPANY</h1>
        <button onClick={() => navigate("/form")}>ADD DETAILS</button>
    </div>
  )
}

export default Home