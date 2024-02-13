# MERN-Project

An exercise consisting of a react client and an express server interacting with REST API

## Prerequisites

- [Node.js](https://nodejs.org/en/) installed
- [npm](https://www.npmjs.com/) installed

## Installation of Backend

1. Go to backend directory

```sh
cd Backend
```

2. Install project dependencies

```sh
npm install
```

3. Start application

```sh
npm run dev
```

## Installation of Frontend

1. Go to frontend directory

```sh
cd Frontend
```

2. Install project dependencies

```sh
npm install
```

3. Start application

```sh
npm start
```

## Configuration

Frontend and backend both support configuration via environment variables.

**Backend**
- `PORT` - The port of the application (default is `4000`)

**Frontend**
- `PORT` - The port of the application (default is `3000`)
- `REACT_APP_BACKEND_URL` - The base url of the backend application (default is `http://localhost:4000/api/workouts`)

