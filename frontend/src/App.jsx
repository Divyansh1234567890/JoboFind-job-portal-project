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
import Applications from './pages/user/Applications'
import Profile from './pages/user/Profile'
import RecruiterLayout from './pages/recruiter/RecruiterLayout'
import CompaniesList from './pages/recruiter/CompaniesList'
import AddCompany from './pages/recruiter/AddCompany'
import PostJob from './pages/recruiter/PostJob'
import JobsList from './pages/recruiter/JobsList'
import Applicants from './pages/recruiter/Applicants'
import AdminLayout from './pages/admin/AdminLayout'
import CategoriesList from './pages/admin/CategoriesList'
import AddCatogery from './pages/admin/AddCatogery'
import AllApplications from './pages/admin/AllApplications'
import AllCompanies from './pages/admin/AllCompanies'
import AllUsers from './pages/admin/AllUsers'
import Jobs from './pages/admin/Jobs'
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
      {/* user routes */}
      <Route path='/Applications' element={<Applications/>}/>
      <Route path='/Profile' element={<Profile/>}/>

      {/* recruiter routes  */}
      <Route path='/recruiter' element={<RecruiterLayout/>}>
      <Route index element={<CompaniesList/>}/>
      <Route path='AddCompany' element={<AddCompany/>}/>
      <Route path='PostJob' element={<PostJob/>}/>
      <Route path='JobsList' element={<JobsList/>}/>
      <Route path='Applicants' element={<Applicants/>}/>
      </Route>

      {/* admin routes */}
      <Route path='/admin' element={<AdminLayout/>}>
      <Route index element={<CategoriesList/>}/>
      <Route path='AddCategory' element={<AddCatogery/>}/>
      <Route path='AllUsers' element={<AllUsers/>}/>
      <Route path='AllCompanies' element={<AllCompanies/>}/>
      <Route path='AllApplications' element={<AllApplications/>}/>
      <Route path='Jobs' element={<Jobs/>}/>
      </Route>
    </Routes>
    {adminPath || recruiterPath ?null : <Footer/>}
    <Toaster/>
    </div>
    
    </>
  )
}

export default App
