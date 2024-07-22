import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Homepage from './pages/Homepage';

export default function App() {

  return (

      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />

          <Route path='/homepage' element={<Homepage />} />

        </Routes>

      </BrowserRouter>


  );

}