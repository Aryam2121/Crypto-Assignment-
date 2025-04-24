# 📈 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that tracks real-time cryptocurrency prices, simulating WebSocket updates and displaying the data in a dynamic, color-coded table.

---

## 🎯 Objective

Build a modern UI that:
- Displays live price movements of major crypto assets.
- Uses Redux Toolkit for all state management.
- Simulates real-time updates using a mocked WebSocket (with `setInterval`).

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **State Management**: Redux Toolkit (createSlice, configureStore)
- **Mock WebSocket**: `setInterval` to simulate live updates
- **Bundler**: Vite (for fast dev experience)
- **Chart**: Static image/SVG for 7D price trends

---

## 📂 Project Structure

crypto-tracker/ ├── public/ ├── src/ │ ├── app/ │ │ └── store.js # Redux store configuration │ ├── features/ │ │ └── crypto/ │ │ ├── cryptoSlice.js # Slice with reducers/actions for crypto data │ │ └── mockSocket.js # Simulated WebSocket updates using setInterval │ ├── components/ │ │ └── CryptoTable.jsx # Main table component displaying crypto data │ ├── App.jsx # Root component │ ├── main.jsx # Entry point with Provider │ └── index.css # Tailwind & global styles ├── tailwind.config.js ├── postcss.config.js ├── package.json └── vite.config.js

yaml
Copy
Edit

---

## 📊 Features

### ✅ Crypto Table
- Displays 5 assets (BTC, ETH, USDT, etc.)
- Columns:  
  `# | Logo | Name | Symbol | Price | 1h % | 24h % | 7d % | Market Cap | 24h Volume | Circulating Supply | Max Supply | 7D Chart`
- Responsive layout using Tailwind CSS
- Color-coded changes:  
  - 🟢 Green for positive %  
  - 🔴 Red for negative %

### 🔁 Real-Time Updates
- Simulated using `setInterval` (every 1–2 seconds)
- Randomly updates:
  - Price
  - % Change
  - 24h Volume
- State is fully managed with Redux (no local state)

### 🧠 Redux Store
- Centralized state for all crypto data
- Actions & reducers to handle updates
- Selectors for optimized re-renders

---

## 🧪 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aryam2121/Crypto-Assignment-
Install dependencies

bash
Copy
Edit
cd crypto-tracker
npm install
Start the development server

bash
Copy
Edit
npm run dev
Open in browser

Visit http://localhost:5173

📹 Demo
Watch the live demo showcasing UI, updates, and state management:
📺 Demo Video Link
Or view the embedded GIF below:

🌟 Bonus Ideas (Optional)
🔌 Integrate real WebSocket (e.g., Binance)

🔍 Add filters or sorting (e.g., Top Gainers)

💾 Persist data using localStorage

🧪 Add unit tests for reducers/selectors

✨ Migrate to TypeScript

