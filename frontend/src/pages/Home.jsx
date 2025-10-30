import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import GameCard from '../components/GameCard';
import { api } from '../utils/api';
import '../styles/Home.css';

const Home = () => {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedGames();
  }, []);

  const loadFeaturedGames = async () => {
    const result = await api.getFeaturedGames();
    if (result.success) {
      setFeaturedGames(result.games);
    }
    setLoading(false);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WELCOME TO
            <span className="title-highlight">SHADOWVERSE</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Enter the realm of shadows. Experience epic games that will captivate your soul.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/dashboard" className="btn-primary">
              <FaPlay /> EXPLORE GAMES
            </Link>
            <Link to="/signup" className="btn-secondary">
              JOIN NOW
            </Link>
          </motion.div>
        </motion.div>

        <div className="scroll-indicator">
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="featured-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">FEATURED GAMES</h2>
            <p className="section-subtitle">Handpicked experiences for the brave</p>
          </motion.div>

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading games...</p>
            </div>
          ) : (
            <div className="games-grid">
              {featuredGames.map((game, index) => (
                <GameCard key={game.id} game={game} index={index} />
              ))}
            </div>
          )}

          <div className="view-all-container">
            <Link to="/dashboard" className="btn-view-all">
              VIEW ALL GAMES
            </Link>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <motion.div
              className="info-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="info-icon">🎮</div>
              <h3>Diverse Collection</h3>
              <p>From horror to humor, explore a wide variety of gaming experiences</p>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="info-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>Every game is carefully curated for the best experience</p>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="info-icon">🔥</div>
              <h3>Regular Updates</h3>
              <p>New games added weekly to keep the thrills coming</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
