import { Route, Routes } from 'react-router-dom';
import './App.css'
import GetStartedPage from './pages/GetStarted';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Settings from './pages/Settings';
import ChangePassword from './pages/ChangePassword';
function App() {

  return (
    <>
      <Routes> {/* Define the Routes container */}
        {/* Define each Route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path='forgot-password' element={<ForgotPassword/>} />
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/teacher-dashboard' element={<TeacherDashboard/>} />
        <Route path='settings' element={<Settings/>}/>
        <Route path='change-password' element={<ChangePassword/>}/>
      </Routes>
    </>
  )
}

export default App


