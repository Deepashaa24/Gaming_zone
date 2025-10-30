const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Game data (in-memory database for now)
const games = [
  {
    id: 1,
    title: "The Skin Maker",
    genre: "Horror",
    duration: "45 min",
    rating: 4.8,
    description: "A terrifying journey into the depths of darkness",
    trailer: "https://example.com/trailer1",
    image: "/assets/game1.html",
    imageIcon: "🎭",
    imageColor: "linear-gradient(135deg, #ff6b35 0%, #dc143c 100%)",
    featured: true
  },
  {
    id: 2,
    title: "Skin Walker",
    genre: "Horror",
    duration: "60 min",
    rating: 4.9,
    description: "Face your deepest fears in this supernatural thriller",
    trailer: "https://example.com/trailer2",
    image: "/assets/game2.html",
    imageIcon: "🐺",
    imageColor: "linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)",
    featured: true
  },
  {
    id: 3,
    title: "Shadow Realm",
    genre: "Adventure",
    duration: "90 min",
    rating: 4.7,
    description: "Explore mysterious worlds beyond imagination",
    trailer: "https://example.com/trailer3",
    image: "/assets/game3.html",
    imageIcon: "🌑",
    imageColor: "linear-gradient(135deg, #f7b731 0%, #ff8c00 100%)",
    featured: false
  },
  {
    id: 4,
    title: "Ghostly Giggles",
    genre: "Humor",
    duration: "30 min",
    rating: 4.5,
    description: "A hilarious take on the supernatural",
    trailer: "https://example.com/trailer4",
    image: "/assets/game4.html",
    imageIcon: "😂",
    imageColor: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
    featured: false
  },
  {
    id: 5,
    title: "Midnight Mysteries",
    genre: "Horror",
    duration: "75 min",
    rating: 4.6,
    description: "Uncover secrets hidden in the darkness",
    trailer: "https://example.com/trailer5",
    image: "/assets/game5.html",
    imageIcon: "🌙",
    imageColor: "linear-gradient(135deg, #1e1e2e 0%, #3a1a3a 100%)",
    featured: false
  },
  {
    id: 6,
    title: "Phantom Quest",
    genre: "Adventure",
    duration: "120 min",
    rating: 4.8,
    description: "Embark on an epic supernatural journey",
    trailer: "https://example.com/trailer6",
    image: "/assets/game6.html",
    imageIcon: "👻",
    imageColor: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    featured: true
  },
  {
    id: 7,
    title: "Haunted Havoc",
    genre: "Humor",
    duration: "40 min",
    rating: 4.4,
    description: "Chaos and comedy in a haunted mansion",
    trailer: "https://example.com/trailer7",
    image: "/assets/game7.html",
    imageIcon: "🎃",
    imageColor: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    featured: false
  },
  {
    id: 8,
    title: "Cursed Chronicles",
    genre: "Horror",
    duration: "85 min",
    rating: 4.9,
    description: "Experience the most cursed tales ever told",
    trailer: "https://example.com/trailer8",
    image: "/assets/game8.html",
    imageIcon: "📖",
    imageColor: "linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)",
    featured: false
  }
];

// Routes

// Get all games
app.get('/api/games', (req, res) => {
  res.json({ success: true, games });
});

// Get featured games
app.get('/api/games/featured', (req, res) => {
  const featuredGames = games.filter(game => game.featured);
  res.json({ success: true, games: featuredGames });
});

// Get game by ID
app.get('/api/games/:id', (req, res) => {
  const game = games.find(g => g.id === parseInt(req.params.id));
  if (game) {
    res.json({ success: true, game });
  } else {
    res.status(404).json({ success: false, message: 'Game not found' });
  }
});

// Search games
app.get('/api/games/search/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  const results = games.filter(game => 
    game.title.toLowerCase().includes(query) || 
    game.genre.toLowerCase().includes(query)
  );
  res.json({ success: true, games: results });
});

// Get games by genre
app.get('/api/games/genre/:genre', (req, res) => {
  const genre = req.params.genre;
  const filteredGames = games.filter(game => 
    game.genre.toLowerCase() === genre.toLowerCase()
  );
  res.json({ success: true, games: filteredGames });
});

// Authentication endpoints (Note: In production, use proper authentication with hashing)
app.post('/api/auth/validate', (req, res) => {
  const { username, email } = req.body;
  // Basic validation
  if (!username || !email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Username and email are required' 
    });
  }
  res.json({ success: true, message: 'User validated' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎮 Gaming Zone Backend running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});

module.exports = app;
