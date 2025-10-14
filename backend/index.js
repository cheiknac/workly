import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mainRouter from './src/routers/index.js';

const app = express();

app.use(express.json());

app.use(cors())

app.use(mainRouter);

const host = process.env.HOST;
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port: ${host}:${port}`);
})