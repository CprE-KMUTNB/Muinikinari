import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import promotion1 from '../assets/promotion1.png';
import promotion2 from '../assets/promotion2.png';
import promotion3 from '../assets/promotion3.jpg';
import promotion4 from '../assets/promotion4.jpg';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import {useState,useEffect} from 'react';

/*สร้างฟังก์ชันslideรูป สำหรับหน้าrecommend*/
function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 3,
        slideToScroll: 1,
        cssEase: 'linear'
    }
  return (
    <Slider {...settings}>
        
        <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
            <img src={promotion1} alt='promotion1' />
            </div>
            <div className='details'>
                <h2>Food Wonderground<span className='restaurant-title'>คูปองส่วนลด 15% เมื่อผู้เข้าร่วมกิจกรรมมียอดสั่งซื้อขั้นต่ำ 500 บาท ต่อ 1 คำสั่งซื้อ</span></h2>
            </div>
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
            <img src={promotion2} alt='promotion2' />
            </div>
            <div className='details'>
                <h2>FEEL GOOD FEEL FOO:D , พักร้อนนอนสบาย กินดีให้ฟีลกู๊ด<span className='restaurant-title'>ระหว่างวันที่ 17-26 ก.ย. ติดตาม WOW ITEMS ดีลเด็ดของอร่อย และโปรโรงแรม</span></h2>
            </div>
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
            <img src={promotion3} alt='promotion3' />
            </div>
            <div className='details'>
                <h2>สิทธิพิเศษ : เฉพาะสมาชิก MK Diamond and Black<span className='restaurant-title'>รับสิทธิ์ซื้อชุดอิ่มคุ้ม 899 บาท (จากปกติราคา 1,135 บาท)</span></h2>
            </div>
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
            <img src={promotion4} alt='promotion4' />
            </div>            
            <div className='details'>
                <h2>MK คุ้มตามใจ! ลดสูงสุดกว่า 30%* เริ่มต้นเพียง 299 บาท<span className='restaurant-title'>ให้คุณเลือกจัดเซตความอร่อยได้เอง จาก 4 หมวดสุดฮิต</span></h2>
            </div>
        </div>
        </div>
    </Slider>
    
    )
}

export default ImageSlider

//... is called spread operator