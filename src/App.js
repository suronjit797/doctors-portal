import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="App">

      <Header />

    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>





    </div>
  );
}

export default App;
