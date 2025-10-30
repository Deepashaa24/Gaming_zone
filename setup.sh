#!/bin/bash

# Gaming Zone Setup Script
# This script sets up both frontend and backend

echo "🎮 Welcome to Gaming Zone Setup!"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Setup Backend
echo "📦 Setting up Backend..."
cd backend
if [ -f "package.json" ]; then
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Backend dependencies installed successfully!"
    else
        echo "❌ Backend installation failed!"
        exit 1
    fi
else
    echo "❌ Backend package.json not found!"
    exit 1
fi
cd ..

echo ""

# Setup Frontend
echo "📦 Setting up Frontend..."
cd frontend
if [ -f "package.json" ]; then
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Frontend dependencies installed successfully!"
    else
        echo "❌ Frontend installation failed!"
        exit 1
    fi
else
    echo "❌ Frontend package.json not found!"
    exit 1
fi
cd ..

echo ""
echo "✅ Setup completed successfully!"
echo ""
echo "🚀 To start the application:"
echo "   1. Backend:  cd backend && npm start"
echo "   2. Frontend: cd frontend && npm start"
echo ""
echo "   Backend will run on:  http://localhost:5000"
echo "   Frontend will run on: http://localhost:3000"
echo ""
echo "Happy Gaming! 🎮"
