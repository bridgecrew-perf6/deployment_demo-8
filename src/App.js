import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './pages/AppReport.css';
import './App.css';

import React, { useState } from 'react';
//import 'react-DatePicker/dist/react-DatePicker.css'
import MainNavigation from "./components/layout/MainNavigation";

import NODReportPage from "./pages/NODReport";
import QAReportPage from "./pages/QAReport";
import UserReportPage from "./pages/UserReport";


function App() {
  // localhost:3000/
  // my-page.com/
  
  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
    const styles = {
      thead: {
        backgroundColor: "#8ab18a",
      },
      td: {
        padding: "50px",
        border: "dotted 1px black",
      },
    };

  const [returnedData, setReturnedData] = useState([]); 
  const [claim, setClaim] = useState({
    start_date: '',
    end_date:''
  });

console.log(returnedData);

  
    return (
      <div>        
        <header className="App-header">
          <h1 className="App-title">Noridian Reports</h1>
        </header>        

        <div className="Menu">
          <BrowserRouter>
            <MainNavigation />            
            <Routes>
              <Route exact path="/" element={<UserReportPage />} />              
            
              <Route path="/UserReportPage" element={<UserReportPage />} />

              <Route path="/NODReportPage" element={<NODReportPage />} />
            
              <Route path="/QAReportPage" element={<QAReportPage />} />
                          
            </Routes>
         
          </BrowserRouter>
        </div>  
      </div>

    ); 
}

export default App;
