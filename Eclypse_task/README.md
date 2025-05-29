# Eclypse Task – Fullstack Project

## Overview

This project is a fullstack web application built with:

- **Frontend:** React, TypeScript, TailwindCSS
- **Backend:** Node.js, Express (with dummy data)

The goal is to accurately recreate a product page design with functional components, basic state management, and a responsive layout. The backend provides a simple API endpoint to serve product data.

### I am just fetching the price of the product

---

## Folder Structure

```
Eclypse Task/
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

## Backend

### Tech Stack

- Node.js
- Express
- CORS

### How it Works

- The backend exposes a single endpoint:  
  `GET /api/products`  
  This returns a dummy product array with price and id.

#### Example Response

```json
[{ "id": 1, "price": 7999 }]
```

### Running the Backend

1. Open a terminal and navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. The backend will run at [http://localhost:4000](http://localhost:4000).

---

## Frontend

### Tech Stack

- React
- TypeScript
- TailwindCSS

### Packages used for icon

- react-icons
- lucid-react

### How it Works

- The main product page (`Product.tsx`) fetches product data from the backend using the `fetch` API.
- The price is displayed dynamically based on the backend response.
- The layout is responsive and styled with TailwindCSS.

#### Fetching Data Example

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

### Running the Frontend

1. Open a terminal and navigate to the `Eclypse_task` folder:
   ```sh
   cd Eclypse_task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
4. The frontend will run at [http://localhost:5173](http://localhost:5173) by default.

---

## Connecting Frontend and Backend

- The frontend fetches data from the backend at `http://localhost:4000/api/products`.
- Make sure both servers are running simultaneously.
- CORS is enabled in the backend, so cross-origin requests from the frontend are allowed.

---

## Customization

- To add more product fields, update the backend response in `server.js` and adjust the frontend accordingly.
- To add more endpoints, use additional `app.get` or `app.post` routes in `server.js`.

---

## Troubleshooting

- **CORS errors:** Ensure the backend is running and CORS is enabled.
- **Port conflicts:** Make sure ports 3000 (frontend) and 4000 (backend) are free.
- **Data not updating:** Check the browser console and backend logs for errors.

---

## License

This project is for educational and demonstration purposes.

---

## Author

- [Your Name]
