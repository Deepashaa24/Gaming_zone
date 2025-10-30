// API service to communicate with backend

const API_BASE_URL = 'https://gaming-zone-backend.onrender.com';

export const api = {
  // Get all games
  getAllGames: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/games`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching games:', error);
      return { success: false, games: [] };
    }
  },

  // Get featured games
  getFeaturedGames: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/games/featured`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching featured games:', error);
      return { success: false, games: [] };
    }
  },

  // Get game by ID
  getGameById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/games/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching game:', error);
      return { success: false, game: null };
    }
  },

  // Search games
  searchGames: async (query) => {
    try {
      const response = await fetch(`${API_BASE_URL}/games/search/${query}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching games:', error);
      return { success: false, games: [] };
    }
  },

  // Get games by genre
  getGamesByGenre: async (genre) => {
    try {
      const response = await fetch(`${API_BASE_URL}/games/genre/${genre}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching games by genre:', error);
      return { success: false, games: [] };
    }
  }
};
