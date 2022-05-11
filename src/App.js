import { Route, Routes } from 'react-router-dom';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';

import 'react-calendar/dist/Calendar.css';
import './App.css';


function App() {
  return (
    <div className="App">

      <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/appointment' element={<Appointment />} />
    </Routes>







    </div>
  );
}

export default App;
