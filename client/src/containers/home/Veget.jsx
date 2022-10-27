import React from 'react';
import './veget.css';
import veganfood from '../../assets/vegansalad 1.png';
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';

const Veget = () => {
    const options = [
        {value: '', text: '--Choose an option--'},
        {value: '50', text: '50 bath'},
        {value: '100', text: '100 bath'},
        {value: '200', text: '200 bath'},
    ];

    const [selected, setSelected] = useState(options[0].value);

    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
      };
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
            
          <div className='normal-content__start'></div>
          <p>Food price:</p>
            <select className="form-control" value={selected} onChange={handleChange}>
            {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
              ))
              }

          </select>
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