# 🎮 Assembly: Endgame

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern Hangman-inspired word guessing game built with **React**, **Vite**, and **Vanilla JavaScript**. Guess the hidden word before all programming languages are eliminated and Assembly takes over! The game features keyboard support, responsive design, dynamic UI updates, and celebratory animations when you win.

---
## 🚀 Live Demo

👉 **Play Here:**  
https://yamankadoura.github.io/assembly-endgame/

---

## 📸 Preview

![Assembly Endgame Screenshot](./assets/screenshot.png)

---

## 📸 DEMO
![Assembly Endgame Demo](./assets/run_example.gif)



## ✨ Features

- 🎯 Random word generated every game
- ⌨️ Full keyboard support
- 🖱️ On-screen interactive keyboard
- 🎉 Confetti celebration on victory
- 💀 Programming languages are eliminated after incorrect guesses
- 🎨 Dynamic game status messages
- 🔄 Start a new game with one click
- 📱 Fully responsive design
- ⚡ Fast performance powered by Vite

---

## 🛠 Technologies

- React
- Vite
- JavaScript (ES6+)
- CSS3
- React Hooks (`useState`, `useEffect`, `useRef`)
- clsx
- react-confetti

---

## 📂 Project Structure

```text
assembly-endgame/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── Components/
│   │   ├── Chip.jsx
│   │   └── Header.jsx
│   │
│   ├── utils/
│   │   ├── language.js
│   │   ├── util.js
│   │   └── words.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🎮 How to Play

- Guess the hidden word one letter at a time.
- Every incorrect guess eliminates one programming language.
- Win by revealing every letter before all languages are lost.
- Lose if only **Assembly** remains.

---

## 💻 Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/assembly-endgame.git
```

Navigate into the project:

```bash
cd assembly-endgame
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

## 📄 License

This project is licensed under the MIT License.