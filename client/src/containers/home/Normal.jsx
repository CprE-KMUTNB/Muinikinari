import React from 'react';
import './normal.css';
import burgerpage from '../../assets/burgerpage.png';
import { Link } from "react-router-dom";


const Normal = () => {
    return (
        <div className='normal section_padding' id ='normal'>
            <div className='normal-yellow'></div>
            <div className='normal-content'>
            <div className='normal-content__input'>
                <button><Link to='/veget'>Vegetarian food</Link></button>
                <button><Link to='/diet'>Diet food</Link></button>
                <button><Link to='/carni'>Carnivore diet food</Link></button>
                </div>
                <div className='normal-content__space'></div>
            <h1 className='normal__text'>Seats per table:</h1>
            <p>Food price:</p>
            <div className='normal-content__start'>
            <button><Link to='/normal'>Start</Link></button>
            </div>
            </div>
            <div className='normal-image'>
                <div className='normal-image-top'>
                    <img src={burgerpage} alt='burgerpage' />
                </div>
                </div>
            </div>
            )
}

export default Normal