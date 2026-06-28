// import React,{useState, useRef} from "react";
// function Otp({onSubmit}){
//     const[input,setInput]=useState(["","",""])
//     const inputrefs=[useRef(null),useRef(null),useRef(null)]
//     const handleChange=(index,value)=>{
//        if(!/^[0-9]?$/.test(value))
//         return;
//     const newotp=[...input];
//     newotp[index]=value;
//     setInput(newotp);
//     if(value && index<2){
//         inputrefs[index+1].current.focus();
//     }
// };
//     const handleSubmit=()=>{
//         onSubmit(input.join(""))
//     }

    
//     return(
//         <div>
//         {input.map((digit,index) => (
//             <input
//                 key={index}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 ref={inputrefs[index]}
//             />
//         ))}
//         <button onClick={handleSubmit}>Submit</button>
//     </div>

//     );

// }
// export default Otp;

// import React, { useState, useRef } from "react";

// function OtpComponent() {
//   const [input, setInput] = useState(["", "", ""]);
//   const inputRefs = [useRef(null), useRef(null), useRef(null)];

//   const handleChange = (e) => {
//     const index = Number(e.target.dataset.index);
//     const value = e.target.value;

//     if (value === "" || (!isNaN(value) && value.length === 1)) {
//       const newOtp = [...input];
//       newOtp[index] = value;
//       setInput(newOtp);

//       // Move focus to next input if digit is entered
//       if (value && index < input.length - 1) {
//         inputRefs[index + 1].current.focus();
//       }
//     }
//   };

//   const handleSubmit = () => {
//     if (input.includes("")) {
//       alert("Please enter full OTP");
//       return;
//     }
//     alert("Entered OTP: " + input.join(""));
//   };

//   return (
//     <div>
//       <h2>Enter OTP</h2>
//       {input.map((digit, index) => (
//         <input
//           key={index}
//           type="text"
//           maxLength={1}
//           value={digit}
//           data-index={index}
//           onChange={handleChange}
//           ref={inputRefs[index]}
//           style={{
//             width: "30px",
//             margin: "5px",
//             textAlign: "center",
//             fontSize: "20px",
//           }}
//         />
//       ))}
//       <br />
//       <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default OtpComponent;



import React, { useState, useRef } from "react";
function OtpComponent() {
  const [otp, setOtp] = useState(["", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      setOtp(prev => {
        const updated = [...prev];
        updated[index] = value;
        return updated;
      });

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    if (otp.some(digit => digit === "")) {
      alert("Please enter full OTP");
    } else {
      alert("Entered OTP: " + otp.join(""));
    }
  };

  const inputStyle = {
    width: "30px",
    margin: "5px",
    textAlign: "center",
    fontSize: "20px",
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          style={inputStyle}
        />
      ))}
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
        Submit
      </button>
    </div>
  );
}

export default OtpComponent;
