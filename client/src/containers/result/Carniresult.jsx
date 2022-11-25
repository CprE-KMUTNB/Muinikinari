import React, { useEffect } from 'react';
import './carniresult.css';
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import  {listMenucarni} from "../../components/function"

const Carniresult = () => {
  let {point} = useParams()
  const carni = 'carni'

 /* fetch(`http://localhost:8000/apirandom/menu/`,GET)
  .get(`http://localhost:8000/apirandom/menu/?search=${point}`)
  .then(response=> response.json())*/

  const loadData=()=>{
    listMenucarni()
    .then(res=>{
      console.log(res)
      const Name = res.data[0].MenuName
      const Pic = res.data[0].MenuPic
      const Res = res.data[0].RestaurantName //
      localStorage.setItem('Foodname',Name)
      localStorage.setItem('Foodpic',Pic)
      localStorage.setItem('Foodres',Res) //
    }).catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    loadData()
  },[])
  


  return (
    <div className='carniresult section__padding' id='carniresult'>
      <div className='carniresult-yellow'></div>
      <div className='carniresult-content'>
        
        <div className='carniresult-content__input'>
          <h1>{localStorage.getItem('Foodname')}</h1>
          <h1>{localStorage.getItem('Foodres')}</h1>  
                <Link to='/carni'><button>Back to random page</button></Link>
                </div></div>
        <div className='carniresult-image'>
          <div className='carniresult-image-top'>
            <img src={localStorage.getItem('Foodpic')}  />
          </div>
               
        </div>
        </div>
  )
}

export default Carniresult