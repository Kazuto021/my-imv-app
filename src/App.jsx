// import { useState } from 'react'
// import Inp from './views/components/Inp'
import './App.scss'
import { useNavigate } from 'react-router-dom'
import Signup from './views/screen/Signup'
// import CustomButton from "./views/components/CustomButton"
function App() {
  const nav = useNavigate()
  // const [count, setCount] = useState(0)
  const loginHook = (o)=>{
    nav("/login")  
  }
  const adminHook=()=>{
    nav("/admin")
  }
  return (
    <div className='app'>
      <h1>Hello</h1>
      
      <button type="button" onClick={loginHook} value="login">Take me to Login.</button><br />
      <button type="button" onClick={adminHook} value="admin">Take me to Admin Page</button>
    </div>
  )
}

export default App
