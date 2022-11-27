import React, { useEffect } from 'react';
import './dietresult.css';
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import  {listMenudiet} from "../../components/function"

const Dietresult = () => {
  let {point} = useParams()
  const diet = 'diet'

 /* fetch(`http://localhost:8000/apirandom/menu/`,GET)
  .get(`http://localhost:8000/apirandom/menu/?search=${point}`)
  .then(response=> response.json())*/

  const loadData=()=>{
    listMenudiet()
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
    <div className='dietresult section__padding' id='dietresult'>
      <div className='dietresult-yellow'></div>
      <div className='dietresult-content'>
        
        <div className='dietresult-content__input'>
          <h1>ชื่อเมนู : {localStorage.getItem('Foodname')}</h1>
          <h1>ร้านอาหาร : {localStorage.getItem('Foodres')}</h1>  
                <Link to='/diet'><button>Back to random page</button></Link>
                </div></div>
        <div className='dietresult-image'>
          <div className='dietresult-image-top'>
            <img src={localStorage.getItem('Foodpic')}  />
          </div>
               
        </div>
        </div>
  )
}

export default Dietresult