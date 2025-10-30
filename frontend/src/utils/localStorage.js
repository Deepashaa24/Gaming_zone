// LocalStorage utility functions for Gaming Zone

// User Authentication
export const authService = {
  // Sign up a new user
  signup: (username, email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('userData')) || [];
      
      // Check if user already exists
      const existingUser = users.find(u => u.email === email || u.username === username);
      if (existingUser) {
        return { success: false, message: 'User already exists' };
      }

      // Add new user
      const newUser = { id: Date.now(), username, email, password };
      users.push(newUser);
      localStorage.setItem('userData', JSON.stringify(users));
      
      // Auto login
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, message: 'Signup failed' };
    }
  },

  // Login existing user
  login: (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('userData')) || [];
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        return { success: true, user };
      }
      
      return { success: false, message: 'Invalid credentials' };
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  },

  // Logout user
  logout: () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('currentUser');
    return { success: true };
  },

  // Check if user is logged in
  isAuthenticated: () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  },

  // Get current user
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      return null;
    }
  }
};

// Favorites Management
export const favoritesService = {
  // Get all favorites for current user
  getFavorites: () => {
    try {
      const user = authService.getCurrentUser();
      if (!user) return [];
      
      const key = `favorites_${user.id}`;
      const favorites = localStorage.getItem(key);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      return [];
    }
  },

  // Add game to favorites
  addFavorite: (gameId) => {
    try {
      const user = authService.getCurrentUser();
      if (!user) return { success: false, message: 'Please login first' };
      
      const key = `favorites_${user.id}`;
      const favorites = favoritesService.getFavorites();
      
      if (favorites.includes(gameId)) {
        return { success: false, message: 'Already in favorites' };
      }
      
      favorites.push(gameId);
      localStorage.setItem(key, JSON.stringify(favorites));
      return { success: true };
    } catch (error) {
      return { success: false, message: 'Failed to add favorite' };
    }
  },

  // Remove game from favorites
  removeFavorite: (gameId) => {
    try {
      const user = authService.getCurrentUser();
      if (!user) return { success: false, message: 'Please login first' };
      
      const key = `favorites_${user.id}`;
      const favorites = favoritesService.getFavorites();
      const updated = favorites.filter(id => id !== gameId);
      
      localStorage.setItem(key, JSON.stringify(updated));
      return { success: true };
    } catch (error) {
      return { success: false, message: 'Failed to remove favorite' };
    }
  },

  // Check if game is in favorites
  isFavorite: (gameId) => {
    const favorites = favoritesService.getFavorites();
    return favorites.includes(gameId);
  },

  // Toggle favorite status
  toggleFavorite: (gameId) => {
    if (favoritesService.isFavorite(gameId)) {
      return favoritesService.removeFavorite(gameId);
    } else {
      return favoritesService.addFavorite(gameId);
    }
  }
};

// Game Scores Management
export const scoresService = {
  // Save game score
  saveScore: (gameId, score) => {
    try {
      const user = authService.getCurrentUser();
      if (!user) return { success: false };
      
      const key = `scores_${user.id}`;
      const scores = JSON.parse(localStorage.getItem(key)) || {};
      
      // Only save if it's a high score
      if (!scores[gameId] || score > scores[gameId]) {
        scores[gameId] = score;
        localStorage.setItem(key, JSON.stringify(scores));
        return { success: true, isHighScore: true };
      }
      
      return { success: true, isHighScore: false };
    } catch (error) {
      return { success: false };
    }
  },

  // Get score for a game
  getScore: (gameId) => {
    try {
      const user = authService.getCurrentUser();
      if (!user) return null;
      
      const key = `scores_${user.id}`;
      const scores = JSON.parse(localStorage.getItem(key)) || {};
      return scores[gameId] || null;
    } catch (error) {
      return null;
    }
  },

  // Get all scores
  getAllScores: () => {
    try {
      const user = authService.getCurrentUser();
      if (!user) return {};
      
      const key = `scores_${user.id}`;
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch (error) {
      return {};
    }
  }
};

// Music toggle state
export const musicService = {
  isEnabled: () => {
    return localStorage.getItem('musicEnabled') !== 'false';
  },
  
  toggle: () => {
    const current = musicService.isEnabled();
    localStorage.setItem('musicEnabled', (!current).toString());
    return !current;
  },
  
  setEnabled: (enabled) => {
    localStorage.setItem('musicEnabled', enabled.toString());
  }
};
