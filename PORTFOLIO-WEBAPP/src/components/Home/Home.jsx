import React from 'react';
import './Home.css'; 
import Profile_image from '../../assets/Photo.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div className="overlay">
        <div className="home-content">
          <div className="home-text">
            <h1> Hello, I'm <span> Zehab Faisal </span> </h1>
            <p> I am pursuing MERN STACK DEVELOPMENT passionate about building modern web applications. </p>
          </div>

          <div className="home-img">
            <img src={Profile_image} alt="Profile Photo" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;