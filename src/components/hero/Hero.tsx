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
                Our Spring Sale is ending...
              </h1>
              <div className="hero-banner_message">
                <p>Bag your beauty essentials for less, while you still can!</p>
              </div>
              <button className="hero-banner-btn">Shop Now</button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
