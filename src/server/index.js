import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, world! This is an Express.js server.");
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});