import React from 'react';
import './review.css';
import Comments from './Comments'
import icecream from '../../assets/icecream.png'
import Scrollbar from 'react-custom-scrollbars';
import  {listRecommend} from "../../components/function"
import { useState, useEffect } from "react";

const Review = () => {

  const loadData=()=>{
    listRecommend()
    .then(res=>{
      console.log(res)
      const Name = res.data[0].ReccommendMenu
      const Pic = res.data[0].ReccommendPic
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
    <div className='Review_topic'>
          <div class="Review-pic"><img src={icecream} alt='icecream' /></div>
          <div class="Review-yellow"></div>
      <div className='comment__space'></div>
      <h1>How is your food?</h1>
      <div class="square">
  <div class="comments_content">
  <Scrollbar style={{ width: 1000, height: 500 }}>
      <Comments currentUserId='1'/>
      </Scrollbar>
      </div>
        </div></div>
  )
}

export default Review