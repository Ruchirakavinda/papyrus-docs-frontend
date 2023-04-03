import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import ResponsiveAppBar from './common/navBar'
import Dashboard from './views/dashborad/dashboard'
import Footer from './common/footer'
import Documemnts from './views/document/createDocument'
import Projects from './views/projects/projects'
import Employees from './views/employees/employees'

function App () {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/documents' element={<Documemnts />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/employees' element={<Employees />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
