import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { api } from '../utils/api';
import { favoritesService, authService } from '../utils/localStorage';
import '../styles/Favorites.css';

const Favorites = () => {
  const navigate = useNavigate();
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/login');
      return;
    }
    loadFavorites();
  }, [navigate]);

  const loadFavorites = async () => {
    const favoriteIds = favoritesService.getFavorites();
    
    if (favoriteIds.length === 0) {
      setLoading(false);
      return;
    }

    // Fetch all games and filter favorites
    const result = await api.getAllGames();
    if (result.success) {
      const favorites = result.games.filter(game => 
        favoriteIds.includes(game.id)
      );
      setFavoriteGames(favorites);
    }
    setLoading(false);
  };

  // Refresh favorites when returning to page
  useEffect(() => {
    const handleFocus = () => {
      loadFavorites();
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  return (
    <div className="favorites-page">
      <motion.div
        className="favorites-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">
          <span className="icon">💖</span>
          MY FAVORITES
        </h1>
        <p className="page-subtitle">Your handpicked collection of gaming experiences</p>
      </motion.div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading your favorites...</p>
        </div>
      ) : favoriteGames.length === 0 ? (
        <motion.div
          className="empty-state"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="empty-icon">💔</div>
          <h2>No Favorites Yet</h2>
          <p>Start exploring and add games to your favorites!</p>
          <button 
            className="btn-explore"
            onClick={() => navigate('/dashboard')}
          >
            EXPLORE GAMES
          </button>
        </motion.div>
      ) : (
        <div className="favorites-content">
          <div className="favorites-stats">
            <div className="stat-card">
              <span className="stat-number">{favoriteGames.length}</span>
              <span className="stat-label">Favorite Games</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {favoriteGames.filter(g => g.genre === 'Horror').length}
              </span>
              <span className="stat-label">Horror</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {favoriteGames.filter(g => g.genre === 'Adventure').length}
              </span>
              <span className="stat-label">Adventure</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {favoriteGames.filter(g => g.genre === 'Humor').length}
              </span>
              <span className="stat-label">Humor</span>
            </div>
          </div>

          <div className="games-grid">
            {favoriteGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
