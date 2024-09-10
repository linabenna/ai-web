import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          {/* Add any content you want on the left side */}
        </div>

        <div className='right'>
          <h4>You just lost the game</h4>
          <p>Here's an internet secret - The Game is a mind game constantly being played by everyone, 
              but the moment you remember you're playing, you lose ♡
              <br /> 
              <br /> Yours Sincerely, <br /> The AI Club ♡</p>
          <div className='social'>
            {/* Wrap the icon and handle inside a <a> tag */}
            <a href="https://www.instagram.com/aiclub_ku/" target="_blank" rel="noopener noreferrer" className='social-link'>
              <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '0.5rem' }} />
              <span className='social-handle'>@aiclub_ku</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
