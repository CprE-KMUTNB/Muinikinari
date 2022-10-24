import React from 'react';
import './veget.css';
import veganfood from '../../assets/vegansalad 1.png';
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';

const Veget = () => {
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
        <div className='veget section_padding' id ='normal'>
            <div className='veget-yellow'></div>
            <div className='veget-content'>
            <div className='veget-content__input'>
                <button><Link to='/normal'>Normal food</Link></button>
                <button><Link to='/diet'>Diet food</Link></button>
                <button><Link to='/carni'>Carnivore diet food</Link></button>
                </div>
                <div className='veget-content__space'></div>
            <h1 className='veget__text'>Seats per table:</h1>
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
            <div className='veget-content__start'>
            <button><Link to='/veget' onClick={saveBtn}>Start</Link></button>
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