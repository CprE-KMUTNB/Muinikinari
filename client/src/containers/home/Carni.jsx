import React from 'react';
import './carni.css';
import porkstack from '../../assets/porkstack.png';
import { Link } from "react-router-dom";
import Ellipse1 from '../../assets/Ellipse 1-1.png'


const Carni = () => {
    return (
        <div className='carni section_padding' id ='carni'>
            <div className='carni-yellow'></div>
            <div className='carni-content'>
            <div className='carni-content__input'>
                <button><Link to='/normal'>Normal food</Link></button>
                <button><Link to='/veget'>Vegetarian food</Link></button>
                <button><Link to='/diet'>Diet food</Link></button>
                </div>
                <div className='carni-content__space'></div>
            <h1 className='carni__text'>The number of people:</h1>
            <p>Budget per person:</p>
            <div className='carni-content__start'>
            <button><Link to='/carni'>Start</Link></button>
            </div>
            </div>
            <div className='carni-image'>
                <div className='carni-image-top'>
                    <img src={porkstack} alt='porkstack' />
                </div>
                <div className='diet-image-bottom'>
          <img src={Ellipse1} alt='Ellipse1' />
        </div> 
                </div>
            </div>
            )
}

export default Carni