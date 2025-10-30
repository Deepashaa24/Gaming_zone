import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPlay, FaStar, FaClock, FaUsers, FaGamepad, FaHeart } from 'react-icons/fa';
import '../styles/GameModal.css';

const GameModal = ({ game, isOpen, onClose, onPlay, onFavorite, isFavorite }) => {
  if (!game) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="game-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="game-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>

            <div className="modal-content">
              {/* Game Image/Banner */}
              <div 
                className="modal-banner"
                style={{ 
                  background: game.image && game.image.startsWith('http') 
                    ? `url(${game.image}) center center / cover no-repeat` 
                    : game.imageColor || 'linear-gradient(135deg, #ff6b35 0%, #dc143c 100%)'
                }}
              >
                <div className="banner-overlay"></div>
                {(!game.image || !game.image.startsWith('http')) && (
                  <div className="banner-icon">{game.imageIcon || '🎮'}</div>
                )}
                <div className="banner-genre">{game.genre}</div>
              </div>

              {/* Game Details */}
              <div className="modal-body">
                <div className="modal-header">
                  <h2 className="modal-title">{game.title}</h2>
                  <div className="modal-rating">
                    <FaStar /> {game.rating}
                  </div>
                </div>

                <p className="modal-description">{game.description}</p>

                {/* Game Stats */}
                <div className="game-stats">
                  <div className="stat-item">
                    <FaClock />
                    <span className="stat-label">Duration</span>
                    <span className="stat-value">{game.duration}</span>
                  </div>
                  <div className="stat-item">
                    <FaStar />
                    <span className="stat-label">Rating</span>
                    <span className="stat-value">{game.rating}</span>
                  </div>
                  <div className="stat-item">
                    <FaGamepad />
                    <span className="stat-label">Genre</span>
                    <span className="stat-value">{game.genre}</span>
                  </div>
                  <div className="stat-item">
                    <FaUsers />
                    <span className="stat-label">Players</span>
                    <span className="stat-value">1-4</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="modal-section">
                  <h3>About This Game</h3>
                  <p className="game-about">
                    {game.title} is an immersive {game.genre.toLowerCase()} experience that will keep you on the edge of your seat. 
                    With stunning visuals, engaging gameplay, and a captivating storyline, this game offers hours of entertainment. 
                    Perfect for fans of the {game.genre.toLowerCase()} genre looking for their next adventure.
                  </p>
                </div>

                <div className="modal-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    <li>🎮 Immersive {game.genre} gameplay</li>
                    <li>🎨 Stunning visuals and atmosphere</li>
                    <li>🎵 Epic soundtrack and sound effects</li>
                    <li>⚡ Smooth controls and mechanics</li>
                    <li>🏆 Achievements and unlockables</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="modal-actions">
                  <motion.button
                    className="btn-modal-play"
                    onClick={onPlay}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPlay /> PLAY NOW
                  </motion.button>
                  
                  <motion.button
                    className={`btn-modal-favorite ${isFavorite ? 'active' : ''}`}
                    onClick={onFavorite}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHeart /> {isFavorite ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
                  </motion.button>

                  {game.trailer && (
                    <motion.button
                      className="btn-modal-trailer"
                      onClick={() => window.open(game.trailer, '_blank')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      WATCH TRAILER
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameModal;
