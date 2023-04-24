import React from 'react';
import { Link } from 'react-router-dom';
const Aboutpage = () => {
	
	return (
		<div>
            <b className='container m-5 setFont'><i className="bi bi-spotify"></i>Spotify</b>
                  <Link to='./home'className=' set_dec m-3'>Home</Link>
				  {/* <Link to='/video' className='set_dec m-5'>Videos</Link> */}
				  <Link to='./log' className='m-5 set_dec'>Login </Link>
                  <Link to='/sign_up' className='set_dec m-5'>Sign up</Link>
				  
				  </div>
				  );
					  };

export default Aboutpage;