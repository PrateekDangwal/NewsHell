# 📰 NewsHell — Discover News Differently

**NewsHell** is a modern, immersive news-reading web application built with React. It presents news in a full-screen, swipe-friendly interface, allowing users to explore articles one at a time instead of scrolling through a traditional news feed.

Discover trending stories, browse news categories, and read full articles from their original sources.

## ✨ Features

* **Immersive News Feed** — Explore news articles in a full-screen interface.
* **Category-Based News** — Browse general headlines, Tesla-related news, and other news feeds.
* **Keyboard Navigation** — Use the `↑` and `↓` arrow keys to navigate between articles.
* **Mouse Wheel Navigation** — Scroll up or down to switch between stories.
* **Touch Gestures** — Swipe on touch-enabled devices to navigate the feed.
* **Infinite Scrolling Experience** — Automatically fetch more articles as you approach the end of the current feed.
* **Article Details** — View headlines, descriptions, sources, authors, publication dates, and images.
* **Read Full Articles** — Open the original news article in a new tab.
* **Loading States** — See when additional news is being fetched.
* **Error Handling** — Display errors when a news request fails.
* **Responsive UI** — Designed for an immersive experience across different screen sizes.
* **Fallback Images** — Display a placeholder when an article has no image.

## 🛠️ Tech Stack

| Technology        | Purpose                                       |
| ----------------- | --------------------------------------------- |
| React             | Building the user interface                   |
| JavaScript (ES6+) | Application logic and asynchronous operations |
| Tailwind CSS      | Styling and responsive layouts                |
| NewsAPI           | Fetching news articles                        |
| Fetch API         | Making HTTP requests                          |
| Vite              | Development server and build tooling          |

## 📸 Application Overview

NewsHell focuses on a simple, immersive reading experience:

* A full-screen article image with a gradient overlay.
* A prominent headline and article description.
* Source, author, and publication information.
* Navigation controls for moving between stories.
* A direct link to the original article.

## 🚀 Getting Started

Follow these steps to run NewsHell locally.

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm, which comes with Node.js
* A [NewsAPI](https://newsapi.org/) API key

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/NewsHell.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Navigate to the Project Directory

```bash
cd NewsHell
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the API Key

Create a `.env` file in the project root directory:

```env
VITE_NEWS_API_KEY=your_newsapi_key_here
```

Replace `your_newsapi_key_here` with your actual NewsAPI key.

In your React code, access the key using:

```javascript
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
```

**Important:** Variables prefixed with `VITE_` are exposed to the browser. This setup is suitable only if you accept that the API key can be inspected by users. For a private key, use a backend proxy instead. Never commit your `.env` file to GitHub.

Ensure your `.gitignore` includes:

```gitignore
node_modules/
dist/
.env
.env.*
!.env.example
```

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL printed in your terminal to view NewsHell in your browser.

## 🎮 How to Use

| Action                  | Control                                                   |
| ----------------------- | --------------------------------------------------------- |
| Next article            | Press `↓`, scroll down, swipe up, or click the down arrow |
| Previous article        | Press `↑`, scroll up, swipe down, or click the up arrow   |
| Read the complete story | Click **Read Full Article**                               |
| Browse more news        | Continue navigating through the feed                      |

Navigation behavior may depend on whether additional articles are available.

## 🗂️ Project Structure

A typical project structure looks like this:

```text
NewsHell/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── News.js
│   │   └── NewsItem.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Your actual filenames and folders may differ. Update this section to match your repository.*

## 🌐 NewsAPI Integration

NewsHell uses [NewsAPI](https://newsapi.org/) to retrieve news articles.

The application can request different types of news, including:

* **General Headlines** — Top general headlines.
* **Tesla News** — Articles related to Tesla.
* **Everything** — Articles matching a general news search.
* **Additional Categories** — Depending on the categories and endpoints configured in the application.

The app uses pagination to retrieve articles in batches and appends subsequent results to the existing feed.

**Note:** API access, available endpoints, request limits, and production usage depend on your NewsAPI plan and current terms. Check the provider's documentation for details.

## ⚙️ Available Scripts

The following commands are typical for a Vite-based React project:

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Creates a production build            |
| `npm run preview` | Previews the production build locally |

Run these commands from the project directory.

## 🔒 Security Notes

* Never commit API keys or other secrets to a public repository.
* Keep `.env` in `.gitignore`.
* Remember that `VITE_` environment variables are included in the client-side application and are not secret.
* Use a backend proxy when a provider key must remain private.
* Review the API provider's usage limits and terms before deploying.

## 🔮 Future Improvements

Potential improvements for future versions include:

* Search news by keyword.
* Add more news categories and country filters.
* Add bookmarks and saved articles.
* Add a dark/light theme toggle.
* Add article sharing.
* Improve loading animations and transitions.
* Add user preferences for news categories.
* Add backend caching and server-side API-key protection.
* Add automated tests for navigation and API error handling.

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Commit your changes with a descriptive message.
5. Open a pull request.

 
---

**Built with React, JavaScript, Tailwind CSS, and NewsAPI.**

*NewsHell — Your news, one story at a time.*
