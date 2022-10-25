import React from 'react';
import './normalresult.css';
import kawpad from '../../assets/pngwing 1.png';
import { Link } from "react-router-dom";

const Normalresult = () => {

  return (
    <div className='normalresult section__padding' id='normalresult'>
      <div className='normalresult-yellow'></div>
      <div className='normalresult-content'>
        <h1>ข้าวผัดกุ้ง</h1>
        <p>ราคา 40 บาท</p>
        <p>ร้านสกล</p>
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