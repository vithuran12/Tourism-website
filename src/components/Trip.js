import React from 'react'
import './TripStyles.css'
import TripData from './TripData';

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p1>You can discover unique destinations using Google Maps.</p1>
      
    <div className="tripcard">
      <TripData
      image='./images/32.jpg'
      heading="Trip in Indonesia"
      text="Dolor sit amet consectetur adipisicing elit. Voluptatum ipsum vitae, mollitia reprehenderit repellendus cumque harum ab! Iusto soluta voluptatibus repellendus nam placeat saepe aut enim, possimus ratione dolorum exercitationem!"
      
      />

<TripData
      image='./images/36.jpg'
      heading="Trip in France"
      text="Sit amet consectetur adipisicing elit. Harum numquam iste debitis distinctio reiciendis. Molestias laborum, rerum labore repellendus ipsa illum quasi incidunt consequuntur nobis quidem omnis. Ipsa non deleniti, reiciendis molestias incidunt ea animi?"
      
      />

<TripData
      image='./images/37.jpg'
      heading="Trip in Malasiya"
      text="Pariatur blanditiis optio voluptatibus, maxime consectetur aliquid eveniet quae, asperiores exercitationem similique nesciunt quasi rem iure nam, ut sapiente temporibus accusantium quidem tempore repudiandae. Consequatur obcaecati consectetur delectus beatae possimus amet."

      
      />
    </div>
    </div>
  )
}

export default Trip;
