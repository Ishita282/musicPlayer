// server.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Serve songs from the /songs directory
app.use("/songs", express.static(path.join(__dirname, "songs")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🎧 Music Player running at http://localhost:${PORT}`);
});
