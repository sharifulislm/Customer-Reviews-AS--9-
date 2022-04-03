import React from 'react';
import './Heder.css'
const Header = () => {

    return (
        <div className='flex justify-center md:static Heder-box  '>

      <a href="home"> HOME</a>
      <a href="Reviews"> REVIEWS</a>
      <a href="Dasboard"> DASBOARD</a>
      <a href="Blogs"> BLOGS</a>
      <a href="about"> ABOUT</a>

            
        </div>
    );
};

export default Header;