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

/*  ---------------------------------------------------------------------   */

    /* Ajouter d'une nouvelle annonce */

    async createAnnouncement(req, res) {

        try {
            console.log('Requête reçue :', req.body);
            const { title, date_announcement, message } = req.body;


            if(!title || !date_announcement || !message) {
                return res.status(400).json({
                    success: false,
                    message: 'Veuillez fournir un titre, date, et message.',
                });
            }


            const existingAnnouncement = await Announcement.findOne({ where: { title } });
            if (existingAnnouncement) {
                return res.status(400).json({
                    success: false,
                    message: 'Une annonce avec ce titre existe déjà.',
                });
            }

            const newAnnouncement = await Announcement.create({
                title,
                date_announcement,
                message,
            });

            res.status(201).json({
                success: true,
                message: 'Annonce créé avec succès',
                data: newAnnouncement,
            });
        } catch(error) {
            console.error('Erreur lors de la création de l’annonce :', error);
            res.status(500).json({
                success: false,
                message: 'Erreur serveur lors de la création de l’annonce.',
            });
        }
    },

    /*  ---------------------------------------------------------------------   */

    /* Modifier les informations d'une annonce */

    async updateAnnoncement(req, res) {
        
        try {
            const {id} = req.params;
            const { title, date_announcement, message } = req.body;

            const updtAnnouncement = await Announcement.findByPk(id);
            if (!updtAnnouncement) {
                return res.status(404).json ({
                    success: false,
                    message: 'Annonce non trouvé',
                });
            }

            if (title) updtAnnouncement.title = title;
            if (date_announcement) updtAnnouncement.date_announcement = date_announcement;
            if (message) updtAnnouncement.message = message;

            await updtAnnouncement.save();

            res.status(200).json({
                success: true,
                message: 'Annonce mis à jour avec succès.',
                data: updtAnnouncement,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l’annonce :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la mise à jour de l’annonce.'
            });
        }
    },

/*  ---------------------------------------------------------------------   */

    /* Supprimer une annonce */

    async deleteAnnouncement(req, res) {

        try {
            const { id } = req.params;

            const dltAnnouncement = await Announcement.findByPk(id);

            if (!dltAnnouncement) {
                return res.status(404).json({
                    success: false,
                    message: 'Annonce non trouvé.',
                });
            }

            await dltAnnouncement.destroy();

            res.status(200).json({
                success: true,
                message: 'Annonce supprimé avec succès.',
            });
        } catch (error) {
            console.error("Erreur lors de la suppression de l\'annonce :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la suppression de l\'annonce.'
            });
        }
    }

}



export default announcementController;