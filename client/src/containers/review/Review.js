import React from 'react';
import './review.css';
import Comments from './Comments'
import icecream from '../../assets/icecream.png'

const Review = () => {
  return (
    <div className='Review_topic'>
          <div class="Review-pic"><img src={icecream} alt='icecream' /></div>
          <div class="Review-yellow"></div>
      <div className='comment__space'></div>
      <h1>How is your food?</h1>
      <div class="square">
  <div class="comments_content">
      <Comments currentUserId='1'/>
      </div></div>
        </div>
  )
}

export default Review