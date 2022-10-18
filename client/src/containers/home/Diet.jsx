import React from 'react';
import './diet.css';
import dietfood from '../../assets/dietfood.png';
import { Link } from "react-router-dom";
import Ellipse1 from '../../assets/Ellipse 1-1.png'


const Diet = () => {
    return (
        <div className='diet section_padding' id ='normal'>
            <div className='diet-yellow'></div>
            <div className='diet-content'>
            <div className='diet-content__input'>
                <button><Link to='/normal'>Normal food</Link></button>
                <button><Link to='/veget'>Vegetarian food</Link></button>
                <button><Link to='/carni'>Carnivore diet food</Link></button>
                </div>
                <div className='diet-content__space'></div>
            <h1 className='diet__text'>The number of people:</h1>
            <p>On a budget:</p>
            <div className='diet-content__start'>
            <button><Link to='/normal'>Start</Link></button>
            </div>
            </div>
            <div className='diet-image'>
                <div className='diet-image-top'>
                    <img src={dietfood} alt='dietfood' />
                </div>
                <div className='diet-image-bottom'>
          <img src={Ellipse1} alt='Ellipse1' />
        </div> 
                </div>
            </div>
            )
}

export default Diet