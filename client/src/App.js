import React from 'react'
import NavBar from './components/navbar/NavBar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './containers/home/Home';
import Recommend from './containers/recommend/Recommend';
import Normal from './containers/home/Normal';
import Veget from './containers/home/Veget';
import Diet from './containers/home/Diet';
import Carni from './containers/home/Carni';
import Review from './containers/review/Review';
import Login from './containers/login/Login';
import Profile from './containers/login/Profile';
import Register from './containers/login/Register';
import Normalresult from './containers/result/Normalresult';


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/recommend' element={<Recommend />}>
        </Route>
        <Route path='/normal' element={<Normal />}>
        </Route>
        <Route path='/veget' element={<Veget />}>
        </Route>
        <Route path='/diet' element={<Diet />}>
        </Route>
        <Route path='/carni' element={<Carni />}>
        </Route>
        <Route path='/review' element={<Review />}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/profile' element={<Profile />}>
        </Route>
        <Route path='/register' element={<Register />}>
        </Route>
        <Route path='/normalresult' element={<Normalresult />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;