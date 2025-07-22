import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import MyFunComp from './components/myFunComp.jsx'
import MyClassCompoent from './components/myClassComp.jsx'
import Attributes from './components/Attributes.jsx'
import Course from './components/PropsDemo.jsx'
import Car from './PropsAsObj.jsx'
import Greeting from './EventsDemo.jsx'
import ReactState from './components/ReactState.jsx'
import FullStack from './components/RstatewithProps.jsx'
import ReactForm from './components/ReactForms.jsx'
import HookDemo from './components/HookDemo.jsx'
import Login from './components/LoginForm.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import FetchData from './components/FetchData.jsx'
import EmployeeForm from './components/SaveEmployee.jsx'
import UpdateEmployee from './components/UpdateEmployee.jsx'
import DeleteEmployeeById from './components/DeleteEmployee.jsx'
import EmployeeList from './components/EmployeeList.jsx'



export default function MenuLink()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Attributes/>}></Route>
        <Route path='funcomp' element={<MyFunComp/>}></Route>
        <Route path='classcomp' element={<MyClassCompoent/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='states' element={<ReactState/>}></Route>
        <Route path='api' element={<FetchData></FetchData>}></Route>
         <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        <Route path="/delete-employee" element={<DeleteEmployeeById />} />
        <Route path="/employee" element={<EmployeeList />} />

      </Routes>
    </BrowserRouter>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuLink></MenuLink>
   
  </StrictMode>
)
