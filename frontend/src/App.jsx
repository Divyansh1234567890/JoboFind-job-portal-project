import React, { useContext, useEffect } from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import AllJobs from './pages/AllJobs'
import JobDetails from './pages/JobDetails'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const adminPath = useLocation().pathname.includes('admin');
  const recruiterPath = useLocation().pathname.includes('recruiter');
  
  return (
    <>
    <div className='w-full'>
      {adminPath || recruiterPath ?null : <Navbar/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/AllJobs' element={<AllJobs/>}/>
      <Route path='/jobDetails/:id' element={<JobDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    {adminPath || recruiterPath ?null : <Footer/>}
    <Toaster/>
    </div>
    
    </>
  )
}

export default App
