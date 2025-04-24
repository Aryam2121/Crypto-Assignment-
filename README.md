# 📈 Real-Time Crypto Price Tracker

A sleek, responsive **React + Redux Toolkit** application that tracks real-time cryptocurrency prices. This app mimics live market behavior using simulated WebSocket updates and displays everything in a dynamic, color-coded table—just like CoinMarketCap.

🚀 **Live Demo**: [crypto-assignment-nine.vercel.app](https://crypto-assignment-nine.vercel.app)

---

## 🎯 Objective

Create a modern, visually appealing dashboard that:
- Displays real-time price movements of top crypto assets
- Utilizes Redux Toolkit for full state management
- Simulates WebSocket updates using `setInterval`
- Demonstrates efficient component re-renders using selectors

---

## 🛠️ Tech Stack

| Layer       | Technology                         |
|------------|-------------------------------------|
| Frontend    | React, Vite, Tailwind CSS          |
| State Mgmt  | Redux Toolkit (createSlice, store) |
| Mock WebSocket | Custom mock using `setInterval` |
| Charts      | Static SVG/Image for 7D trends     |

---

## 📂 Project Structure

```bash
crypto-tracker/
├── public/
├── src/
│   ├── app/
│   │   └── store.js               # Redux store setup
│   ├── features/
│   │   └── crypto/
│   │       ├── cryptoSlice.js     # Reducers & actions for crypto data
│   │       └── mockSocket.js      # Simulated WebSocket using setInterval
│   ├── components/
│   │   └── CryptoTable.jsx        # Reusable table component for asset data
│   ├── App.jsx                    # Root layout
│   ├── main.jsx                   # Entry point with Redux Provider
│   └── index.css                  # Tailwind CSS and global styles
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
📊 Key Features
✅ Crypto Table
Displays 5 assets (e.g., BTC, ETH, USDT, etc.)

Includes the following columns:

mathematica
Copy
Edit
# | Logo | Name | Symbol | Price | 1h % | 24h % | 7d % | Market Cap | 24h Volume | Circulating Supply | Max Supply | 7D Chart
Color-coded performance:

🟢 Green for gains

🔴 Red for losses

Responsive layout powered by Tailwind CSS

🔁 Simulated Real-Time Updates
Prices and % values change every 1–2 seconds

Fields updated:

Price

% Changes

24h Volume

All updates are managed through Redux actions (no local state)

🧠 Redux State Management
Centralized Redux store using configureStore

Asset data and updates handled in cryptoSlice.js

Selectors optimize rendering and improve performance

🧪 Local Development Setup
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/Aryam2121/Crypto-Assignment-.git
cd crypto-tracker
2️⃣ Install dependencies
bash
Copy
Edit
npm install
3️⃣ Start the development server
bash
Copy
Edit
npm run dev
4️⃣ Open in browser
Visit: http://localhost:5173

📺 Demo Walkthrough
🔗 Live App: crypto-assignment-nine.vercel.app

📹 Video Walkthrough (coming soon)
🎞️ Shows:

Table layout and design

Real-time simulation in action

Redux state updates

🌟 Bonus Ideas (Optional Enhancements)
🔌 Real WebSocket integration (e.g., Binance API)

🔍 Add sorting/filtering options (e.g., Top Gainers/Losers)

💾 Use localStorage to persist latest state

✅ Unit testing for reducers and selectors

⚙️ Convert project to TypeScript

🧑‍💻 Author
Built by Aryaman Gupta — crafted with 💙 for frontend finesse and real-time flair.

📬 Feedback
If you find a bug or have a suggestion, feel free to open an issue or submit a pull request!

🏁 Happy Coding & Crypto Watching!
yaml
Copy
Edit

---

Let me know if you'd like:
- A custom demo GIF
- Deployment badge for Vercel
- Shields.io badges (Tech Stack, License, etc.)

I can auto-generate those too!
