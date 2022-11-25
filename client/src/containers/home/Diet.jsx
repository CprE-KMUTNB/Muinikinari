import React from 'react';
import './diet.css';
import dietfood from '../../assets/dietfood.png';
import { Link } from "react-router-dom";
import Ellipse1 from '../../assets/Ellipse 1-1.png'
import {useState,useEffect} from 'react';

const Diet = () => {
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
        <div className='diet section_padding' id ='diet'>
            <div className='diet-yellow'></div>
            <div className='diet-content'>
            <div className='diet-content__input'>
                <Link to='/normal'><button>Normal food</button></Link>
                <Link to='/veget'><button>Vegetarian food</button></Link>
                <Link to='/carni'><button>Carnivore diet food</button></Link>
                </div>
                <div className='diet-content__space'></div>

                <div className='diet-content__start'></div>
            <p>Food price:</p>
            <select className="form-control" value={selected} onChange={handleChange}>
            {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
    
              ))
              }

          </select>
             
            <div className='diet-content__start'>
    
             <Link to={`/dietresult/${selected}`} ><button>Start</button></Link>
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