import React from "react";
import { Link } from "react-router-dom";
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>StockSimHub</h1>
        </div>
        <div className="navbar-links">
          <Link className="navbar-link" to="/login">Login</Link>
         <Link className="navbar-link signup" to="/signup">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h2 className="tsw">Trade Smarter with Stocksimhub</h2>
          <p>Experience risk-free stock trading with live market data.</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </header>

      {/* What is Tradeloop? Section */}
      <section className="intro-section">
        <h2>What is Stocksimhub?</h2>
        <p>
          Stocksimhub is the ultimate paper trading platform where you can practice your trading skills with real-time data, all without any financial risk. Perfect for beginners and pros alike.
        </p>
        <Link to="/signup" className="cta-button">Join the Community</Link>
      </section>

      {/* How Tradeloop Works Section */}
      <section className="how-it-works-section">
        <h2>How Stocksimhub Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Create Your Account</h3>
            <p>Sign up and get access to real-time stock data, charts, and features.</p>
          </div>
          <div className="step">
            <h3>2. Start Trading</h3>
            <p>Use simulated funds to trade and test your strategies with no risk.</p>
          </div>
          <div className="step">
            <h3>3. Learn & Improve</h3>
            <p>Track your performance and analyze your trades to level up your skills.</p>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Stocksimhub has been a game-changer for me! I can practice my strategies without the fear of losing real money." - Jane D.</p>
          </div>
          <div className="testimonial">
            <p>"The real-time market data is spot on! I feel much more confident in my trades now." - John S.</p>
          </div>
          <div className="testimonial">
            <p>"Stocksimhub helped me build a solid foundation in stock trading. Highly recommend it!" - Sarah W.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Stocksimhub?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Real-Time Stock Data</h3>
            <p>Track live market data and simulate trades using real stock prices.</p>
          </div>
          <div className="card">
            <h3>Zero-Risk Trading</h3>
            <p>Practice trading with no financial risk. Learn, grow, and improve.</p>
          </div>
          <div className="card">
            <h3>Advanced Analytics</h3>
            <p>Analyze your trades, track your performance, and gain insights to level up your skills.</p>
          </div>
        </div>
      
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Stocksimhub. All rights reserved | From The House of Hyperloop Finance.</p>
      </footer>
    </div>
  );
};

export default FrontPage;
