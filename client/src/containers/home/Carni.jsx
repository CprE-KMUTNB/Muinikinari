import React from 'react';
import './carni.css';
import porkstack from '../../assets/porkstack.png';
import { Link } from "react-router-dom";
import Ellipse1 from '../../assets/Ellipse 1-1.png'
import {useState,useEffect} from 'react';


const Carni = () => {
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
        <div className='carni section_padding' id ='carni'>
            <div className='carni-yellow'></div>
            <div className='carni-content'>
            <div className='carni-content__input'>
                <Link to='/normal'><button>Normal food</button></Link>
                <Link to='/veget'><button>Vegetarian food</button></Link>
                <Link to='/diet'><button>Diet food</button></Link>
                </div>
                <div className='carni-content__space'></div>
            
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