import React from 'react';
import './Home.css';
import bookpg from '../../assets/img/book1.jpg';
import videoSource from '../../assets/books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the given  video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'> 
          <h1>Book Bhandar</h1>
          <p>Manage all your books easily</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'> Click to Get started</Link>
          </button>
          <img src={bookpg} alt='profile' />
        </div>
      </div>
    </div>
  );
};

export default Home;
