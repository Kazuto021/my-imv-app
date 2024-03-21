import React from 'react'
// import Property from "../util/Buttonprop"
import './styles/button.scss'

const CustomButton = (props) => {
  return (
    <div className='wrapper-class'>
      {props.type == "submit" ?
        (<input className="but" onClick={props.onClicksignup} type={props.type} style={{ "color": props.fontColor }} value={props.value}/>)
        :
        // (<input className="but" type={props.type} style={{ "color": props.fontColor }} />)
        (<input className="but" type={props.type} onClick={props.onClickLogin} value={props.value} style={{ "color": props.fontColor }}  />)
      }
    </div>
  )
}

export default CustomButton