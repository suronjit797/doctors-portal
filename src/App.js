import { Route, Routes } from 'react-router-dom';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';

import 'react-calendar/dist/Calendar.css';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  return (
    <div className="App">

      <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/appointment' element={<Appointment />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>







    </div>
  );
}

export default App;
