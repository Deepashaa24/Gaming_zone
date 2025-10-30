import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaDiscord />, url: 'https://discord.com', label: 'Discord' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">
            <span className="logo-text">SHADOW</span>
            <span className="logo-highlight">VERSE</span>
          </h3>
          <p className="footer-description">
            Your ultimate destination for epic gaming experiences.
            Enter the shadows and embrace the adventure.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Games</a></li>
            <li><a href="/favorites">Favorites</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul className="footer-links">
            <li><a href="/category/horror">Horror</a></li>
            <li><a href="/category/adventure">Adventure</a></li>
            <li><a href="/category/humor">Humor</a></li>
            <li><a href="/category/action">Action</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} ShadowVerse. All rights reserved.</p>
        <p className="footer-tagline">Made with 🖤 for gamers by gamers</p>
      </div>
    </footer>
  );
};

export default Footer;
