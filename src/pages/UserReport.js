import "./AppReport.css";
import React, { useState } from "react";

function UserReportPage() {
  
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

    const setInput = (e) => {
        const { name, value } = e.target;
        console.log('Name = ' + name + ' and Value = ' + value);
        
        /*if (name === 'start_date' || name === 'end_date') {
          setClaim((prevState) => ({
            ...prevState,
            [name]: parseInt(value),
          }));
          return;
        }*/
        setClaim((prevState) => ({
          ...prevState,
          [name]: value,
          fieldUserName: name
        }));
    };

    const fetchData = async () => {
        console.log('Entered data is here');
        console.log(claim);
        const newData = await fetch('/app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: claim
          }),
        }).then(res => res.json());    
        
        console.log('Retrived data from database table is here');    
        console.log(newData);
       
        setReturnedData(newData); //works
        //setReturnedData(newData[0]); //to show single data
        
    };

  return (
    <div>        
        <header className="App-header">
          <h1 className="App-title">User Report</h1>
        </header> 

      <div className="App-text"> 
         <input
          name="start_date"
          placeholder="Start Date (YYYY-MM-DD)"
          onChange={setInput}
        ></input>
        <input height="50vh"
          name="end_dateUser"
          placeholder="END Date (YYYY-MM-DD)"
          onChange={setInput}
        ></input>  
                        
        <button onClick={() => fetchData()}>Click</button>
       </div>         
        

        <div> 
          <h2>  User Batch Details:</h2>
          <table border="1" className="Table-center">
            <thead style={styles.thead}>
              <tr>
                <th>Job ID</th>
                <th>Job Name</th>
                <th>Batch Name</th>
                <th>Batch ID</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Pages</th>
                <th>Documents</th>
                <th>Execution Time without Operator uration (Minutes)</th>
                <th>Operator Duration (Minutes)</th>
                <th>Review User</th>
                <th>Validate User</th>
              </tr>
            </thead>
            <tbody>
                              
            {returnedData.map((claimInfo) => {
            return (
              <tr key={claimInfo.batch_instance_id}>  
              <td><span>{claimInfo.batch_class_id}</span></td>   
              <td><span>{claimInfo.batch_class_name}</span></td>            
              <td><span>{claimInfo.batch_name}</span></td>  
              <td><span>{claimInfo.batch_instance_id}</span></td>  
              <td><span>{claimInfo.start_time}</span></td> 
              <td><span>{claimInfo.end_time}</span></td>  
              <td><span>{claimInfo.pages}</span></td>  
              <td><span>{claimInfo.documents}</span></td>  
              <td><span>{claimInfo.without_operator_duration_in_minutes}</span></td>  
              <td><span>{claimInfo.operator_duration_in_minutes}</span></td>  
              <td><span>{claimInfo.reviewer}</span></td>  
              <td><span>{claimInfo.validator}</span></td>        
              </tr>
            )
          })}
              
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default UserReportPage;
