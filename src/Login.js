import auth from "./assets/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login(){
    const[user,setuser]=useState()
    const[password,setpass]=useState()
    const navigate= useNavigate()
function Checkuser(e){
  setuser(e.target.value)
}
function Checkpass(e){
  setpass(e.target.value)
}

function loginuser(){
signInWithEmailAndPassword(auth,user,password).then(()=>{
    console.log("Logged in")
    navigate("/Home")
}) 

.catch(()=>{
    console.log("Failed to Logged in")
})
}


return(
<div>
<h1>Login</h1>
<input placeholder="username" onChange={Checkuser}></input><br></br>
<input placeholder="password" onChange={Checkpass}></input><br></br>
<button onClick={loginuser}>Login</button>
</div>
)
}
export default Login