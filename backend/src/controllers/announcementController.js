import Announcement from "../models/announcement.js";

const announcementController = {

 /* Afficher une annonce */
    
    async getOneAnnouncement(req, res) {
    
    try {
        const { id } = req.params;

        const oneAnnouncement = await Announcement.findByPk(id);

        if (!oneAnnouncement) {
            return res.status(404).json({
                success: false,
                message: "Annonce non trouvé.",
            })
        }

        res.status(200).json({
            success: true,
            data: oneAnnouncement,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération de l\'annonce :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération de l\'annonce.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

    /* Afficher toutes les annonces */
    
    async getAllAnnouncement(req, res) {
    
    try {
        const announcements = await Announcement.findAll();

        res.status(200).json({
            success: true,
            count: announcements.length,
            data: announcements,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération des annonces :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération des annonces.',
        });
    }
},




}



export default announcementController;