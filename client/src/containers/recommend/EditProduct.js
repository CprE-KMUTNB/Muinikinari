import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Scrollbar from 'react-custom-scrollbars';
import Button from '@mui/material/Button';
import ramen from '../../assets/ramen.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const EditProduct = () => {

  let { id } = useParams();

  

  const [state, setState] = useState({
    foodname:'',
    url:''
  })
  
  const {foodname, url} = state
  
  const inputValue = name => event => {
    setState({ ...state, [name]: event.target.value})
  }
  
  const editProduct = (e) => {
    e.preventDefault()
    axios
    .put(`http://127.0.0.1:8000/apireview/recommend/${id}/`,{ ReccommendMenu:foodname,ReccommendPic:url})
    .then(response=>{
      console.log(response)
    })
  
  }

  return (
    <div><Container component="main" maxWidth="xs">
      <div className="columns is-centered mt-5">
      <div className="column-is-half">
      <img src={ramen} alt='ramen' style={{
      
      transform: "translate(20%, 0%)"}}/>
        <form onSubmit={editProduct}>
          <div className="field">
          <Typography component="h1" variant="h5" color="#E7B925" fontFamily={'Poppins'} fontWeight='700' fontSize='30px' alignItems='center'>
          Food Name
          </Typography>
          <div className="control">
              <input
                style={{width: 500, height: 50}}
                type="text"
                className="input"
                placeholder="Food Name"
                value={foodname}
                onChange ={inputValue('foodname')}
              />
            </div>
          </div>

          <div className="field">
          <Typography component="h1" variant="h5" color="#E7B925" fontFamily={'Poppins'} fontWeight='700' fontSize='30px'>
          Image
          </Typography>
            <div className="control">
              <div className="file">
                <label className="file-label">
                <img src={url} 
                style={{width: "100%", height: "50vh"}}/>
                <input
                style={{width: 500, height: 50}}
                type="text"
                className="input"
                placeholder="Food Image"
                value={url}
                onChange ={inputValue('url')}
              />
                </label>
              </div>
            </div>
          </div>

          

          <div className="field">
            <div className="control">
            <input
    style={{
      borderRadius: 35,
      backgroundColor: "#E7B925",
      transform: "translate(130%, 25%)",
      
      padding: "18px 36px",
      fontSize: "25px",
      fontFamily: 'Poppins',
      fontWeight: '700',
      color: 'black'
    }}
    type="submit"
              fullWidth
              variant="contained"
    value="Save"
    />

            </div>
          </div>
        </form>
      </div>
    </div>
    </Container></div>
    
  );
  };




export default EditProduct