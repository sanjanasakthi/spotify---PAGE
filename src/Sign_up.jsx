import React from 'react';
import { useState } from "react";
// import for_image from './image_bg.jpg';
import Home_play from './Home_set';
import './App.css'
import { Link } from 'react-router-dom';
const Sign_up = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword]=useState("");
    const[date, setDate]=useState("");

     
    const onChangeHandler = (fieldName, value)=>{
      if(fieldName === "name"){
        setName(value);
      }
      else if(fieldName==="email"){
        setEmail(value);
      }
      else if(fieldName==="password"){
        setPassword(value);
      }
      else if(fieldName==="date"){
        setDate(value);
      }
     
    }
    const onSubmitHandler = (e)=>{
      e.preventDefault();
      if(name.trim()===""){
        alert("required name field");
      }
      else if( email.trim() ===""){
        alert("required mail field");
      }
      else if( password.trim() ===""){
        alert("required password field");
      }
      else if( date.trim() ===""){
        alert("required date field");
      }
     
      else{
        alert('Thank you!_'+name +'_for signing up.Welcome to Spotify.Best Online Auto Streaming Service.');
        
        
      }
    }
               return(
                <div className="cls_1 container-sm mt-5 border border-5 h-80 w-50" >
                {/* <h1 className="text-center text-white">Sign up</h1> */}
                <div className='row'>
                <div className='col-sm-2 '></div>
                  <div className='col-sm-4 '>
                  <i className="bi bi-spotify icon_set"></i>
                  <p className='set_Font_Size'>Spotify</p>
                 <i> 
                  <h2 className='set_text_color'>
                  Music Wherever, Whenever <br/>
                  Just a Tap,
                  Because we are for Music.
                  </h2>
                  </i>
                  </div>
                  <div className='col-sm-4 set_margin'>
                  <h1 className="text-center text-white">Sign up</h1>
                    <form onSubmit={(e)=>{onSubmitHandler(e)}}>
                      <label className='text-white'> <i class="bi bi-person-fill"></i>User Name<br/>
                      <input type="text"  placeholder="Your name" id='pass_name'  className="ml-5"  value={name} onChange={(e)=>{ onChangeHandler("name",e.target.value)}} />
                      </label><br/><br/>
                      
                          
                          <label className='text-white'> <i class="bi bi-envelope-fill"></i> E-mail<br/>
                          <input type="email"  placeholder="Your name" className="ml-5" value={email} onChange={(e)=>{ onChangeHandler("email",e.target.value)}}/>
                          </label><br/><br/>
            
                          <label className='text-white'> <i class="bi bi-person-fill-lock"></i> Password<br/>
                          <input type="password"  placeholder="Your name" className="ml-5" value={password} onChange={(e)=>{ onChangeHandler("password",e.target.value)}} />
                          </label><br/><br/>
                          <label className='text-white'> <i class="bi bi-person-fill-lock"></i>Date of Birth<br/>
                          <input type="date"  placeholder="Your name" className="ml-5" value={date} onChange={(e)=>{ onChangeHandler("date",e.target.value)}} />
                          </label><br/><br/>
                          <i className='text-white'>By clicking on Sign-up, You agree to</i> <Link >Spotify's terms & conditions</Link> <i className='text-white'>and</i> <Link>Privacy policy</Link><br/><br/>
                        
                           <button className='center ml-5'> Sign-up</button><br/> <br/>
                           <h2 className='text-white text-center'>Or</h2>
                           <h4 className='set_text_color text-center' >Sign-up with</h4>
                           <i class="bi bi-facebook text-white m-4 btn  radius_set"></i><b className='text-white ' > | </b> <i class="bi bi-google text-white m-3 radius_set btn"></i>

                          </form>
                          </div>
                        
                          </div>
            
               </div>
               )
}

export default Sign_up;
