import { StrictMode } from 'react'
// Import the Bootstrap CSS framework to apply pre-defined styles to the component
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Loop from './components/loop.jsx';
import ClassComp from './components/ClassComp.jsx';
import PropsDemo1 from './components/PropsDemo.jsx';
import StateDemo from './components/StateDemo.jsx';
import InjectData from './components/InjectData.jsx';
import CreatePost from './components/CreatePost.jsx';



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
// createRoot is a method from ReactDOM that allows you to render a React component into a specific DOM element.
// It is used to create a root for the React application, enabling the rendering of components into the DOM.
// createRoot is part of the React 18 API and is used to enable concurrent rendering features.
// It replaces the older ReactDOM.render method, providing better performance and flexibility for rendering React applications.
// createRoot takes a DOM element as an argument and returns a root object that can be used to render React components.
// It is essential for initializing a React application and rendering components into the DOM.
// createRoot is a key part of the React rendering process, allowing developers to build dynamic and interactive user interfaces.
// It is used to mount the root component of a React application into the DOM, enabling the rendering of the entire component tree.
// createRoot is a method that allows you to render React components into the DOM, making it a fundamental part of building React applications.
// It is used to create a root for the React application, enabling the rendering of components into the DOM.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MenuLink></MenuLink> */}
  <>
  {/* <FetchData></FetchData>
    <Loop> </Loop>
    <ClassComp></ClassComp>
     <PropsDemo1 message="Welcome to React!" coursename="React Basics"></PropsDemo1>
    <StateDemo message="hello"></StateDemo>*/}
    <InjectData></InjectData> 
  
    {/* <Layout></Layout> */}
  </>
  {/* <CreatePost/> */}
  </StrictMode>
)
