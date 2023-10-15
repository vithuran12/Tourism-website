import React, {useState} from 'react'
import './HeroStyles.css'

const Hero = (props) => {

  const [clicked,setClicked] = useState (true)
  return (

    <>

      <div className={props.cName}>
        
      <div className="imgdiv">
      <img className="img" src={props.img} alt="img" />

        <div className={props.textPart}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
          </div>
          </div>

        </div>
    </>
  )
}

export default Hero
