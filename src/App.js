
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin/Admin';
import Appointment from './components/Appointment';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { useSelector } from 'react-redux';

function App() {

   const ProtectedRoute = ({ element: Element, ...rest }) => {

    const isAdmin = useSelector((state) => state.user?.is_admin);
    if (!isAdmin) {     
      return <Navigate to="/login" replace />;
    }
  
    return <Element {...rest} />;
  };
  return (

      <>
      
      <Navbar /><Routes>
      <Route element={<Appointment />} exact path='/appointement' />
      <Route element={<ProtectedRoute element={Admin} />} exact path='/admin' />
      <Route element={<Home />} exact path='/' />
      <Route element={<Login />} exact path='/login' />
      <Route element={<Register />} exact path='/register' />
    </Routes></>
  );
}

export default App;
