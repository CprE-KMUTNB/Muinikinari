import React from 'react';
import ImageSlider from '../../components/Slider';
import '../../css/App.scss';
import Scrollbar from 'react-custom-scrollbars';
import "./recommend.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


/*จัดหน้าRecommend*/
/*แก้ไขstyleที่App.scss*/
const Recommend = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

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
        {products.map((product) => (
          <div className="column is-one-quarter" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{product.name}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
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