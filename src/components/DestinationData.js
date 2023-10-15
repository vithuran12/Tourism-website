import React from 'react';
import './destination.css'

const DestinationData = (props) => {
  return (
    <div>
      <div className={props.className}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className='image'>
                <img src={props.image1} alt="img" />
                <img src={props.image2} alt="img" />

            </div>
        </div>
    </div>
  )
}

export default DestinationData
