import React from 'react'
import "./login.css"
function Login() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10%"}}>
          <div className="form">
      <form action="http://localhost:3000/check" method="post" >
    
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" required />
        
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
         
        </div>
        <div className="input-container">
          <label>role </label>
          <input type="role" name="role" required />
         
        </div>
        <div className="button-container">
          <input type="submit" />
          
        </div>
      </form>
      {/* <button style={{marginLeft:"10px",height:"60px"}} href="/checkuser">login instead</button> */}
    </div>
    </div>
  )
}

export default Login