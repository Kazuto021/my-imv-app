import React from "react";
import UserProp from "../util/UserProfile";
const Profile = (props) => {
  return (
    <div className="profile" style={{maxHeight:"10rem"}}>
      <div
        className="profile-pic"
        style={{height:props.height, width:props.width , scale:props.scale}}
      ></div>
      <div className="user-detail">
        {UserProp.Username}
        {props.StatusRequirement == "true"? (
        <div id="user-status">{UserProp.Status}</div>) : (<></>)
    }   
      </div>
    </div>
  );
};

export default Profile;
