import React from 'react';
import './carni.css';
import porkstack from '../../assets/porkstack.png';
import { Link } from "react-router-dom";
import Ellipse1 from '../../assets/Ellipse 1-1.png'
import {useState,useEffect} from 'react';


const Carni = () => {
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
        <div className='carni section_padding' id ='carni'>
            <div className='carni-yellow'></div>
            <div className='carni-content'>
            <div className='carni-content__input'>
                <button><Link to='/normal'>Normal food</Link></button>
                <button><Link to='/veget'>Vegetarian food</Link></button>
                <button><Link to='/diet'>Diet food</Link></button>
                </div>
                <div className='carni-content__space'></div>
            <h1 className='carni__text'>Seats per table:</h1>
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