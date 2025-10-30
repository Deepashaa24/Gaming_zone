# 🎮 Gaming Zone - Full Stack Game Portal

A cinematic, Halloween-themed game portal built with React.js, Node.js, and Express.js featuring a dark, neon-glow aesthetic with smooth animations and immersive user experience.

![Gaming Zone](https://img.shields.io/badge/Gaming-Zone-orange)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node](https://img.shields.io/badge/Node.js-Express-green)

## 🌟 Features

### Core Functionality
- **Cinematic Landing Page** with featured games and smooth animations
- **User Authentication** (Login/Signup) with LocalStorage
- **Game Dashboard** with categorized sections (Horror, Adventure, Humor)
- **Favorites System** to save and manage favorite games
- **Search Functionality** to find games by title or genre
- **Responsive Design** across all devices (Desktop, Tablet, Mobile)

### UI/UX Highlights
- Dark, cinematic theme with neon glow effects
- Glassmorphism cards with depth shadows
- Smooth transitions and hover animations
- Floating particle effects background
- Music toggle control
- Professional typography (Bebas Neue, Anton, Poppins)

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Framework
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties

### Backend
- **Node.js** - Runtime
- **Express.js** - Server framework
- **CORS** - Cross-origin resource sharing

### Storage
- **LocalStorage** - User data, favorites, and scores

## 📁 Project Structure

```
Gaming_zone/
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   │   ├── index.html     # HTML template
│   │   └── assets/        # Game images/banners
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── GameCard.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Particles.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Favorites.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── App.css
│   │   │   ├── Navbar.css
│   │   │   ├── GameCard.css
│   │   │   ├── Footer.css
│   │   │   ├── Auth.css
│   │   │   ├── Home.css
│   │   │   ├── Dashboard.css
│   │   │   └── Favorites.css
│   │   │
│   │   ├── utils/
│   │   │   ├── localStorage.js  # LocalStorage utilities
│   │   │   └── api.js           # API service
│   │   │
│   │   ├── App.jsx
│   │   └── index.js
│   │
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Gaming_zone
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Backend will run on `http://localhost:5000`

2. **Start the Frontend (in a new terminal)**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on `http://localhost:3000`

3. **Open your browser** and visit `http://localhost:3000`

## 🎨 Design Theme

### Color Palette
- **Primary Background**: `#0a0a0a` (Deep Black)
- **Secondary Background**: `#1a1410` (Dark Brown)
- **Neon Orange**: `#ff6b35` (Primary Accent)
- **Neon Yellow**: `#f7b731` (Secondary Accent)
- **Shadow Purple**: `#a855f7` (Tertiary Accent)
- **Ghost White**: `#f4f4f4` (Text)
- **Blood Red**: `#dc143c` (Favorites)

### Typography
- **Headings**: Bebas Neue, Anton
- **Body**: Poppins

## 💾 LocalStorage Structure

```javascript
// User Data
localStorage.userData = [
  { id, username, email, password }
]

// Current User
localStorage.currentUser = { id, username, email }
localStorage.isLoggedIn = "true" | "false"

// Favorites (per user)
localStorage.favorites_{userId} = [gameId1, gameId2, ...]

// Scores (per user)
localStorage.scores_{userId} = {
  gameId1: score1,
  gameId2: score2
}

// Music State
localStorage.musicEnabled = "true" | "false"
```

## 🎮 Available Games

The platform includes 8 pre-configured games:
1. **The Skin Maker** (Horror)
2. **Skin Walker** (Horror)
3. **Shadow Realm** (Adventure)
4. **Ghostly Giggles** (Humor)
5. **Midnight Mysteries** (Horror)
6. **Phantom Quest** (Adventure)
7. **Haunted Havoc** (Humor)
8. **Cursed Chronicles** (Horror)

## 🔄 API Endpoints

### Games
- `GET /api/games` - Get all games
- `GET /api/games/featured` - Get featured games
- `GET /api/games/:id` - Get game by ID
- `GET /api/games/search/:query` - Search games
- `GET /api/games/genre/:genre` - Get games by genre

### Health
- `GET /api/health` - Server health check

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Key Features Implementation

### Authentication Flow
1. User signs up → Data saved to LocalStorage
2. Auto-login after signup
3. Login validation against stored credentials
4. Persistent session with isLoggedIn flag
5. Logout clears session data

### Favorites System
1. Login required to add favorites
2. User-specific favorites stored separately
3. Toggle favorite status with heart icon
4. Visual feedback with animations
5. Stats dashboard showing favorites count

### Search & Filter
1. Real-time search in navigation
2. Filter by genre categories
3. Results displayed with same card styling
4. Smooth transitions between views

## 🎨 Custom Animations

- **Fade In**: Component entrance
- **Slide Up**: Page transitions
- **Float**: Icon hover effects
- **Pulse**: Active states
- **Flicker**: Neon text effects
- **Glow**: Button and text shadows

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🔧 Development Scripts

### Backend
```bash
npm start      # Start server
npm run dev    # Start with nodemon (auto-reload)
```

### Frontend
```bash
npm start      # Start development server
npm run build  # Build for production
npm test       # Run tests
```

## 📝 Future Enhancements

- [ ] Add actual game integration
- [ ] Implement real database (MongoDB/PostgreSQL)
- [ ] Add user profiles and avatars
- [ ] Implement game ratings and reviews
- [ ] Add social sharing features
- [ ] Implement JWT authentication
- [ ] Add game trailers video player
- [ ] Create admin dashboard
- [ ] Add leaderboards
- [ ] Implement achievements system

## 👥 Credits

**Developed by**: WolvesClub Studio  
**Year**: 2025  
**Theme**: Halloween Special 2025

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Support

Give a ⭐️ if you like this project!

---

**Made with 🖤 for gamers by gamers**
