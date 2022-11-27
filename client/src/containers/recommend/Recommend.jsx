import React from 'react';
import ImageSlider from '../../components/Slider';
import '../../css/App.scss';
import Scrollbar from 'react-custom-scrollbars';
import "./recommend.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  {listRecommend} from "../../components/function"

import ramen from '../../assets/ramen.png'

/*จัดหน้าRecommend*/
/*แก้ไขstyleที่App.scss*/
const Recommend = () => {
  const [foodall,setFoodall] = useState([]);

  const loadData=()=>{
    listRecommend()
    .then(res=>{
      console.log(res)
      setFoodall(res.data)
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

  useEffect(() => {
    getFoodall();
  }, []);

  const getFoodall = async () => {
    const response = await axios.get("http://127.0.0.1:8000/apireview/recommend/");
    setFoodall(response.data);
  };

  const deleteProduct = async (Reccommendid) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/apireview/recommend/${Reccommendid}`);
      getFoodall();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(foodall)
  return (
  
      <div className='container mt-5 carousel'>
      
      <h1 className='slider_title'>Promotion</h1>
      <ImageSlider />
      <h1 className='bestseller_title' >RECOMMEND
      <Link to="/add" className="button-is-success"><button>+</button>
      </Link>
      </h1>

      <div className='bestseller_pic'>
      {/* <Link to="/add" className="button-is-success"><button>
      Add New
      </button>
      </Link> */}
        <div className='newcard' >

        {foodall.map((foodall,index) => (
        <div className="newcard_image" key={index}>
          <img src={foodall.ReccommendPic} alt="Image" />
          
          <div className='newcard_content'>
          <p className="title_is_4">{foodall.ReccommendMenu}</p>
          </div>
          <div className='newcard_content'>
            <Link to={`../edit/${foodall.Reccommendid}`} className="card_footer_item">
                  Edit
                </Link>
                </div>
            <div className='newcard_content'>
            <a
                  onClick={() => deleteProduct(foodall.Reccommendid)}
                  // onClick={()=>console.log(foodall.Reccommendid)}
                  className="card_footer_item"
                >
                  Delete
                </a>
            </div>
        </div>
      )) }
        </div>
      </div>
      </div>

  )
}


export default Recommend;