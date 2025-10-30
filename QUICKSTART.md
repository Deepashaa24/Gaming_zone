# Gaming Zone - Quick Start Guide

## 🚀 Quick Setup

### Option 1: Automated Setup (Linux/Mac)
```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup
```bash
# Install Backend
cd backend
npm install

# Install Frontend (in new terminal)
cd frontend
npm install
```

## 🎮 Running the App

### Start Backend (Terminal 1)
```bash
cd backend
npm start
```
Server runs at: http://localhost:5000

### Start Frontend (Terminal 2)
```bash
cd frontend
npm start
```
App opens at: http://localhost:3000

## 👤 Test Accounts

After starting the app, create an account or use these steps:
1. Click "Sign Up"
2. Enter username, email, and password
3. Auto-redirects to dashboard after signup

## 🎯 Features to Try

1. **Browse Games**: Explore the landing page
2. **Sign Up/Login**: Create an account
3. **Add Favorites**: Click heart icon on game cards
4. **Search**: Use the search bar in navigation
5. **View Dashboard**: See games by category
6. **Check Favorites**: View your saved games

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Kill process on port 5000
kill -9 $(lsof -ti:5000)
```

### Clear LocalStorage
Open browser console and run:
```javascript
localStorage.clear()
```

### Module Not Found
```bash
cd frontend  # or backend
rm -rf node_modules package-lock.json
npm install
```

## 📝 Environment Variables

Create `.env` files if needed:

**Backend (.env)**
```
PORT=5000
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000
```

## 🔥 Hot Tips

- Use Chrome DevTools for best experience
- Check browser console for any errors
- Backend must be running for API calls
- LocalStorage data persists between sessions
- Use Ctrl+Shift+R for hard refresh

## 📚 Documentation

See README.md for full documentation.

---
Made with 🖤 by WolvesClub Studio
