import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/patient/docs' element={<Login/>}></Route>
        <Route path='/patient/viewDoctors' element={<Login/>}></Route>
        <Route path='/patient/profile' element={<Login/>}></Route>
        <Route path='/patient/profile' element={<Login/>}></Route>
        <Route path='/patient/profile' element={<Login/>}></Route>
        <Route path='/patient/profile' element={<Login/>}></Route>
        <Route path='*'  element={<div>404 Not Found</div>}></Route>
      </Routes>   
    </BrowserRouter>
  )
}

export default App
