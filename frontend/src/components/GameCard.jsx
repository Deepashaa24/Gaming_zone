import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaHeart, FaStar, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { favoritesService, authService } from '../utils/localStorage';
import GameModal from './GameModal';
import '../styles/GameCard.css';

const GameCard = ({ game, index = 0 }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsFavorite(favoritesService.isFavorite(game.id));
  }, [game.id]);

  const handlePlay = () => {
    if (!authService.isAuthenticated()) {
      navigate('/login');
    } else {
      // Navigate to game play page (can be implemented)
      alert(`Starting game: ${game.title}`);
    }
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    
    if (!authService.isAuthenticated()) {
      navigate('/login');
      return;
    }

    const result = favoritesService.toggleFavorite(game.id);
    if (result.success) {
      setIsFavorite(!isFavorite);
    }
  };

  const handleWatchTrailer = (e) => {
    e.stopPropagation();
    window.open(game.trailer, '_blank');
  };

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalPlay = () => {
    handlePlay();
  };

  const handleModalFavorite = () => {
    if (!authService.isAuthenticated()) {
      navigate('/login');
      return;
    }

    const result = favoritesService.toggleFavorite(game.id);
    if (result.success) {
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <>
      <motion.div
        className="game-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -10 }}
        onClick={handleCardClick}
        style={{ cursor: 'pointer' }}
      >
      <div className="game-card-image">
        {game.image && game.image.startsWith('http') ? (
          <img 
            src={game.image} 
            alt={game.title}
            className="game-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className="game-image-placeholder" 
          style={{ 
            background: game.imageColor || 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
            display: game.image && game.image.startsWith('http') ? 'none' : 'flex'
          }}
        >
          <div className="placeholder-content">
            <div className="game-icon">{game.imageIcon || '🎮'}</div>
            <p>{game.title}</p>
          </div>
        </div>
        
        <div className="game-overlay">
          <motion.button
            className="btn-play"
            onClick={handlePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay /> PLAY NOW
          </motion.button>
          
          <motion.button
            className="btn-trailer"
            onClick={handleWatchTrailer}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            WATCH TRAILER
          </motion.button>
        </div>

        <button
          className={`btn-favorite ${isFavorite ? 'active' : ''}`}
          onClick={handleFavorite}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FaHeart />
          {showTooltip && (
            <span className="tooltip">
              {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </span>
          )}
        </button>

        <div className="genre-badge">{game.genre}</div>
      </div>

      <div className="game-card-content">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-description">{game.description}</p>
        
        <div className="game-info">
          <span className="info-item">
            <FaClock /> {game.duration}
          </span>
          <span className="info-item">
            <FaStar /> {game.rating}
          </span>
        </div>
      </div>
    </motion.div>

      <GameModal
        game={game}
        isOpen={showModal}
        onClose={handleCloseModal}
        onPlay={handleModalPlay}
        onFavorite={handleModalFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
};

export default GameCard;
