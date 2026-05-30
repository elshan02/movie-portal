# Movie Portal  

Movie Portal is a clean, fully responsive React-based web application that lets users discover millions of movies, view detailed descriptions, and effortlessly build a persistent, custom watchlist.

## Features

- **Dynamic Movie Search:** Real-time query submission integrating directly with The Movie Database (TMDB) API.
- **Detailed Movie Grid:** Highlights vital details including movie posters, localized titles, plot descriptions, and release years.
- **Persistent Watchlist:** Save or remove your favorite movies with a dedicated toggling mechanism. Watchlists are preserved across sessions using `localStorage`.
- **Elegant Error Handling:** Graceful user interface handling and messaging when encountering API connectivity errors or missing queries.
- **Responsive Architecture:** Built with styling patterns designed to adapt smoothly across mobile, tablet, and desktop interfaces.

## Tech Stack

- **Frontend:** React 19, JavaScript (ES6+), HTML5, CSS3
- **Data Source:** TMDB (The Movie Database) API v3
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Storage:** Web Storage API (`localStorage`)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
```bash
git clone [https://github.com/elshan02/movie-portal.git](https://github.com/elshan02/movie-portal.git)
cd movie-portal
```

### Install Dependencies
```bash
npm install
```

### Environment Variable Setup
```bash
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
```

### Available Script
In the project directory, you can run the following commands:

```bash
npm start
```
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser. The page will reload automatically whenever you make edits.

```bash
npm run build
```
Builds the app for production deployment to the build folder.
It correctly bundles React in production mode and optimizes the build structure for maximum performance, minifying files and adding hashes to filenames.

```bash
npm test
```
Launches the test runner in interactive watch mode for testing suite configurations.
