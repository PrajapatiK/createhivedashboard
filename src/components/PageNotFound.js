import React from 'react'
import "./index.css";
//import images from '../../public/images/404error.jpg';

const PageNotFound = () => {
  return (
    <div className='img'>    
    <img style={{height:'300px',width:'300px'}}src={process.env.PUBLIC_URL + '/images/404images.png'} /> 
    </div>
  )
}

export default PageNotFound