import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaUser, FaHome, FaGamepad, FaHeart, FaSignOutAlt, FaMusic } from 'react-icons/fa';
import { authService, musicService } from '../utils/localStorage';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [musicEnabled, setMusicEnabled] = useState(musicService.isEnabled());

  useEffect(() => {
    setIsLoggedIn(authService.isAuthenticated());
    setCurrentUser(authService.getCurrentUser());
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setCurrentUser(null);
    setShowProfile(false);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const toggleMusic = () => {
    const newState = musicService.toggle();
    setMusicEnabled(newState);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">SHADOW</span>
          <span className="logo-highlight">VERSE</span>
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="nav-link">
            <FaHome /> Home
          </Link>
          <Link to="/dashboard" className="nav-link">
            <FaGamepad /> Games
          </Link>
          {isLoggedIn && (
            <Link to="/favorites" className="nav-link">
              <FaHeart /> Favorites
            </Link>
          )}
        </div>

        <form onSubmit={handleSearch} className="navbar-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="navbar-actions">
          <button className="music-toggle" onClick={toggleMusic}>
            <FaMusic className={musicEnabled ? 'active' : ''} />
          </button>

          {isLoggedIn ? (
            <div className="profile-dropdown">
              <button 
                className="profile-button"
                onClick={() => setShowProfile(!showProfile)}
              >
                <FaUser />
                <span>{currentUser?.username}</span>
              </button>

              {showProfile && (
                <motion.div 
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="dropdown-header">
                    <p className="user-name">{currentUser?.username}</p>
                    <p className="user-email">{currentUser?.email}</p>
                  </div>
                  <button onClick={handleLogout} className="logout-button">
                    <FaSignOutAlt /> Logout
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/signup" className="btn-signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
