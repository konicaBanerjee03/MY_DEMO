import React, { useState } from  "react";
function DatePicker(){

    const [date,setDate]=useState("");
    const [age,setAge]=useState(null);
    const handleAge=()=>{
        const birthDay =new Date(date);
        const today = new Date();

        let age= today.getFullYear()-birthDay.getFullYear();
        let months= today.getMonth()-birthDay.getMonth();
        
        if (
            months < 0 ||
            (months === 0 && today.getDate() < birthDay.getDate())
          ) {
            age--;
          }
      
          setAge(age);
    }
    return(
        <div>
            <h3>Select Birth Date</h3>
            <input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
            <button onClick={handleAge}>Submit</button>
            {age &&<p>{age}</p>}
        </div>
    )
}
export default DatePicker;