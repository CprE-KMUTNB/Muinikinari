import React from 'react';
import './normal.css';
import burgerpage from '../../assets/burgerpage.png';
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import '../result/Normalresult';


const Normal = () => {
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
        <div className='normal section_padding' id ='normal'>
            <div className='normal-yellow'></div>
            <div className='normal-content'>
            <div className='normal-content__input'>
                <Link to='/veget'><button>Vegetarian food</button></Link>
                <Link to='/diet'><button>Diet food</button></Link>
                <Link to='/carni'><button>Carnivore diet food</button></Link>
                </div>
                <div className='normal-content__space'></div>
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
             
            <div className='normal-content__start'>
    
             <Link to={`/normalresult/${selected}`} ><button>Start</button></Link>
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