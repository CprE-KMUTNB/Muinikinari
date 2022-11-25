import React, { useEffect } from 'react';
import './normalresult.css';
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import  {listMenu} from "../../components/function"

const Normalresult = () => {
  let {point} = useParams()
  const normal = 'normal'

 /* fetch(`http://localhost:8000/apirandom/menu/`,GET)
  .get(`http://localhost:8000/apirandom/menu/?search=${point}`)
  .then(response=> response.json())*/

  const loadData=()=>{
    listMenu()
    .then(res=>{
      console.log(res)
      const Name = res.data[0].MenuName
      const Pic = res.data[0].MenuPic
      localStorage.setItem('Foodname',Name)
      localStorage.setItem('Foodpic',Pic)
    }).catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    loadData()
  },[])
  


  return (
    <div className='normalresult section__padding' id='normalresult'>
      <div className='normalresult-yellow'></div>
      <div className='normalresult-content'>
        
        <div className='normalresult-content__input'>
          <h1>{localStorage.getItem('Foodname')}</h1>
                <Link to='/normal'><button>Back to random page</button></Link>
                </div></div>
        <div className='normalresult-image'>
          <div className='normalresult-image-top'>
            <img src={localStorage.getItem('Foodpic')}  />
            <img src={localStorage.getItem('Foodpic')}/>
          </div>
               
        </div>
        </div>
  )
}

export default Normalresult