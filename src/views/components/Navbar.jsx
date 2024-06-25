import React, { useState } from "react";
import "./styles/navbar.scss";
import Profile from "./Profile";
import UserProp from "../util/UserProfile";
const Navbar = (props) => {
    const [toggle, setToggle] = useState(0);
    function hamBurger() {
        let leftElement = document.getElementsByClassName("left")[0]
        if (toggle=== 0) {
            // document.getElementsByClassName("left-portion")
            // let leftElement = document.getElementsByClassName("left")[0]
            // shows horizontal width of the users screen. 
            if (screen.availWidth <= 1440) {
                // alert(screen.availWidth)
                document.getElementsByClassName("right")[0].style.display = 'none';
                leftElement.style.display = 'flex';
                leftElement.style.width = "100%";
                leftElement.style.transition = "2s";
                setToggle(1)

            } else {
                document.getElementsByClassName("right")[0].style.display = 'flex';
                // document.getElementsByClassName("menu-item")[0].style.dis
                leftElement.style.display = 'flex';
                // leftElement.style.width = "40%";
                leftElement.style.transition = "0.4s";
                leftElement.style.width = "100%";
                setToggle(1)
            }
        }
        else{
            leftElement.style.width="0vw";
            leftElement.style.transition = "0.24s ease-in-out";

            setToggle(0)

        }


    }
    return (
        <div className="navbar">
            <div className="left-portion" onClick={hamBurger}>
                <img src="src\\assets\\hamburger.png" alt="" />
            </div>
            <div className="mid-portion">
                <div className="navbar">
                    <div className="inner-left-portion">
                        <img className="co-logo" src="src\assets\JainsonCorp.png" alt="" />
                    </div>
                    <div className="inner-mid-portion">
                        {props.companyName}
                    </div>
                    <div className="inner-right-portion">
                        <img src="notif.png" alt="" />
                        <img src="src\\assets\\help.png" alt="" />
                        <img src="mail.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="right-portion">
                <Profile StatusRequirement={UserProp.rightSideProfileStaus} scale={UserProp.rightScale} height={UserProp.Height} width={UserProp.width} />
            </div>
        </div>
    );
};

export default Navbar;
