import { Router } from 'express';
import announcementController from '../controllers/announcementController.js';

const anmRouter = Router();

anmRouter
    .route('/announcements')
    .get(announcementController.getAllAnnouncement)
    .post(announcementController.createAnnouncement);

anmRouter
    .route('/announcements/:id')
    .get(announcementController.getOneAnnouncement)
    .patch(announcementController.updateAnnoncement)
    .delete(announcementController.deleteAnnouncement);


export default anmRouter;