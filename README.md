# Pixabay Gallery Application

A fullstack application that displays images from Pixabay API with pagination and category selection features.

## Features

- Display images in a 3x3 grid
- Pagination with prev/next buttons
- Category selection modal
- Image details modal
- Sorting functionality
- Responsive design

## Tech Stack

- Frontend: React.js with Redux Toolkit
- Backend: Node.js with Express
- Styling: Styled Components

## Setup Instructions

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

The server will run on http://localhost:5000

### Client Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the client:
   ```bash
   npm start
   ```

The client will run on http://localhost:3000

## API Endpoints

- GET `/api/images` - Get images with pagination and category filtering
  - Query Parameters:
    - category: string (default: 'nature')
    - page: number (default: 1)
    - sortBy: string ('id' or 'date')

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CategoryModal.js
│   │   │   └── ImageModal.js
│   │   ├── store/
│   │   │   ├── index.js
│   │   │   └── gallerySlice.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/
│   ├── src/
│   │   └── index.js
│   └── package.json
└── README.md
``` 