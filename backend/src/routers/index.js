import { Router } from 'express';

const primaryRouter = Router();

primaryRouter.get('/', (req, res) => {
    res.send("Hello World my Backend")
});

export default primaryRouter;