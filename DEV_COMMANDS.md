# 🛠️ Developer Commands & Tips

## 📦 Installation Commands

### Install All Dependencies
```bash
# From root directory
npm run install-all

# Or manually
cd backend && npm install
cd ../frontend && npm install
```

### Individual Package Installation
```bash
# Backend specific
cd backend
npm install express cors body-parser

# Frontend specific
cd frontend
npm install react react-dom react-router-dom framer-motion react-icons
```

## 🚀 Running the Application

### Development Mode

**Option 1: Separate Terminals**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm start
```

**Option 2: Using Root Scripts**
```bash
# Backend
npm run backend

# Frontend (new terminal)
npm run frontend
```

**Option 3: Background Process**
```bash
# Run backend in background
cd backend
npm start &

# Run frontend
cd frontend
npm start
```

### Production Build
```bash
cd frontend
npm run build

# Serve build
npx serve -s build
```

## 🔍 Development Tools

### Browser DevTools
```bash
# Open React DevTools
# Install extension: React Developer Tools

# Open Network tab to inspect API calls
# Open Console for errors
# Open Application > LocalStorage to view data
```

### VS Code Extensions (Recommended)
```bash
# Install these extensions:
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense
```

## 🧪 Testing & Debugging

### Clear LocalStorage
```javascript
// In browser console
localStorage.clear()

// Clear specific items
localStorage.removeItem('userData')
localStorage.removeItem('currentUser')
localStorage.removeItem('isLoggedIn')
```

### Check API Connection
```bash
# Test backend health
curl http://localhost:5000/api/health

# Get all games
curl http://localhost:5000/api/games

# Search games
curl http://localhost:5000/api/games/search/horror
```

### React Component Debugging
```javascript
// Add console logs in components
console.log('Component rendered', props, state)

// Use React DevTools
// Inspect component tree
// Check props and state
```

### Check Ports
```bash
# See what's running on ports
lsof -i :3000
lsof -i :5000

# Kill process on port
kill -9 $(lsof -ti:3000)
kill -9 $(lsof -ti:5000)
```

## 📝 Common Commands

### Backend Development
```bash
cd backend

# Start server
npm start

# Start with auto-reload (if nodemon installed)
npm run dev

# Install new package
npm install <package-name>

# Remove package
npm uninstall <package-name>
```

### Frontend Development
```bash
cd frontend

# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (not recommended)
npm run eject
```

## 🔧 Troubleshooting Commands

### Fix Module Issues
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
```

### Fix Port Conflicts
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Reset Git
```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Gaming Zone project"

# Add remote
git remote add origin <your-repo-url>

# Push
git push -u origin main
```

## 📊 Useful npm Scripts

### Add Custom Scripts to package.json
```json
{
  "scripts": {
    "install-all": "cd backend && npm install && cd ../frontend && npm install",
    "backend": "cd backend && npm start",
    "frontend": "cd frontend && npm start",
    "dev-backend": "cd backend && npm run dev",
    "build": "cd frontend && npm run build",
    "clean": "rm -rf */node_modules */package-lock.json",
    "reset": "npm run clean && npm run install-all"
  }
}
```

## 🎨 Style Development

### CSS Tips
```css
/* Use CSS variables for consistency */
:root {
  --primary-color: #ff6b35;
}

/* Enable hot reload for CSS changes */
/* Changes reflect automatically in dev mode */
```

### Inspect Styles
```bash
# In browser DevTools
# Right-click element > Inspect
# View computed styles
# Edit styles live
```

## 📈 Performance Optimization

### Build Optimization
```bash
cd frontend

# Analyze bundle size
npm run build
# Check build/static folder

# Use production build for deployment
npm run build
```

### Image Optimization
```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize images
sharp -i input.jpg -o output.jpg --quality 80
```

## 🔐 Security Commands

### Update Dependencies
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Force fix
npm audit fix --force

# Update all packages
npm update
```

## 📦 Deployment Preparation

### Environment Variables
```bash
# Backend .env
echo "PORT=5000" > backend/.env

# Frontend .env
echo "REACT_APP_API_URL=http://localhost:5000" > frontend/.env
```

### Build for Production
```bash
# Frontend
cd frontend
npm run build

# Backend (prepare for hosting)
cd backend
# Ensure package.json has correct start script
```

## 🌐 Deployment Commands

### Deploy to Heroku (Backend)
```bash
cd backend
heroku create gaming-zone-api
git init
git add .
git commit -m "Deploy backend"
git push heroku main
```

### Deploy to Vercel (Frontend)
```bash
cd frontend
npm install -g vercel
vercel login
vercel
```

### Deploy to Netlify (Frontend)
```bash
cd frontend
npm run build
# Drag build folder to netlify.com
# Or use CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

## 🐛 Debug Commands

### Node.js Debugging
```bash
# Run with inspector
node --inspect backend/server.js

# Debug in Chrome
# Open chrome://inspect
```

### React Debugging
```bash
# Enable React profiling
# Add ?react_perf to URL
http://localhost:3000?react_perf
```

## 📚 Documentation Generation

### Generate Component Docs
```bash
# Install documentation tool
npm install -g jsdoc

# Generate docs
jsdoc src/**/*.jsx -d docs
```

## 🧰 Utility Commands

### File Operations
```bash
# Find files
find . -name "*.jsx"

# Count lines of code
find ./src -name "*.jsx" | xargs wc -l

# Search in files
grep -r "localStorage" ./src
```

### Project Statistics
```bash
# Count files
find ./src -type f | wc -l

# Directory size
du -sh frontend backend
```

## 🎯 Quick Actions

### Daily Development Flow
```bash
# 1. Pull latest changes
git pull

# 2. Install new dependencies (if any)
npm install

# 3. Start backend
cd backend && npm start &

# 4. Start frontend
cd frontend && npm start

# 5. Make changes and test

# 6. Commit and push
git add .
git commit -m "Your message"
git push
```

### Before Submitting
```bash
# 1. Test everything works
# 2. Check for console errors
# 3. Test responsive design
# 4. Clear LocalStorage and test signup/login
# 5. Build production version
npm run build

# 6. Check build size
du -sh frontend/build
```

## 💡 Pro Tips

1. **Use ESLint**: `npx eslint src/**/*.jsx`
2. **Format Code**: `npx prettier --write "src/**/*.{js,jsx}"`
3. **Check Bundle**: `npm run build && source-map-explorer build/static/js/*.js`
4. **Monitor Changes**: `watch -n 1 "ls -lh frontend/src"`
5. **Quick Server**: `python3 -m http.server 8000` (for testing builds)

---

**Happy Coding! 🚀**

*WolvesClub Studio - 2025*
