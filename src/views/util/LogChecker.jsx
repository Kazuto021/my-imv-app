import React from 'react'

const LogChecker = () => {
  console.log(localStorage.getItem("isLoggedIn"));
    return localStorage.getItem("isLoggedIn")
    // localStorage.key()

}
export default LogChecker