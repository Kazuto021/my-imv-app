// import React from 'react'
import Inp from "../components/Inp"
import String from '../util/InpUtil'
import CustomButton from '../components/CustomButton'
// import "../components/styles/login.scss"
import Property from '../util/Buttonprop'
import { useNavigate } from "react-router-dom"
import { useState  } from "react"

const Login = () => {
    const nav = useNavigate()
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        logStatus: false
    });
    let formUpdater = (e) => {
        setLoginData({
            ...loginData,
            [(e.target.name).toLowerCase()]: e.target.value
        })
    }
    let loginChecker = () => {
        try {
            console.log("Entering in try block ")
            if (localStorage.getItem("username") && localStorage.getItem("password")) {
                console.log("username and password exists")
                if (loginData.username === localStorage.getItem("username") && loginData.username != "") {
                    if (loginData.password === localStorage.getItem("password") && loginData.password != "") {
                        setLoginData({
                            username: "",
                            password: "",
                            logStatus: true
                        })
                        alert("You have succesfully logged in!")
                        nav("/admin")
                        localStorage.setItem("isLoggedIn", true)
                    }
                    else {
                        alert("Password is incorrect")
                    }
                } else {
                    alert("Invalid username, try again.")
                }
                console.table(loginData)
            }
            else{
                alert("Username does not exist, consider signing up.")
            }
        }
        catch(e) {
            console.table(e)
        }
        // nav("/admin")

    }
    let signupHook = () => {
        nav("/signup")
    }
    return (
        <div className='login-wrapper-class'>
            <form className='login-form'>
                <h1>Login</h1>
                <input onChange={formUpdater} type={String.typeText} name={String.placeholder_username} value={loginData.username} placeholder={String.placeholder_username} required />
                <input type="password" name={String.placeholder_pass} value={loginData.password} onChange={formUpdater} placeholder={String.placeholder_pass} required />

                {/* <Inp placeholder={String.placeholder_username} icon={String.iconUsers} type={String.typeText} required/>
                {/* <Inp placeholder={String.placeholder_username} value={username} onchange={d=>setUserName(d.target.value)} icon={String.iconUsers} type={String.type}/> */}
                {/* <Inp placeholder={String.placeholder_pass} icon={String.iconPassword} type={String.typePassword} required/> */}
                <CustomButton type={Property.typeButton} fontColor={Property.fontColor} value={Property.buttonContent} onClickLogin={loginChecker} />
                <div className='signup' onClick={signupHook}>New around here? <br /><span style={{"textDecoration":"underline",color:"blue",
                    "letterSpacing":"0.1em"
                }}>Signup</span></div>
            </form>
        </div>
    )
}

export default Login