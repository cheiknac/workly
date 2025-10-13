import { Router } from 'express';
import '../models/association.js';

import userRouter from './user.js';

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.send("Hello World my Backend")
});

mainRouter.use(userRouter);


export default mainRouter;