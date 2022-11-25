import React from 'react';
import ImageSlider from '../../components/Slider';
import '../../css/App.scss';
import Scrollbar from 'react-custom-scrollbars';
import "./recommend.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  {listRecommend} from "../../components/function"



/*จัดหน้าRecommend*/
/*แก้ไขstyleที่App.scss*/
const Recommend = () => {
  const [products, setProducts] = useState([]);
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

 /* useEffect(() => {
    getProducts();
  }, []);*/

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(foodall)
  return (
  
    <div className='recommend section__margin' >
      <div className='container mt-5 carousel'>
      <Scrollbar style={{ width: 1900, height: 810 }}>
      <h1 className='slider_title'>Promotion</h1>
      <ImageSlider />
      <div className='bestseller-content__space'></div>
      <h1 className='bestseller_title'>RECOMMEND</h1>
      <div className='bestseller_pic'>
      <Link to="/add" className="button-is-success"><button>
      Add New
      </button>
      </Link>
      <div className="columns is-multiline mt-2">
        {foodall.map((foodall,index) => (
          <div className="column is-one-quarter" key={index}>
            
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  {/* <img src="https://miro.medium.com/max/1200/1*dLaDL-lSN0iprzmOpmM7zQ.png"  /> */}
                  <img src={`http://localhost:8000/pic/${foodall.ReccommendPic}`} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{foodall.ReccommendMenu}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${foodall.Reccommendid}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(foodall.Reccommendid)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Scrollbar>
    </div>
    </div>
  )
}

export default Recommend;