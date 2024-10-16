import './App.css'
import Login from './components/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'

function App() {

  return (
    <>
      <div className='poppins-regular'>
          <Router>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/forgot-password' element={<ForgotPassword/>} />
            </Routes>            
          </Router>  
      </div>
    </>
  )
}

export default App
