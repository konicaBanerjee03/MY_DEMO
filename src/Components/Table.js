//using react and js create  a form that takes input fields and stores the data in a table
import React, { useState } from "react";
function Table(){
    const[formData,setFormData]=useState({
        name:'',
        designation:'',
        email:'',
        city:''
    })
    const [tableData,setTableData]=useState([]);
    const handleNameChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,[name]:value
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTableData([formData,...tableData])


    }
    return(
        <div>
              <form onSubmit={handleSubmit}>
            <h2>Form data</h2>
            <label>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleNameChange}/>
            <br/>
            <label>Post</label>
            <input type='text' name='designation' value={formData.designation}onChange={handleNameChange}/>
            <br/>
            <label>EMAIL</label>
            <input type ='email' name='email' value={formData.email} onChange={handleNameChange}/>
            <br/>
            <label>CITY</label>
            <input type='text' name='city' value={formData.city} onChange={handleNameChange}/>

            <button>Submit</button>

        </form>
        <div>
            <h3>TABLE</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((i,index)=>(
                        <tr key={index}>
                            <td>{i.name}</td>
                            <td>{i.designation}</td>
                            <td>{i.email}</td>
                            <td>{i.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
      
    )
}
export default Table;