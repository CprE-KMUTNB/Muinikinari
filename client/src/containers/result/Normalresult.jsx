import React, { useEffect } from 'react';
import './normalresult.css';
import kawpad from '../../assets/pngwing 1.png';
import { Link, useParams } from "react-router-dom";
import axios from 'axios'


const Normalresult = () => {
  let {point} = useParams()
  const normal = 'normal'

  fetch(`http://localhost:8000/apirandom/menu/`,GET)
  /*.get(`http://localhost:8000/apirandom/menu/?search=${point}`)*/
  .then(response=> response.json())
 
  


  return (
    <div className='normalresult section__padding' id='normalresult'>
      <div className='normalresult-yellow'></div>
      <div className='normalresult-content'>
        
        <div className='normalresult-content__input'>
                <button><Link to='/normal'>Back to random page</Link></button>
                </div></div>
        <div className='normalresult-image'>
          <div className='normalresult-image-top'>
            <img src={kawpad} alt='kawpad' />
          </div>
               
        </div>
        </div>
  )
}

export default Normalresult