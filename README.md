# Social Media Wall

This project is a simple social media wall built using ReactJS.

## Features

- Menu bar with notifications and profile dropdown.
- Add a post section to create new posts.
- Display posts in reverse chronological order.
- Like and comment features for each post.
- Delete option for each post.
- Chat section to interact with friends.
- Collapsible chat window with message history.
- Friend search functionality.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ShrestAgarwal/social-media-wall.git
    cd social-media-wall
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the project:
    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Assumptions

- List of friends, notifications dropdown, and profile dropdown are hardcoded.
- The chat window is always visible at the bottom right corner of the screen and is collapsed at start.
- The design is kept simple.

## Project Structure

- `public/`: Contains the HTML template.
- `src/`: Contains all the React components.
- `App.js`: Main component that renders the entire application.
- `components/`: Contains individual components for the menu bar, posts, chat window, etc.
- `styles.css`: Contains the CSS styles for the application.
