import React from 'react';
import './diet.css';
import dietfood from '../../assets/dietfood.png';
import { Link } from "react-router-dom";
import Ellipse1 from '../../assets/Ellipse 1-1.png'
import {useState,useEffect} from 'react';

const Diet = () => {
    const [companyName, setCompanyName] = useState("")
    const [companyOwner, setCompanyOwner] = useState("")
    const [ownerAddress, setOwnerAddress] = useState("")
    const [companyList, setCompanyList] = useState([{'name':'','id':''}])
    useEffect(() =>{
        const fetchData = async ()=>{
            const response = await fetch(`http://127.0.0.1:8000/api/company/`);
            const newData = await response.json();
            setCompanyList(newData);
            // console.log(newData);
        };
        fetchData();
    }, [])

    const handleChange = (event) =>{
        setCompanyName(event.target.value);
    }

    const saveBtn = (e) => {
        e.preventDefault();
        console.log('Company Owner',companyOwner);
        console.log('Company Owner Address',ownerAddress);
        console.log('Company Name',companyName);

    }
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
            <h1 className='diet__text'>Seats per table:</h1>
            <select className="form-control" value={companyName} onChange={handleChange}>
              {companyList.map(company => (
              <option value={company.name} key={company.id} >{company.name}</option>
    
              ))
              }

          </select>
          <div className='normal-content__start'></div>
            <p>Food price:</p>
            <select className="form-control" value={companyName} onChange={handleChange}>
              {companyList.map(company => (
              <option value={company.name} key={company.id} >{company.name}</option>
    
              ))
              }

          </select>
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