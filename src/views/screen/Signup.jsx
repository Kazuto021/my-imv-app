// import React, { useState } from 'react'
import Inp from "../components/Inp"
import String from "../util/InpUtil"
import CustomButton from "../components/CustomButton"
import Property from '../util/Buttonprop'
import '../components/styles/signup.scss'

const Signup = () => {
    // const[username,setUserName]=useState('')

    function onClicksignup(){
        // console.log("sign");
        alert("Signup button pressed")
    }
    
    return (
        <div className='signup-wrapper-class'>
            <div className='signup-form'>
                <h1>Signup</h1>
                <Inp placeholder={String.placeholder_username} icon={String.iconUsers} type={String.typeText} />
                {/* <Inp placeholder={String.placeholder_username} value={username} onchange={d=>setUserName(d.target.value)} icon={String.iconUsers} type={String.type}/> */}
                <Inp placeholder={String.placeholder_email} icon={String.iconGmail} type={String.typeEmail} />
                <Inp placeholder={String.placeholder_pass} icon={String.iconPassword} type={String.typePassword} />
                <CustomButton type={Property.type} fontColor={Property.fontColor}  onClicksignup={onClicksignup}/>
                <div className='login'>Already have an account? <br /><span><a href="/login">Login</a></span></div>
            </div>
        </div>

    )
}

export default Signup