# 🎉 Happy Birthday Website

A beautiful, animated birthday greeting website with background music, built with React and Vite.

<p align="center"><img src="https://happy-birthday-murex-pi.vercel.app/deskBanner.png" /></p>

---

## ✨ Features

- 🎵 **Background Music Player** - "Yellow" by Coldplay plays in the background
- 🎨 **Aesthetic Music Controls** - Glassmorphism design with play/pause and volume control
- 📱 **Fully Mobile-Optimized** - Responsive design for all screen sizes
- 🎂 **Animated Cake Loader** - Beautiful opening animation
- 💝 **Personalized Birthday Message** - Heartfelt greeting with smooth animations
- 🎈 **Decorative Elements** - Balloons, hearts, and stars with smooth animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Munna-Scriptz/Happy-Birthday.git
cd Happy-Birthday-main
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

---

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

Your site will be live in seconds! 🚀

### Vercel Configuration

The project includes a `vercel.json` file for proper SPA routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📁 Project Structure

```
Happy-Birthday-main/
├── public/              # Static assets served directly
│   ├── yellow.mp3      # Background music file
│   ├── cakeFavicon.png
│   └── ...
├── src/
│   ├── components/     # React components
│   │   ├── BookCanvas.jsx
│   │   ├── HeartTransition.jsx
│   │   ├── OpeningAnimation.jsx
│   │   └── SmallLetter.jsx
│   ├── pages/          # Page components
│   │   └── Home.jsx
│   ├── layout/         # Layout components
│   │   └── Layout.jsx
│   ├── assets/         # Images and static assets
│   ├── App.jsx         # Main app with music player
│   ├── App.css         # Main styles
│   └── main.jsx        # App entry point
├── vercel.json         # Vercel deployment config
├── vite.config.js      # Vite configuration
└── package.json
```

---

## 🎵 Music Player

The website features an aesthetic music player with:
- **Song:** "Yellow" by Coldplay
- **Play/Pause Control** - Easy toggle button
- **Volume Slider** - Adjustable volume control
- **Glassmorphism Design** - Beautiful frosted glass effect
- **Responsive Layout** - Optimized for mobile and desktop
- **Auto-play Support** - Music starts automatically (if browser allows)

The player is positioned at the bottom center of the screen and includes animated slide-up entrance.

---

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- **Responsive Breakpoints:** 768px, 480px, and 380px
- **Touch-Friendly Controls:** Large, easy-to-tap buttons
- **Optimized Animations:** Smooth performance on mobile devices
- **Flexible Layout:** Adapts to portrait and landscape orientations
- **Optimized Assets:** Images and decorations scale appropriately

---

## 🛠️ Technologies Used

- **React 19** - Latest React with modern hooks
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **CSS Animations** - Smooth, hardware-accelerated animations
- **HTML5 Audio API** - Native audio playback

---

## 💝 Personalization Guide

### Change the Recipient Name:
- Edit `src/pages/Home.jsx` - Update "Dear Riddhima" to your recipient's name
- Edit `src/components/SmallLetter.jsx` - Update the letter content

### Replace the Photo:
- Add your image to `src/assets/`
- Update import in `src/pages/Home.jsx`:
```javascript
import profileImg from "../assets/YOUR_IMAGE.jpg";
```

### Change the Music:
1. Add your MP3 file to `public/` directory
2. Update the audio source in `src/App.jsx`:
```javascript
<source src="/your-song.mp3" type="audio/mpeg" />
```
3. Update song title and artist:
```javascript
<div className="song-title">Your Song Title</div>
<div className="artist-name">Artist Name</div>
```

### Customize Colors:
Edit `src/App.css` CSS variables:
```css
:root {
    --color-pink: #feecea;
    --color-text-pink: #FF7882;
    --color-heart: #FF7882;
}
```

---

## 🎨 Why This Project?

This project was created to deliver a **unique and memorable birthday experience** using modern web technologies. It combines beautiful animations, interactive elements, and personalized touches to make someone's special day even more magical.

---

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 💖 Credits

- **Original Creator:** [Munna-Scriptz](https://github.com/Munna-Scriptz)
- **Music:** "Yellow" by Coldplay
- **Enhanced by:** Aditya

---

## 📬 Connect

If you use this project or want to collaborate, feel free to reach out!

Made with ❤️ and lots of ☕

---

### 🎉 Happy Birthday to your loved ones! 🎂
