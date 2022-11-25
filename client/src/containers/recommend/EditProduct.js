import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Scrollbar from 'react-custom-scrollbars';
import Button from '@mui/material/Button';
import ramen from '../../assets/ramen.png'
import Typography from '@mui/material/Typography';


const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/apireview/recommend/${id}`);
    setTitle(response.data.name);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.patch(`http://127.0.0.1:8000/apireview/recommend/${id}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
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
      <img src={ramen} alt='ramen' />
        <form onSubmit={updateProduct}>
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
                placeholder="Food Name"
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
    Update
</Button>
            </div>
          </div>
        </form>
      </div></Scrollbar>
    </div>
  );
};

export default EditProduct;