# 🎮 Background Image Setup Instructions

## 📸 Save the Image

You need to save the PUBG-style gaming image to use it as a background.

### Steps:

1. **Save the attached image** from the chat
2. **Rename it to:** `hero-bg.jpg`
3. **Copy it to:** `/home/navgurukul/Desktop/Gaming_zone/frontend/public/assets/images/hero-bg.jpg`

### Quick Command:
```bash
# After saving the image to Downloads or Desktop
cp ~/Downloads/hero-bg.jpg /home/navgurukul/Desktop/Gaming_zone/frontend/public/assets/images/hero-bg.jpg
```

## ✅ What I've Already Done

### CSS Updated:
- ✅ Modified `Home.css` to use the background image
- ✅ Added subtle zoom animation (20s cycle)
- ✅ Enhanced overlay for better text readability
- ✅ Added backdrop blur effect

### Effects Applied:
- **Image:** Full-screen cover background
- **Animation:** Subtle zoom in/out (1x to 1.05x scale)
- **Overlay:** Dark gradient for text visibility
- **Blur:** Slight backdrop blur for cinematic effect

## 🎨 What You'll See

Once the image is in place:
- 🖼️ Epic PUBG-style battle scene as hero background
- ✨ Subtle zoom animation creates depth
- 🌑 Dark overlay keeps text readable
- 🎮 Professional gaming portal aesthetic

## 🔄 Alternative: Use URL

If you have the image hosted online, you can also use a URL:

Edit `/home/navgurukul/Desktop/Gaming_zone/frontend/src/styles/Home.css`:

```css
.hero-background {
  background: 
    url('YOUR_IMAGE_URL_HERE') center center / cover no-repeat,
    linear-gradient(135deg, #0a0a0a 0%, #1a1410 100%);
}
```

## 📁 Current Directory Structure

```
Gaming_zone/
└── frontend/
    └── public/
        └── assets/
            └── images/          ← Place image here
                └── hero-bg.jpg  ← Name it this
```

## 🚀 After Adding Image

1. Image will load automatically (public folder is served)
2. No need to restart the server
3. Just refresh the browser at http://localhost:3000
4. The image will appear with cinematic effects!

---

**Need help? The CSS is already configured and ready to use the image!** 🎮✨
