import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Profile() {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const [isLoaded, setIsLoaded] = useState(true);
    const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
    };

    fetch("https://localhost:8000/api/user", requestOptions)
  .then(response => response.json())
  .then(result => { 
    if (result.id) {
        setUser(result.user)
        setIsLoaded(false)
    } else if (result.status == 'forbidden') {
        MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'error'
        }).then((value) => {
            navigate('/')
        })
    }
    console.log(result)
})
  .catch(error => console.log('error', error));
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  if (isLoaded) return (<div>Loading</div>)
  else {
    return (
        <div>
        <div>{user.id}</div>
        <div>{user.fname}</div>
        <div>{user.lname}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div><button onClick={logout}>logout</button></div>
        </div>
      )
  }
}

export default Profile
