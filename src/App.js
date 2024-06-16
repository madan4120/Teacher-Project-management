import { BrowserRouter,Link,Route,Routes } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"

function App(){
 return(
<>
<BrowserRouter>
<nav>
<Link to={"/Login"}>Login</Link>
<Link to={"/Signup"}>Signup</Link>
</nav>
<Routes>
<Route path="/Login" element={<Login></Login>}></Route>
<Route path="/Signup" element={<Signup></Signup>}></Route>
<Route path="/Home" element={<Home></Home>}></Route>
</Routes>
</BrowserRouter>
</>
 )
}

export default App