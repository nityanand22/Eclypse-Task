const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Dummy endpoint example
app.get("/api/products", (req, res) => {
  res.json([{ id: 1, price: 8999 }]);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
