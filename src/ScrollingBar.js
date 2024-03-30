import React from 'react';
import './ScrollingBar.css'; // Import the CSS for styling
import Fitbit from './assets/fitbit_logo.png';
import Hudl from './assets/hudl_logo.png';

function ScrollingBar() {
  return (
    <div className="scroller-container">
      <div className="image-container">
        {/* Place your images here */}
        <img src={Fitbit} alt="Fitbit Logo" />
        <img src={Hudl} alt="Fitbit Logo" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default ScrollingBar;

