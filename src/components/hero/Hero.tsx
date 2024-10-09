import React from 'react'
import "./Hero.css";
import { Link } from 'react-router-dom';
export const Hero  : React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <Link to="">
          <div className="hero-banner-link">
            <div className="hero-img"></div>
            <div className="hero-banner">
              <h1 className="hero-banner_title">
              Quick! Claim your discount before it goes...
              </h1>
              <div className="hero-banner_message">
                <p>Don't miss your chance to bag your beauty faves for less...</p>
              </div>
              <button className="hero-banner-btn">Shop Now</button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
