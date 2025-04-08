import React from "react";
import { Link } from "react-router-dom";
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className="frontpage-container dark-theme">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>StockSimHub</h1>
        </div>
        <div className="navbar-links">
          <Link className="navbar-link" to="/features">Features</Link>
          <Link className="navbar-link" to="/pricing">Pricing</Link>
          <Link className="navbar-link" to="/login">Login</Link>
          <Link className="navbar-link signup" to="/signup">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Trade Smarter with StockSimHub</h2>
          <p className="hero-subtitle">Experience risk-free stock trading with live market data in a premium dark interface</p>
          <div className="hero-cta">
            <Link to="/signup" className="cta-button primary-btn">Get Started Free</Link>
            <Link to="/demo" className="cta-button secondary-btn">Watch Demo</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="dashboard-preview"></div>
        </div>
      </header>

      {/* School Contest Banner */}
      <section className="promo-banner">
        <div className="banner-content">
          <h2>Bring StockSimHub to Your School!</h2>
          <div className="banner-features">
            <div className="banner-feature">
              <h3>Trade</h3>
              <p>Practice investing with virtual portfolios</p>
            </div>
            <div className="banner-feature">
              <h3>Learn</h3>
              <p>Master financial concepts with real-world data</p>
            </div>
            <div className="banner-feature">
              <h3>Contest</h3>
              <p>Compete in school-wide trading competitions</p>
            </div>
          </div>
          <div className="banner-pricing">
            <h3>Special School Package: ₹32,999</h3>
            <p>For up to 400 users • Full platform access • Dedicated support</p>
            <Link to="/school-program" className="cta-button banner-btn">Learn More</Link>
          </div>
        </div>
      </section>

      {/* What is StockSimHub? Section */}
      <section className="intro-section">
        <h2>What is StockSimHub?</h2>
        <div className="intro-content">
          <div className="intro-text">
            <p>
              StockSimHub is the ultimate paper trading platform where you can practice your trading skills with real-time data, all without any financial risk. Perfect for beginners and pros alike.
            </p>
            <p>
              Our advanced platform simulates the real stock market environment with professional-grade tools, comprehensive analytics, and a supportive community to accelerate your trading journey.
            </p>
            <Link to="/signup" className="cta-button">Join the Community</Link>
          </div>
          <div className="intro-stats">
            <div className="stat-card">
              <h3>50,000+</h3>
              <p>Active Traders</p>
            </div>
            <div className="stat-card">
              <h3>₹100M+</h3>
              <p>Virtual Assets Traded</p>
            </div>
            <div className="stat-card">
              <h3>1,000+</h3>
              <p>Educational Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* How StockSimHub Works Section */}
      <section className="how-it-works-section">
        <h2>How StockSimHub Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Your Account</h3>
            <p>Sign up and get access to real-time stock data, charts, and features. Your virtual portfolio starts with ₹10,00,000.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Start Trading</h3>
            <p>Use simulated funds to trade and test your strategies with no risk. Buy and sell stocks from BSE, NSE and global markets.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Learn & Improve</h3>
            <p>Track your performance with detailed analytics, learn from your trades, and compete on the leaderboard.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Join Competitions</h3>
            <p>Participate in trading contests with other users and win real prizes based on your virtual performance.</p>
          </div>
        </div>
      </section>

      {/* Trading Tools Section */}
      <section className="tools-section">
        <h2>Professional Trading Tools</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon chart-icon"></div>
            <h3>Advanced Charts</h3>
            <p>Technical analysis with multiple indicators, drawing tools, and timeframes</p>
          </div>
          <div className="tool-card">
            <div className="tool-icon screener-icon"></div>
            <h3>Stock Screener</h3>
            <p>Filter stocks by performance, fundamentals, and technical indicators</p>
          </div>
          <div className="tool-card">
            <div className="tool-icon news-icon"></div>
            <h3>Market News</h3>
            <p>Real-time financial news and analysis to inform your trading decisions</p>
          </div>
          <div className="tool-card">
            <div className="tool-icon portfolio-icon"></div>
            <h3>Portfolio Tracker</h3>
            <p>Monitor your holdings, P&L, and performance metrics in real-time</p>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <div className="testimonial-rating">★★★★★</div>
            <p>"StockSimHub has been a game-changer for me! I can practice my strategies without the fear of losing real money. The dark interface makes it easy to trade for hours."</p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Jane D.</h4>
                <p>Day Trader, Mumbai</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-rating">★★★★★</div>
            <p>"The real-time market data is spot on! I feel much more confident in my trades now. My school trading club uses it for our weekly competitions."</p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>John S.</h4>
                <p>College Student, Delhi</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-rating">★★★★★</div>
            <p>"StockSimHub helped me build a solid foundation in stock trading. The analytics helped me identify and fix mistakes in my strategy. Highly recommend it!"</p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Sarah W.</h4>
                <p>Finance Professional, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose StockSimHub?</h2>
        <div className="feature-cards">
          <div className="card">
            <div className="card-icon realtime-icon"></div>
            <h3>Real-Time Stock Data</h3>
            <p>Track live market data and simulate trades using real stock prices from Indian and global exchanges.</p>
          </div>
          <div className="card">
            <div className="card-icon risk-icon"></div>
            <h3>Zero-Risk Trading</h3>
            <p>Practice trading with no financial risk. Learn, grow, and improve without losing real money.</p>
          </div>
          <div className="card">
            <div className="card-icon analytics-icon"></div>
            <h3>Advanced Analytics</h3>
            <p>Analyze your trades, track your performance, and gain insights to level up your skills with detailed reports.</p>
          </div>
          <div className="card">
            <div className="card-icon community-icon"></div>
            <h3>Vibrant Community</h3>
            <p>Connect with fellow traders, join discussions, and learn from top performers in our active community.</p>
          </div>
          <div className="card">
            <div className="card-icon learning-icon"></div>
            <h3>Educational Resources</h3>
            <p>Access webinars, tutorials, and market insights to enhance your trading knowledge and skills.</p>
          </div>
          <div className="card">
            <div className="card-icon competitions-icon"></div>
            <h3>Trading Competitions</h3>
            <p>Test your skills against others in daily, weekly, and monthly trading contests with exciting prizes.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Choose Your Trading Plan</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Basic</h3>
              <p className="price">Free</p>
              <p>Perfect for beginners</p>
            </div>
            <ul className="pricing-features">
              <li>Virtual portfolio of ₹10,00,000</li>
              <li>Basic charts and analysis</li>
              <li>Limited stock selection</li>
              <li>Community access</li>
              <li>Basic performance metrics</li>
            </ul>
            <Link to="/signup" className="cta-button pricing-btn">Get Started</Link>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-badge">Popular</div>
            <div className="pricing-header">
              <h3>Premium</h3>
              <p className="price">₹499<span>/month</span></p>
              <p>For serious traders</p>
            </div>
            <ul className="pricing-features">
              <li>Everything in Basic</li>
              <li>Advanced charting tools</li>
              <li>Full market access</li>
              <li>Comprehensive analytics</li>
              <li>Trading competitions</li>
              <li>Educational resources</li>
            </ul>
            <Link to="/signup-premium" className="cta-button pricing-btn">Go Premium</Link>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>School Package</h3>
              <p className="price">₹32,999<span>/year</span></p>
              <p>For up to 400 users</p>
            </div>
            <ul className="pricing-features">
              <li>Everything in Premium</li>
              <li>School-wide competitions</li>
              <li>Teacher dashboard</li>
              <li>Progress tracking</li>
              <li>Custom leaderboards</li>
              <li>Dedicated support</li>
            </ul>
            <Link to="/school-program" className="cta-button pricing-btn">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Master Stock Trading?</h2>
          <p>Join thousands of traders who are improving their skills with StockSimHub</p>
          <Link to="/signup" className="cta-button large-btn">Start Trading Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>StockSimHub</h2>
            <p>Master trading. Risk nothing.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Platform</h3>
              <ul>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/school-program">School Program</Link></li>
                <li><Link to="/competitions">Competitions</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/tutorials">Tutorials</Link></li>
                <li><Link to="/webinars">Webinars</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/press">Press</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://twitter.com/stocksimhub" className="social-icon twitter"></a>
              <a href="https://facebook.com/stocksimhub" className="social-icon facebook"></a>
              <a href="https://instagram.com/stocksimhub" className="social-icon instagram"></a>
              <a href="https://linkedin.com/company/stocksimhub" className="social-icon linkedin"></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 StockSimHub. All rights reserved | From The House of Hyperloop Finance.</p>
          <div className="footer-legal">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
