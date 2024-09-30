# 🎬 Movie Explorer

Movie Explorer is a React application that allows users to explore and search for movies using data fetched from [The Movie Database (TMDb) API](https://developer.themoviedb.org/reference/intro/getting-started). This project is part of my personal portfolio and serves as an example of my proficiency in frontend development, API integration, and state management.

## 🚀 Features

- Search for movies by title.
- Display detailed information about individual movies.
- Paginated listing of popular and trending movies.
- Responsive design, optimized for mobile and desktop devices.

## 🛠️ Built With

- **React** - A JavaScript library for building user interfaces.
- **Redux Toolkit** - For state management.
- **Axios** - For making API requests.
- **CSS3** - For styling the components.
- **TMDb API** - For fetching movie data (posters, descriptions, etc.).

## 🔗 Live Demo

Check out the live demo of the project here: [Live Demo Link](#)

## 🎥 Screenshots

![Movie Explorer Screenshot 1](#)
![Movie Explorer Screenshot 2](#)

## ⚙️ Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **npm** or **yarn**: A package manager to install dependencies

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/hemantsinghparihar/movie_app_react.git
cd movie-explorer
```

2. **Install dependencies**:

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

3. **Get your TMDb API Key**:

   Go to [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started) and create a new API key. Once you have your API key, create a `.env` file in the root directory of your project.

4. **Set up environment variables**:

   Create a `.env` file in the root of your project and add the following environment variable:

   ```bash
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

### Running the Project

After setting up the environment variables, you can run the project locally.

```bash
# Start the development server
npm start
```

This will start the development server at `http://localhost:3000`.

### Building for Production

To create a production build of the project:

```bash
npm run build
```

The output will be in the `build/` folder, ready for deployment.

## 📂 Project Structure

```bash
├── public
├── src
│   ├── components    # Reusable UI components
│   ├── pages         # Page components for different routes
│   ├── redux         # Redux store and slices
│   ├── services      # API calls and configuration
│   ├── App.js        # Main app entry point
│   ├── index.js      # Entry point for React app
│   └── styles        # CSS styles
├── .env              # Environment variables
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

## 📝 Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Runs test cases (if any).
- `npm run lint`: Lints your code for consistent formatting.

## 🎯 API Integration

This app uses the [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started) to fetch real-time movie data. You can find more details on how to work with the API [here](https://developer.themoviedb.org/docs).

## 💡 Key Learning Points

- React hooks for managing state and side effects.
- Redux Toolkit for state management.
- Integration with a third-party API using Axios.
- Responsive UI with modern CSS techniques.
- Handling API pagination and search functionality.

## 🧑‍💻 Author

- **Your Name** - [LinkedIn](https://www.linkedin.com/in/yourprofile)

## 📄 License

This project is licensed under the MIT License.
```

You can directly use this markup language content in your `README.md` file for your GitHub repository. Make sure to replace placeholders like `yourusername`, `your_api_key_here`, and `Live Demo Link` with the actual information relevant to your project.
