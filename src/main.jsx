import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Aboutpage from './About_page';
import Sign_up from './Sign_up';
import Log_in from './Login_page';
import Home_play from './Home_set';
import Home_2 from './Song_2';
import Home_3 from './song_3';
import Home_4 from './Song_4';
import Home_5 from './Song_5'
import Home_6 from './Song_6';
import Home_7 from './Song_7';
import Home_8 from './Song_8';
import Home_9 from './Song_9';
import Home_10 from './Song_10';
import Home_11 from './Song_11';
import './App.css';

ReactDOM.render(
<>
  <BrowserRouter>
    <Aboutpage/>
      <Routes>
        <Route path='/' element={<App/>}/>
				<Route path="/about" element={<Aboutpage/> }/>
        <Route path='/sign_up' element={<Sign_up/>}/>
        <Route path='/log' element={<Log_in/>}/>
        <Route path='/home' element={<Home_play/>}/>
        <Route path='/home_2' element={<Home_2/>}/>
        <Route path='/home_3' element={<Home_3/>}/>
        <Route path='/home_4' element={<Home_4/>}/>
        <Route path='/home_5' element={<Home_5/>}/>
        <Route path='/home_6' element={<Home_6/>}/>
        <Route path='/home_7' element={<Home_7/>}/>
        <Route path='/home_8' element={<Home_8/>}/>
        <Route path='/home_9' element={<Home_9/>}/>
        <Route path='/home_10' element={<Home_10/>}/>
        <Route path='/home_11' element={<Home_11/>}/>
        </Routes>
  </BrowserRouter>
</>,
    document.getElementById('root')
);
