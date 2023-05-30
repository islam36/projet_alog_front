import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import DoctorProfile from './doctorProfile'
import DoctorPatients from './doctorPatients'
import DoctorPatient from './doctorPatient'
import DoctorPatientDocument from './doctorPatientDocument'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/patient/docs' element={<Login/>}/>
        <Route path='/patient/viewDoctors' element={<Login/>}/>
        <Route path='/patient/profile' element={<Login/>}/>
        <Route path='/doctor/profile' element={<DoctorProfile/>}/>
        <Route path='/doctor/patients' element={<DoctorPatients/>}/>
        <Route path='/doctor/patients/:id' element={<DoctorPatient/>}/>
        <Route path='/doctor/patients/:id/documents/:id' element={<DoctorPatientDocument/>}/>
        <Route path='*'  element={<div>404 Not Found</div>}/>
      </Routes>   
    </BrowserRouter>
  )
}

export default App
