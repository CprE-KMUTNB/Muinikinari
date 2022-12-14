import React from 'react';
import './home.css';
import padthai from '../../assets/padthai.png';
import Ellipse1 from '../../assets/Ellipse 1.png'
import { Link } from "react-router-dom";

/*ตกแต่งหน้าHome*/
/*แก้ไขstyleที่home.css*/
const Home = () => {

  return (
    <div className='home section__padding' id='home'>
      <div className='home-yellow'></div>
      <div className='home-content'>
        <h1 className='gradient__text'>Good food</h1>
        <p>is the foundation of happiness.</p>
        <div className='home-content__input'>
        <Link to='/normal'><button>Normal food</button></Link>
        <Link to='/veget'><button>Vegetarian food</button></Link>
        <Link to='/diet'><button>Diet food</button></Link>
        <Link to='/carni'><button>Carnivore diet food</button></Link>
  </div>
        </div>
        <div className='home-image'>
          <div className='home-image-top'>
            <img src={padthai} alt='padthai' />
          </div>
          <div className='home-image-bottom'>
          <img src={Ellipse1} alt='Ellipse1' />
        </div>        
        </div>
        </div>
  )
}

export default Home