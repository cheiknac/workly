import { Router } from 'express';
import '../models/association.js';


/* Import des controllers */
import userRouter from './user.js';
import anmRouter from './announcement.js';
import evtRouter from './event.js';

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.send("Hello World my Backend")
});

mainRouter.use(userRouter);
mainRouter.use(anmRouter);
mainRouter.use(evtRouter);


export default mainRouter;