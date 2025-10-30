# 🎮 Gaming Zone - Architecture Diagram

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        GAMING ZONE                          │
│                   Full-Stack Architecture                   │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                         FRONTEND                             │
│                  React.js (Port 3000)                        │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │   Navbar   │  │  GameCard  │  │   Footer   │           │
│  └────────────┘  └────────────┘  └────────────┘           │
│                                                              │
│  ┌─────────────────────────────────────────────────┐       │
│  │              React Router DOM                    │       │
│  │  ┌──────┐ ┌─────────┐ ┌──────┐ ┌───────────┐  │       │
│  │  │ Home │ │Dashboard│ │Login │ │ Favorites │  │       │
│  │  └──────┘ └─────────┘ └──────┘ └───────────┘  │       │
│  └─────────────────────────────────────────────────┘       │
│                                                              │
│  ┌─────────────────────────────────────────────────┐       │
│  │            State Management                      │       │
│  │  • LocalStorage Utils                            │       │
│  │  • API Service                                   │       │
│  │  • Authentication Service                        │       │
│  │  • Favorites Service                             │       │
│  └─────────────────────────────────────────────────┘       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
                          ↕️ HTTP/REST API
┌──────────────────────────────────────────────────────────────┐
│                         BACKEND                              │
│              Express.js Server (Port 5000)                   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────┐       │
│  │              API Endpoints                       │       │
│  │  • GET  /api/games                               │       │
│  │  • GET  /api/games/featured                      │       │
│  │  • GET  /api/games/:id                           │       │
│  │  • GET  /api/games/search/:query                 │       │
│  │  • GET  /api/games/genre/:genre                  │       │
│  │  • POST /api/auth/validate                       │       │
│  └─────────────────────────────────────────────────┘       │
│                                                              │
│  ┌─────────────────────────────────────────────────┐       │
│  │           In-Memory Game Database                │       │
│  │  8 Games with metadata                           │       │
│  └─────────────────────────────────────────────────┘       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
                          ↕️
┌──────────────────────────────────────────────────────────────┐
│                    LOCAL STORAGE                             │
│                 (Browser Storage)                            │
├──────────────────────────────────────────────────────────────┤
│  • userData: [{ id, username, email, password }]            │
│  • currentUser: { id, username, email }                     │
│  • isLoggedIn: boolean                                      │
│  • favorites_{userId}: [gameIds]                            │
│  • scores_{userId}: { gameId: score }                       │
│  • musicEnabled: boolean                                    │
└──────────────────────────────────────────────────────────────┘
```

## Data Flow

```
┌──────────────────────────────────────────────────────────────┐
│                      USER JOURNEY                            │
└──────────────────────────────────────────────────────────────┘

1. LANDING PAGE
   ↓
   User visits site
   ↓
   [Home Component]
   ↓
   Displays featured games
   ↓
   Fetches from Backend API

2. AUTHENTICATION
   ↓
   User clicks "Sign Up"
   ↓
   [Signup Component]
   ↓
   Validates input
   ↓
   Stores in LocalStorage
   ↓
   Auto-login → Dashboard

3. BROWSING GAMES
   ↓
   [Dashboard Component]
   ↓
   Fetches all games from API
   ↓
   Displays by category
   ↓
   User can:
   • Add to favorites
   • Search games
   • View details

4. FAVORITES
   ↓
   [Favorites Component]
   ↓
   Reads from LocalStorage
   ↓
   Displays saved games
   ↓
   Shows statistics
