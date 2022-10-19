import React from 'react'
import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ReactDOM from 'react-dom/client';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'

import sweetcorn from '../../assets/sweetcorn.png'


function Register() {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
  "fname": inputs.fname,
  "lname": inputs.lname,
  "username": inputs.username,
  "password": inputs.password,
  "email": inputs.email,
  //"avatar": inputs.avatar
});

    var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

    fetch("http://localhost:8000/api/register", requestOptions)
  .then(response => response.json())
  .then(result => {
    if (result.status == 'ok') {
        MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'success'
        }).then((value) => {
            navigate('/')
        })
    } else {
        MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'error'
        })
    }
  })
  .catch(error => console.log('error', error));
    }

  return (
    <div>
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <img src={sweetcorn} alt='sweetcorn' height="170"/>
          <Typography component="h1" variant="h5" color="#E7B925" fontFamily={'Poppins'} fontWeight='700' fontSize='30px'>
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                InputLabelProps={{style: {fontFamily: 'Poppins' ,color: 'white', fontSize:'20px'}}}
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  autoFocus
                  value={inputs.fname || ""} 
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                InputLabelProps={{style: {fontFamily: 'Poppins' ,color: 'white', fontSize:'20px'}}}
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="family-name"
                  value={inputs.lname || ""} 
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                InputLabelProps={{style: {fontFamily: 'Poppins' ,color: 'white', fontSize:'20px'}}}
                  required
                  fullWidth
                  id="username"
                  label="UserName"
                  name="username"
                  autoComplete="username"
                  value={inputs.username || ""} 
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputLabelProps={{style: {fontFamily: 'Poppins' ,color: 'white', fontSize:'20px'}}}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={inputs.password || ""} 
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputLabelProps={{style: {fontFamily: 'Poppins' ,color: 'white', fontSize:'20px'}}}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={inputs.email || ""} 
                  onChange={handleChange}
                />
              </Grid>
             
            </Grid>
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
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" color="#A8FFF8" fontFamily={'Poppins'} fontWeight='500' fontSize='17px'>
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Register
