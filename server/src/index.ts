import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.static(path.resolve("build")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(9000, () => console.log("Server listen 9000"));
