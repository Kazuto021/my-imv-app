// import React, { useState } from 'react'
import Inp from "../components/Inp"
import String from "../util/InpUtil"
import CustomButton from "../components/CustomButton"
import Property from '../util/Buttonprop'
import '../components/styles/signup.scss'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const nav = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const navigating = () => {
        nav("/")
    }
    function onClicksignup(e) {
        e.preventDefault();
    
        if (!formData.username || !formData.email || !formData.password) {
            alert("All fields are required!");
            return;
        }
    
        if (formData.password.length < 8) {
            alert("Password must be at least 8 characters long!");
            return;
        }

        for (var key in formData) {
            localStorage.setItem(key, formData[key]);
        }
    
        alert("Signup successful!");
    
        setFormData({
            username: "",
            email: "",
            password: "",
        });
    
        nav("/");
    }
    
    const formUpdater = (e) => {
        setFormData({
            ...formData,
            [(e.target.name).toLowerCase()]: e.target.value,
        })
    }
    useEffect(() => {
        console.log(formData)
    }, [formData]);




    return (
        <div className='signup-wrapper-class'>
            <div className='signup-form'>
                <h1>Signup</h1>
                <input type={String.typeText} name={String.placeholder_username} value={formData.username} onChange={formUpdater} placeholder={String.placeholder_username} required />
                <input type="email" name={String.placeholder_email} value={formData.email} onChange={formUpdater} placeholder={String.placeholder_email} required />
                <input type="password" name={String.placeholder_pass} value={formData.password} onChange={formUpdater} placeholder={String.placeholder_pass} required />
                {/* <Inp placeholder={String.placeholder_username} name={String.placeholder_username} icon={String.iconUsers} type={String.typeText} /> */}
                {/* <Inp placeholder={String.placeholder_username} value={username} onchange={d=>setUserName(d.target.value)} icon={String.iconUsers} type={String.type}/> */}
                {/* <Inp placeholder={String.placeholder_email} name={String.placeholder_email} icon={String.iconGmail} type={String.typeEmail} />
                <Inp placeholder={String.placeholder_pass} name={String.placeholder_pass} icon={String.iconPassword} type={String.typePassword} /> */}
                <CustomButton type={Property.type} fontColor={Property.fontColor} onClicksignup={onClicksignup} />
                <div className='login'>Already have an account? <br /><span style={{ "cursor": "pointer" }} onClick={navigating}>Login</span></div>
            </div>
        </div>

    )
}

export default Signup