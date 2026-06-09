# Postify — Instagram Clone Project Overview

## Project Summary

Postify is a full-stack Instagram-style social media clone built with a React/Vite frontend and an Express/MongoDB backend. It demonstrates common social app features like authentication, posting, following, profile browsing, search, suggested users, and protected routes.

## Tech Stack

- Frontend: React, Vite, React Router DOM, Axios, SCSS/Sass
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, cookie-parser, CORS
- Media: Image upload handling via ImageKit (frontend/backend integration)

## Architecture

### Frontend

The front end is organized by feature modules inside `Frontend/src/features`:

- `auth` handles login/register state, API calls, and auth context
- `follow` manages following/followers state, follow/unfollow actions, and follow pages
- `post` includes post creation, feeds, suggested users, story cards, profile pages, and search pages
- `shared` provides protected route handling, global styling, and sidebar navigation

Key frontend files:

- `Frontend/src/main.jsx` — app bootstrapping and root render
- `Frontend/src/App.jsx` — main app routes and layout
- `Frontend/src/app.routes.jsx` — route definitions and page wiring
- `Frontend/src/features/auth/authContext.jsx` — authentication context provider
- `Frontend/src/features/post/components/suggestedUser/Suggesteduser.jsx` — suggested user cards
- `Frontend/src/features/follow/pages/Follow.jsx` — followers/following management page

### Backend

The backend is structured as an Express API server with a modular MVC-inspired design.

Key backend files:

- `Backend/server.js` — server startup and environment loading
- `Backend/src/app.js` — Express app configuration, middleware, and route registration
- `Backend/src/config/database.js` — MongoDB connection setup
- `Backend/src/controllers` — request handlers for auth, follow, and post operations
- `Backend/src/routes` — route definitions for authentication, follow, and post endpoints
- `Backend/src/models` — Mongoose models for users, posts, and follow relationships
- `Backend/src/middleware/authMIddleware.js` — JWT and user authentication guard

## Core Features

### Authentication

- Register new users and log in existing users
- Password hashing with `bcrypt`
- JWT authentication stored in cookies
- Protected frontend routes using `ProtectedRoutes` component

### Social Feed and Posts

- Create posts with captions and image uploads
- Display post cards and profile posts
- Search posts or users
- Show user stories and feeds

### Following System

- Follow or unfollow users
- Fetch followers and following lists
- Display suggested users to follow
- Update frontend state dynamically after follow actions

### Profile and Search

- User profile page with their posts and follow counts
- Search page for users or posts
- Sidebar navigation for quick page access

## API Endpoints

### Auth

- `POST /api/auth/register` — create account
- `POST /api/auth/login` — authenticate user
- `GET /api/auth/get-me` — retrieve current user info

### Follow

- `GET /api/follow/followers` — get current user followers
- `GET /api/follow/following` — get users the current user follows
- `GET /api/follow/suggestedUsers` — get users suggested to follow
- `POST /api/follow/:userId` — follow a user
- `DELETE /api/follow/:userId` — unfollow a user

### Post

- `GET /api/post` — list all posts
- `GET /api/post/:id` — get a single post
- `GET /api/post/search` — search posts and users
- `POST /api/post` — create a new post

## Run Instructions

### Backend

1. Open `Backend` folder
2. Install dependencies: `npm install`
3. Start server: `npm run dev`

### Frontend

1. Open `Frontend` folder
2. Install dependencies: `npm install`
3. Start dev environment: `npm run dev`
4. Visit the local app at `http://localhost:5173`

## Notes

- The frontend uses SCSS modules for styling feature-specific pages and components.
- The backend uses Mongoose models to define schemas and relationships between users, posts, and follow records.
- The follow system is built to support bidirectional user relationships: followers and following.

## Recommended Improvements

- Add full typing with TypeScript for better maintainability
- Add server-side validation for all request payloads
- Add tests for critical flow: authentication, follow/unfollow, and post creation
- Improve error handling and client-side UX for failed API requests

## Project Value

This project is a strong demonstration of full-stack app development with:

- secure auth flows,
- user relationship modeling,
- interactive client-side state management,
- RESTful API design,
- modular feature-based frontend organization.

Use this overview as the base for a LinkedIn project description, portfolio summary, or technical case study of the Postify Instagram clone.
