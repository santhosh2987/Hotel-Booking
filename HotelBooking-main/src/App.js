import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Updation from './HotelUpdate';
import Create from './HotelAdd';
import Table1 from './HotelGet';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Create />} />
        <Route path="/edit/:id" element={<Updation />} />
        <Route path="/results" element={<Table1 />} />
      </Routes>
    </div>
  );
}

export default App;
