import React, { Component } from 'react';
import { Link } from 'react-router';

export default () => {
  
  return (
    <div className = "homecontainer">
      {/*<img src="assets/images/background-img.png" className = "home-background"/>*/}
		  <Link to ="/about"><img src="assets/images/welcome.png" className="welcome-logo"/></Link>
	  </div>
  );
};
