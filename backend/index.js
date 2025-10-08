import 'dotenv/config';
import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World")
})

const host = process.env.HOST;
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port: ${host}:${port}`);
})