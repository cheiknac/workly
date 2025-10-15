import { Router } from 'express';
import '../models/association.js';

import userRouter from './user.js';
import announcementController from './announcement.js';

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.send("Hello World my Backend")
});

mainRouter.use(userRouter);
mainRouter.use(announcementController);


export default mainRouter;