import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./addproduct.css";
import tomyumm from '../../assets/tomyumm.png'
import Typography from '@mui/material/Typography';
import Scrollbar from 'react-custom-scrollbars';
import Button from '@mui/material/Button';

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.post("http://127.0.0.1:8000/apireview/recommend/", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <Scrollbar style={{ width: 1850, height: 810 }}>
      <div className="column-is-half">
      <img src={tomyumm} alt='tomyumm' />
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product Name"
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
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

        <div className="field">
            <div className="control">
            <Button
    style={{
        borderRadius: 35,
        backgroundColor: "#E7B925",
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
    >
    Save
</Button>
            </div>
          </div>
        </form>
      </div></Scrollbar>
    </div>
  );
};

export default AddProduct;