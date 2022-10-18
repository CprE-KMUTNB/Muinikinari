import React from 'react';
import ImageSlider from '../../components/Slider';
import '../../css/App.scss';


/*จัดหน้าRecommend*/
/*แก้ไขstyleที่App.scss*/
const Recommend = () => {
  return (
    <div className='recommend section__margin' id='recommend'>
      <div className='container mt-5 carousel'>
      <h1 className='slider_title'>Recommend</h1>
      <ImageSlider />
    </div>
    </div>
  )
}

export default Recommend;