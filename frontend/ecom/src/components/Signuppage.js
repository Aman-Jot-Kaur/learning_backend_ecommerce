import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
function Signup() {
    const navigate=useNavigate();
    const onLogin=()=>{
        navigate("/login")
    }
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10%"}}>
          <div className="form" style={{}}>
      <form action="http://localhost:3000/signup" method="post" >
    
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
        
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
         
        </div>
        <div className="input-container">
          <label>User role</label>
          <input type="text" name="role" placeholder='admin/customer/vendor' required />
         
        </div>
        <div className="button-container">
          <input type="submit" />
          
        </div>
      </form>
      <button style={{marginLeft:"10px",height:"60px"}} href="/login" onClick={onLogin}>login instead</button>
    </div>
    </div>
  )
}

export default Signup
