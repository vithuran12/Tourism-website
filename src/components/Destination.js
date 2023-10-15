import React from 'react';
import './destination.css'
import DestinationData from './DestinationData';


const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the popularity to see a lot, within time frame.</p>
      
      <DestinationData
      className="first-des"
      heading="Taal Valcano, Batangas"
      text="Omnis doloribus tempore non doloremque numquam accusantium nulla enim possimus, nisi, fugit reprehenderit provident dignissimos ullam iste expedita. At maxime assumenda asperiores perspiciatis, iusto eos nostrum vitae ipsa dicta nisi. Quas voluptatem, quasi expedita delectus quae mollitia accusantium vero nemo dolorem nisi consequatur veniam voluptate enim quaerat eveniet, dolor obcaecati alias fugit eum ab. Aliquid modi a sit, est facilis cum molestias deserunt necessitatibus labore inventore ad ab ullam consectetur nobis quaerat tempore unde veritatis, dolore ut? Error dolorum amet maxime, placeat iure optio dignissimos illo ipsa veritatis quibusdam quis quae alias!"
      image1="../images/7.jpg"
      image2="../images/22.jpg"
      />

      <DestinationData
      className="first-des-reverse"
      heading="Torentino Ahmal"
      text="Ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt ut dolorem consectetur placeat voluptate nam laborum, quaerat incidunt amet assumenda natus sit magni quas nisi quia. Repudiandae non alias vel. Adipisci corporis iure odio. Iure, quos. Mollitia, sed in?"
      image1="../images/15.jpg"
      image2="../images/29.jpg"
      />
    </div>
  )
}

export default Destination
