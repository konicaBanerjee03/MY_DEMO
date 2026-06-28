import React, { useState, useEffect } from "react";

function App() {
  const studentsList = [
    { rollNo: 1111, name: "name1" },
    { rollNo: 2222, name: "name2" },
  ];

  const [student, setStudent] = useState(studentsList);

  // update automatically on first render
  useEffect(() => {
    setStudent(prev =>
      prev.map(s =>
        s.rollNo === 2222 ? { ...s, rollNo: s.rollNo+1 } : s
        //  s.rollNo === 2222 ? { ...s, name: "name3" } : s
      )
    );
  }, []); // empty dependency → runs only once after first render

  return (
    <div>
      <ul>
        {student.map((x, index) => (
          <li key={index}>
            {x.rollNo} {x.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// if i want to add another row like next line

// useEffect(()=>{
//   const x=[...student,({rollNo:34,name:"uui"})]
// setStudent(x)     
// },[])


// if you want to delete stud with rollno. 2222

useEffect(()=>{
  const x=student.filter(x1=> x1.rollNo!==2222)
setStudent(x)     
},[])