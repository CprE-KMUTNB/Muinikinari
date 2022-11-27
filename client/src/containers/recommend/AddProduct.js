import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Scrollbar from 'react-custom-scrollbars';
import Button from '@mui/material/Button';
import tomyumm from '../../assets/tomyumm.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const AddProduct = () => {

  const navigate = useNavigate()

  const [state, setState] = useState({
    foodname:'',
    url:''
  })
  
  const {foodname, url} = state
  
  const inputValue = name => event => {
    setState({ ...state, [name]: event.target.value})
  }
  
  const saveProduct = (e) => {
    e.preventDefault()
    axios
    .post("http://127.0.0.1:8000/apireview/recommend/",{ ReccommendMenu:foodname,ReccommendPic:url})
    .then(response=>{
      navigate("/recommend")
      console.log(response)
    })
  
  }

  return (
    <div>
        <Container component="main" maxWidth="xs">
    <div className="columns is-centered mt-5">
      <div className="column-is-half">
      <img src={tomyumm} alt='ramen' />
        <form onSubmit={saveProduct}>
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
                style={{width: "100%", height: "25vh"}}/>
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
        transform: "translate(145%, 25%)",
        
        padding: "18px 36px",
        fontSize: "25px",
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: 'black'
    }}
    type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
    value="Add"
    />

            </div>
          </div>
        </form>
      </div>
    </div></Container></div>
  );
  };




export default AddProduct;