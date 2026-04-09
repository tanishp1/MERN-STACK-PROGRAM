import 'bootstrap/dist/css/bootstrap.min.css';
import{ BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './screens/login';
import Register from './screens/register';
import Iteam from './screens/Iteam';
import Dashboard from './screens/Dashboard';
import AuthNavBar from './components/AuthNavBar';


const App = () => {

  console.log(import.meta.env.VITE_API_KEY_BACKEND, "===>")
  
  return (
    <BrowserRouter>
    <div>
      <AuthNavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/iteam" element={<Iteam/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
