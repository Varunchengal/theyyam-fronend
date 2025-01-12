
import './App.css';
import BottomNav from './components/BottomNav';
import Homefeed from './components/Homefeed';
import RegisterPage from './components/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';


function App() {
  return (
    <div className="App container-fluid">
     
      <BottomNav/>
      <Routes>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='home' element={<Homefeed/>} />
      </Routes>
       <ToastContainer/>
    </div>
  );
}

export default App;
