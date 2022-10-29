import React from 'react';
import './review.css';
import Comments from './Comments'
import icecream from '../../assets/icecream.png'
import Scrollbar from 'react-custom-scrollbars';
const Review = () => {
  
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