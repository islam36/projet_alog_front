import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import Login from './Login'
import PatientDosc from './PatientDocs'
import PatientViewDoctors from './PatientViewDoctors'
import PatientProfile from './PatientProfile'
import DocDetails from './DocDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/patient/docs' element={<PatientDosc/>}></Route>
        <Route path='/patient/docs/:id' element={<DocDetails/>}></Route>
        <Route path='/patient/viewDoctors' element={<PatientViewDoctors/>}></Route>
        <Route path='/patient/profile' element={<PatientProfile/>}></Route>
      


        <Route path='*'  element={<div>404 Not Found</div>}></Route>
      </Routes>   
    </BrowserRouter>
  )
}

export default App
