// import React from 'react'
import Inp from "../components/Inp"
import String from '../util/InpUtil'
import CustomButton from '../components/CustomButton'
// import "../components/styles/login.scss"
import Property from '../util/Buttonprop'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const nav = useNavigate()
    let onClick = () => {
        alert("button pressed")
        nav("/admin")
        
    }
    let signupHook=()=>{
        nav("/signup")
    }
    return (
        <div className='login-wrapper-class'>
            <div className='login-form'>
                <h1>Login</h1>
                <Inp placeholder={String.placeholder_username} icon={String.iconUsers} type={String.typeText} />
                {/* <Inp placeholder={String.placeholder_username} value={username} onchange={d=>setUserName(d.target.value)} icon={String.iconUsers} type={String.type}/> */}
                <Inp placeholder={String.placeholder_pass} icon={String.iconPassword} type={String.typePassword} />
                <CustomButton type={Property.typeButton} fontColor={Property.fontColor} value={Property.buttonContent} onClickLogin={onClick} />
                <div className='signup' onClick={signupHook}>New around here? <br /><span>Signup</span></div>
            </div>
        </div>
    )
}

export default Login