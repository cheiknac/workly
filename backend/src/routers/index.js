import { Router } from 'express';
import '../models/Association.js';


/* Import des controllers */
import userRouter from './user.js';
import anmRouter from './announcement.js';
import evtRouter from './event.js';
import notifRouter from './notification.js';
import groupRouter from './group.js';

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.send("Hello World my Backend")
});

mainRouter.use(userRouter);
mainRouter.use(anmRouter);
mainRouter.use(evtRouter);
mainRouter.use(notifRouter);
mainRouter.use(groupRouter);


export default mainRouter;