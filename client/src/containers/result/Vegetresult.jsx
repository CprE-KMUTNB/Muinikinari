import React, { useEffect } from 'react';
import './vegetresult.css';
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import  {listMenu} from "../../components/function"

const Vegetresult = () => {
  let {point} = useParams()
  const veget = 'veget'

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
    <div className='vegetresult section__padding' id='vegetresult'>
      <div className='vegetresult-yellow'></div>
      <div className='vegetresult-content'>
        
        <div className='vegetresult-content__input'>
          <h1>{localStorage.getItem('Foodname')}</h1>
                <Link to='/veget'><button>Back to random page</button></Link>
                </div></div>
        <div className='vegetresult-image'>
          <div className='vegetresult-image-top'>
            <img src={localStorage.getItem('Foodpic')}  />
          </div>
               
        </div>
        </div>
  )
}

export default Vegetresult