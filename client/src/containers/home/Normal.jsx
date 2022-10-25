import React from 'react';
import './normal.css';
import burgerpage from '../../assets/burgerpage.png';
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import '../result/Normalresult';


const Normal = () => {
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
            <div className='normal-content__start'>
            <button><Link to='/normalresult' onClick={saveBtn}>Start</Link></button>
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