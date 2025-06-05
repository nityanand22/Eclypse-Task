# Eclypse Task – Fullstack MERN Demo

[![TypeScript](https://img.shields.io/badge/TypeScript-007acc?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> **Live Demo:** [eclypse-task.vercel.app](https://eclypse-task.vercel.app)

---

## Overview

Eclypse Task is a fullstack web application built as a demo for modern React, TypeScript, and Node.js development. It demonstrates:
- A responsive frontend built with React + TypeScript + TailwindCSS
- A simple backend API with Node.js & Express (serving dummy product data)
- Fetching and rendering dynamic data
- Clean folder structure, state management, and component design

---

## Features

- 📦 Realistic product page UI
- 🔗 Frontend-backend API integration
- ⚡ Responsive & performant layout
- 🛠️ Easy to extend with more endpoints or UI features

---

## Tech Stack

- **Frontend:** React, TypeScript, TailwindCSS, react-icons, lucid-react
- **Backend:** Node.js, Express, CORS

---

## Folder Structure

```
Eclypse-Task/
│
├── Eclypse_task/           # Frontend React app
│   └── src/
│       └── components/
│           └── Product.tsx
│       └── assets/
│       └── ...
│
└── backend/                # Backend Node.js server
    └── server.js
    └── package.json
```

---

## Running Locally

### 1. Backend

```sh
cd backend
npm install
npm start
```
Server runs at [http://localhost:4000](http://localhost:4000).

The backend exposes a single endpoint:
- `GET /api/products` → Returns a dummy product array:  
  ```json
  [{ "id": 1, "price": 7999 }]
  ```

### 2. Frontend

```sh
cd Eclypse_task
npm install
npm start
```
App runs at [http://localhost:5173](http://localhost:5173) (default).

---

## How It Works

- Frontend fetches product data from backend using the `fetch` API.
- Price and product info are displayed dynamically.
- Layout is fully responsive and styled with TailwindCSS.
- Example data fetching in `Product.tsx`:
  ```tsx
  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setPrice(data[0].price);
        }
      });
  }, []);
  ```

---

## Configuration & Customization

- To add more product fields: update the backend response in `server.js` and adjust the frontend UI.
- To add more API endpoints: add more `app.get` or `app.post` routes in `server.js`.

---

## Troubleshooting

- **CORS errors:** Ensure backend is running and CORS is enabled.
- **Port conflicts:** Make sure ports 5173 (frontend) & 4000 (backend) are free.
- **Data not updating:** Check browser console and backend logs for errors.

---

## License

This project is for educational and demonstration purposes.

---

## Author

- [Nityanand Vishwakarma](https://github.com/nityanand22)

---

> ⭐️ Feel free to fork, contribute, or suggest improvements!
