import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/pages/Home.jsx'
import Products from './Components/pages/Products/Products.jsx'
import DataProvider from './Components/Context/DataContext.jsx'
import Login from './Components/pages/Login.jsx'
import Register from './Components/pages/Register.jsx'
import { UserContext } from './Components/Context/UserContext.jsx'







ReactDOM.createRoot(document.getElementById('root')).render(
  
  <UserContext.Provider> 
   <DataProvider> 
    <BrowserRouter> 
    <Outlet></Outlet>
   <Navbar/>
   <Routes>
  <Route path='/' element= {<App/>}/>
  <Route index element= {<Home/>}/> 
  <Route path='/home' element= {<Home/>}/> 
   <Route path='/Products' element= {<Products/>}/>
   <Route path='/Login' element={<Login/>}/>
   <Route path='/Register' element={<Register/>}/>
   <Route/>
    </Routes>
    </BrowserRouter>
    </DataProvider> 
    </UserContext.Provider>
   
   

)
