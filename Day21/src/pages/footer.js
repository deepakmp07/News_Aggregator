import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section1">
          <h3 style={{ color: "blue" }}>Contact Us</h3>
          <p >Email: info@example.com</p>
          <p >Phone: +11234567890</p>
        </div>
        <div className="footer-section">
          <h3 style={{ color: "blue" }}>FAQ</h3>
          <ul>
            <li>How can I submit news?</li>
            <li>Is registration required?</li>
            <li>How can I customize my news feed?</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 style={{ color: "blue" }}>Social Media</h3>
          <div className="social-media-icons">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" >
                Twitter: @newsaggregator
              </i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" >
                FaceBook: Aggregator203
              </i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" >
                Instagram:Aggregator
              </i>
            </a>
          </div>
          {/* <li><NavLink to="/feedback" activeClassName="active-link">Feedback</NavLink></li> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
