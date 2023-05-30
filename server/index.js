const express = require("express");
const cors = require("cors");
const uuid = require("uuid");

const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.get("/list", (req, res) => {
  const filePath = path.join(__dirname, "data", "movies.json");
  const fileData = fs.readFileSync(filePath);
  const moviesList = JSON.parse(fileData);
  res.send(moviesList);
});

app.post("/add-movie", (req, res) => {
  const movieData = req.body;
  movieData.id = uuid.v4();

  const filePath = path.join(__dirname, "data", "movies.json");

  const fileData = fs.readFileSync(filePath);
  const existingMovies = JSON.parse(fileData);
  existingMovies.push(movieData);

  fs.writeFileSync(filePath, JSON.stringify(existingMovies));

  res.status(200).send({ status: "received" });
});

app.listen(3001);
