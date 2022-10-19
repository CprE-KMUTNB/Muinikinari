import React from 'react'
import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'
import padthaikung from '../../assets/padthaikung.png'


function Login() {
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

        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
  "email": inputs.email,
  "password": inputs.password,
  "expiresIn": 6000000
});

    var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

    fetch("http://localhost:8000/api/login", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    if (result.jwt) {
        MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'success'
          }).then((value) => {
            localStorage.setItem('token', result.accessToken)
            navigate('/profile')
          })
    } else {
        MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'error'
        })
    }
})
  .catch(error => console.log('error', error));
        console.log(inputs);
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
          <img src={padthaikung} alt='padthaikung' />          
          <Typography component="h1" variant="h5" color="#E7B925" fontFamily={'Poppins'} fontWeight='700' fontSize='30px'>
          Welcome to MuiNiKinAri
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              InputLabelProps={{style: {fontFamily: 'Poppins' ,color: 'white', fontSize:'20px'}}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={inputs.email || ""} 
              onChange={handleChange}
            />
            <TextField
              InputLabelProps={{style: {fontFamily: 'Poppins' ,color: 'white', fontSize:'20px'}}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={inputs.password || ""} 
              onChange={handleChange}
            />

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
    Login
</Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" color="#A8FFF8" fontFamily={'Poppins'} fontWeight='500' fontSize='17px'>
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Login
