import React, { useState,useEffect } from 'react'
import styles from "./Form.module.css"
import validateForm from '../utils/validateForm';
function Form({
  // name,
  // setName,
  // email,
  // setEmail,
  // username,
  // setUsername,
  // phone,
  // setPhone,
  // setUser
}) {

    
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[phone,setPhone]=useState("");
    const[error,setError]=useState(false);
    
    useEffect(()=>{
      setUser(name,email,phone,username)
    },[name,email,phone,username])

  return (
    <div className={styles.container}>
      <input 
      type="text"
      placeholder='Name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
       />
      <input 
      type="text"
      placeholder='userame'
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
       />
        <input type="email" 
        placeholder='Email'
        value={email}
      onChange={(e)=>setEmail(e.target.value)}

         />
        <input type='tel'
        placeholder='contact no.'
        value={phone}
      onChange={(e)=>setPhone(e.target.value)}

         />
         <button onClick={()=>validateForm(name,email,phone,username)}>
          SIGNUP
          </button>
    </div>
  )
}

export default Form;
