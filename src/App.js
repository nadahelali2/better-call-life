
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Appointment from './components/Appointment';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
    <Route element={<Appointment/>} exact  path='/team' />
    <Route element={<Admin/>} exact  path='/admin' />
    <Route element={<Home/>} exact  path='/' />
    </Routes>
  );
}

export default App;
