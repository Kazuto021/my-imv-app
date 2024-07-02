import React from 'react'

const LogChecker = () => {
  console.log(localStorage.getItem("isLoggedIn"));
    return localStorage.getItem("isLoggedIn")


}
export default LogChecker