import React from 'react'
import { Routes, Route } from "react-router-dom";
//import Signup from "./Signup.jsx" ;
import Home from "./Home.jsx"
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"
import Features from "./Features.jsx"
import Steps from "./Steps.jsx"
import UploadDocuments from './UploadDocuments.jsx'
import ScannerVehicleDetails from "./ScannerVehicleDetails";

const App = () => {
  return (
    <div>
      
           <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/features" element={<Features/>} />
                <Route path="/steps" element={<Steps/>} />
                <Route path="/upload-documents" element={<UploadDocuments/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/vehicle/:id" element={<ScannerVehicleDetails/>} />

           </Routes>
     
    </div>
  )
}


export default App



