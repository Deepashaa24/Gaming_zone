import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';
import { api } from '../utils/api';
import { authService } from '../utils/localStorage';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [allGames, setAllGames] = useState([]);
  const [horrorGames, setHorrorGames] = useState([]);
  const [adventureGames, setAdventureGames] = useState([]);
  const [humorGames, setHumorGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    setCurrentUser(user);
    loadGames();
  }, []);

  const loadGames = async () => {
    const result = await api.getAllGames();
    if (result.success) {
      const games = result.games;
      setAllGames(games);
      setHorrorGames(games.filter(g => g.genre === 'Horror'));
      setAdventureGames(games.filter(g => g.genre === 'Adventure'));
      setHumorGames(games.filter(g => g.genre === 'Humor'));
    }
    setLoading(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <motion.div
          className="welcome-banner"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            {currentUser ? `Welcome back, ${currentUser.username}!` : 'Game Library'}
          </h1>
          <p>Your adventure awaits in the Gaming Zone</p>
        </motion.div>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading your games...</p>
        </div>
      ) : (
        <div className="dashboard-content">
          {/* Horror Section */}
          {horrorGames.length > 0 && (
            <section className="game-section">
              <div className="section-header">
                <h2 className="section-title">
                  <span className="genre-icon">👻</span> HORROR
                </h2>
                <p className="section-subtitle">Face your deepest fears</p>
              </div>
              <div className="horizontal-scroll">
                <div className="games-row">
                  {horrorGames.map((game, index) => (
                    <GameCard key={game.id} game={game} index={index} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Adventure Section */}
          {adventureGames.length > 0 && (
            <section className="game-section">
              <div className="section-header">
                <h2 className="section-title">
                  <span className="genre-icon">🗺️</span> ADVENTURE
                </h2>
                <p className="section-subtitle">Embark on epic journeys</p>
              </div>
              <div className="horizontal-scroll">
                <div className="games-row">
                  {adventureGames.map((game, index) => (
                    <GameCard key={game.id} game={game} index={index} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Humor Section */}
          {humorGames.length > 0 && (
            <section className="game-section">
              <div className="section-header">
                <h2 className="section-title">
                  <span className="genre-icon">😄</span> HUMOR
                </h2>
                <p className="section-subtitle">Lighten up the mood</p>
              </div>
              <div className="horizontal-scroll">
                <div className="games-row">
                  {humorGames.map((game, index) => (
                    <GameCard key={game.id} game={game} index={index} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* What's Next Carousel */}
          <section className="game-section whats-next">
            <div className="section-header">
              <h2 className="section-title">
                <span className="genre-icon">🎯</span> WHAT'S NEXT?
              </h2>
              <p className="section-subtitle">Recommended for you</p>
            </div>
            <div className="horizontal-scroll">
              <div className="games-row">
                {allGames.slice(0, 4).map((game, index) => (
                  <GameCard key={game.id} game={game} index={index} />
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
