import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import primaryRouter from './src/routers/index.js';

const app = express();

app.use(cors())

app.use(primaryRouter);

const host = process.env.HOST;
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port: ${host}:${port}`);
})