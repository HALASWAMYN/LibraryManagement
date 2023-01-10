import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userlogin';
import AdminPortel from './components/AdminPortel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/admin_login' element={<AdminLogin />} />
          <Route path='/user_login' element={<UserLogin />} />
          <Route path='/admin/*' element={<AdminPortel/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
