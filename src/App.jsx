import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import Login from './Login'
import PatientDosc from './PatientDocs'
import PatientViewDoctors from './PatientViewDoctors'
import PatientProfile from './PatientProfile'
import DocDetails from './DocDetails'
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
        <Route path='/patient/docs' element={<PatientDosc/>}></Route>
        <Route path='/patient/docs/:id' element={<DocDetails/>}></Route>
        <Route path='/patient/viewDoctors' element={<PatientViewDoctors/>}></Route>
        <Route path='/patient/profile' element={<PatientProfile/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
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
