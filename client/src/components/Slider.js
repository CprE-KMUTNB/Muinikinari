import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import kahmoo from '../assets/kahmoo.jpg';
import yumsalmon from '../assets/yumsalmon.jpg';
import kapowmoo from '../assets/kapowmoo.jpg';
import padseeew from '../assets/padseeew.jpg';
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
            <img src={kahmoo} alt='kahmoo' />
            </div>
            <div className='details'>
                <h2>ข้าวขาหมู <span className='restaurant-title'>ร้านสกล ศูนย์อาหาร ตึก 40 ขั้น 2 ช่อง 2</span></h2>
            </div>
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
            <img src={yumsalmon} alt='yumsalmon' />
            </div>
            <div className='details'>
                <h2>ยำแซลม่อน <span className='restaurant-title'>ร้านเฮงเฮง ศูนย์อาหาร ตึก 40 ขั้น 2 ช่อง 9</span></h2>
            </div>
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
            <img src={kapowmoo} alt='kapowmoo' />
            </div>
            <div className='details'>
                <h2>ข้าวกะเพราหมูสับ <span className='restaurant-title'>ร้านจารุณี ศูนย์อาหาร ตึก 40 ขั้น 2 ช่อง 5</span></h2>
            </div>
        </div>
        </div>
        <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
            <img src={padseeew} alt='padseeew' />
            </div>            
            <div className='details'>
                <h2>ผัดซีอิ๊ว <span className='restaurant-title'>ร้านเฮงเฮง ศูนย์อาหาร ตึก 40 ขั้น 2 ช่อง 9</span></h2>
            </div>
        </div>
        </div>
    </Slider>
    )
}

export default ImageSlider

//... is called spread operator