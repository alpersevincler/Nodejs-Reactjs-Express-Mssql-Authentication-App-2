import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Home() {

  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  
  useEffect( () => {

    fetch('http://localhost:8081', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => {
      res.json().then((jsonResponse) => {
        if(jsonResponse.Status === "Success") {
          console.log("Home jsonResponse = ", jsonResponse)
          setAuth(true)
          setName(jsonResponse.name)
        }else {
          setAuth(false)
          setMessage(jsonResponse.Error)
        }
      }).catch(err => console.log("Home page eror = ", err));
    })

    /* 
    axios.get('http://localhost:8081')
    .then(res => {
      if(res.data.Status === "Success") {
        setAuth(true)
        setName(res.data.name)
      }else {
        setAuth(false)
        setMessage(res.data.Error)
      }
    })
    .then(err => console.log(err));
    */
  }, [])


  // Logout butonuna tıklanınca bu metot çalışacak
  const handleDelete = async() => {
    
    await fetch('http://localhost:8081/logout', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => {
      console.log("Home logout res = ", res);
      // server tarafından yanıt gelince sayfayı yeniden yükle
      // location.reload(true);
    }).catch(err => console.log("Home logout error = ", err));

    /*     
    axios.get('http://localhost:8081/logout')
    .then(res => {
      // server tarafından yanıt gelince sayfayı yeniden yükle
      location.reload(true);
    })
    .catch(err => console.log(err));
    */
  }

  return (
    <div className='container mt-4'>
      {
        auth ?
        <div>
          <h3>You are Authorized - {name}</h3>
          <button className='btn btn-danger' onClick={handleDelete}>Logout</button>
        </div>
        :
        <div>
          <h3>{message}</h3>
          <h3>Login Now</h3>
          <Link to="/login" className='btn btn-primary'>Login</Link>
        </div>
      } 
    </div>
  )
}

export default Home