```

## Component Hierarchy

```
App
├── Particles (Background)
├── Navbar
│   ├── Logo
│   ├── Navigation Menu
│   ├── Search Bar
│   └── User Profile/Auth Buttons
│
├── Routes
│   ├── Home
│   │   ├── Hero Section
│   │   ├── Featured Games (GameCard[])
│   │   └── Info Section
│   │
│   ├── Dashboard
│   │   ├── Welcome Banner
│   │   ├── Horror Section (GameCard[])
│   │   ├── Adventure Section (GameCard[])
│   │   ├── Humor Section (GameCard[])
│   │   └── What's Next (GameCard[])
│   │
│   ├── Login
│   │   └── Auth Form
│   │
│   ├── Signup
│   │   └── Auth Form
│   │
│   └── Favorites
│       ├── Stats Cards
│       └── Favorites Grid (GameCard[])
│
└── Footer
    ├── Logo & Description
    ├── Quick Links
    ├── Categories
    └── Social Links
```

## State Management

```
┌─────────────────────────────────────────┐
│         LOCALSTORAGE SERVICE            │
├─────────────────────────────────────────┤
│                                         │
│  authService:                           │
│  ├── signup()                           │
│  ├── login()                            │
│  ├── logout()                           │
│  ├── isAuthenticated()                  │
│  └── getCurrentUser()                   │
│                                         │
│  favoritesService:                      │
│  ├── getFavorites()                     │
│  ├── addFavorite()                      │
│  ├── removeFavorite()                   │
│  ├── isFavorite()                       │
│  └── toggleFavorite()                   │
│                                         │
│  scoresService:                         │
│  ├── saveScore()                        │
│  ├── getScore()                         │
│  └── getAllScores()                     │
│                                         │
│  musicService:                          │
│  ├── isEnabled()                        │
│  ├── toggle()                           │
│  └── setEnabled()                       │
│                                         │
└─────────────────────────────────────────┘
```

## API Flow

```
Frontend                    Backend                  Data
────────                    ───────                  ────

[Component]
    │
    ├─→ api.getAllGames()
    │       │
    │       └─→ GET /api/games ────→ games[]
    │                                    │
    │       ←─────────────────────────────
    │
    ├─→ api.getFeaturedGames()
    │       │
    │       └─→ GET /api/games/featured ─→ Filter featured
    │                                           │
    │       ←──────────────────────────────────
    │
    ├─→ api.searchGames(query)
    │       │
    │       └─→ GET /api/games/search/:q ──→ Filter by query
    │                                            │
    │       ←──────────────────────────────────
    │
    └─→ api.getGamesByGenre(genre)
            │
            └─→ GET /api/games/genre/:g ───→ Filter by genre
                                                 │
            ←────────────────────────────────────
```

## CSS Architecture

```
styles/
├── index.css          # Global styles, variables, reset
│   ├── CSS Variables
│   ├── Color palette
│   ├── Typography
│   ├── Animations
│   └── Utilities
│
├── App.css            # Main layout, containers, sections
│
├── Navbar.css         # Navigation styles
├── GameCard.css       # Card component styles
├── Footer.css         # Footer styles
├── Auth.css           # Login/Signup styles
├── Home.css           # Home page styles
├── Dashboard.css      # Dashboard styles
└── Favorites.css      # Favorites page styles
```

## Responsive Breakpoints

```
Mobile First Approach

320px  ─────────┐
                │  Small Mobile
480px  ─────────┤
                │  Mobile
768px  ─────────┤
                │  Tablet
1024px ─────────┤
                │  Desktop
1440px+─────────┘
```

## Technology Stack

```
┌────────────────────────────────────────┐
│           FRONTEND STACK               │
├────────────────────────────────────────┤
│ React 18.2.0                           │
│ React Router DOM 6.20.0                │
│ Framer Motion 10.16.16                 │
│ React Icons 4.12.0                     │
│ CSS3 with Custom Properties            │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│           BACKEND STACK                │
├────────────────────────────────────────┤
│ Node.js                                │
│ Express.js 4.18.2                      │
│ CORS 2.8.5                             │
│ Body Parser 1.20.2                     │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│            STORAGE                     │
├────────────────────────────────────────┤
│ LocalStorage (Client-side)             │
│ In-Memory (Server-side)                │
└────────────────────────────────────────┘
```

---

**Built with 🖤 by WolvesClub Studio**
