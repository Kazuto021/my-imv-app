// import React from 'react'
import "./styles/inp.scss"
const Inp = (props) => {
  // function legendStyle(){
  //   console.log(props.placeholder)
  //   console.log(document.getElementsByClassName("title"))
  // }
  const checker = (e)=>{
    console.log("working outside the function");
    
    // console.log(e);
    if (e.target.checked === true){
      console.log(e)
      // console.log(document.querySelectorAll('input[type=image]'))
      
    }                                 
  }
  return (
    <div className='inp-container'>
      <legend className='title'>{props.placeholder}</legend>
      <label> <img src={props.icon} alt="" /> </label>
      {props.type == "image" ?(<input className="editIcon" type={props.type} name={props.placeholder}  value={props.value} placeholder={props.placeholder} src={props.src} />):
      (props.type=="checkbox"?(<input type={props.type} name={props.placeholder} value={props.value} onClick={checker} placeholder={props.placeholder} />):(<input type={props.type} name="" value={props.value} placeholder={props.placeholder}/>))}

    </div>
  )
}

export default Inp