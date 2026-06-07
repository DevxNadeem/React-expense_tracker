# Expense Tracker

A simple expense tracking app built with React 19 and Vite.

## Features

- Add and delete expenses
- Categorize transactions
- View running balance, total income, and total expenses

## Tech Stack

- **React 19** — UI
- **Vite 7** — build tool and dev server
- **ESLint** — linting with React Hooks and React Refresh plugins

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/DevxNadeem/expense-tracker.git
cd expense-tracker
npm install
```

### Running Locally

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

## Project Structure

```
expense-tracker/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── ExpenseTracker.css
│   ├── ExpenseTracker.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## License

MIT
