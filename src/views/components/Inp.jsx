// import React from 'react'
import "./styles/inp.scss"
const Inp = (props) => {
  // function legendStyle(){
  //   console.log(props.placeholder)
  //   console.log(document.getElementsByClassName("title"))
  // }
  return (
    <div className='inp-container'>
      <legend className='title'>{props.placeholder}</legend>
      <label> <img src={props.icon} alt="" /> </label>
      {props.type == "image" ?(<input className="editIcon" type={props.type} name="" value={props.value} placeholder={props.placeholder} src={props.src} />):
      (<input type={props.type} name="" value={props.value} placeholder={props.placeholder} />)}

    </div>
  )
}

export default Inp