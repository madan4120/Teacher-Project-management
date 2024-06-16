import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "./assets/config"
import { useNavigate } from "react-router-dom"

function Signup(){
const[user,setuser]=useState()
const[pass,setpass]=useState()
const navigate=useNavigate()
function Createuser(e){
setuser(e.target.value)

}
function Createpass(e){
setpass(e.target.value)
}

function Signupuser(){
 createUserWithEmailAndPassword(auth,user,pass).then(()=>{
    console.log("User Registered")
 })
 navigate("/Login")
}

return(
<div>
<h1>Signup</h1>
<input placeholder="username" onChange={Createuser} ></input><br></br>
<input placeholder="password" onChange={Createpass} ></input><br></br>
<button onClick={Signupuser}>Signup</button>
</div>
)
}
export default Signup