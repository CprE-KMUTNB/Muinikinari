import React from 'react';
import './veget.css';
import veganfood from '../../assets/veganfood.png';
import { Link } from "react-router-dom";


const Veget = () => {
    return (
        <div className='veget section_padding' id ='normal'>
            <div className='veget-yellow'></div>
            <div className='veget-content'>
            <div className='veget-content__input'>
                <button><Link to='/normal'>Normal food</Link></button>
                <button><Link to='/diet'>Diet food</Link></button>
                <button><Link to='/carni'>Carnivore diet food</Link></button>
                </div>
                <div className='veget-content__space'></div>
            <h1 className='veget__text'>The number of people:</h1>
            <p>Budget per person:</p>
            <div className='veget-content__start'>
            <button><Link to='/veget'>Start</Link></button>
            </div>
            </div>
            <div className='veget-image'>
                <div className='veget-image-top'>
                    <img src={veganfood} alt='veganfood' />
                </div>
                </div>
            </div>
            )
}

export default Veget