import Notification from '../models/Notification.js';

const notificationController = {

        /* Afficher une notification */
    
    async getOneNotif(req, res) {
    
    try {
        const { id } = req.params;

        const oneNotif = await Notification.findByPk(id);

        if (!oneNotif) {
            return res.status(404).json({
                success: false,
                message: "Notification non trouvé.",
            })
        }

        res.status(200).json({
            success: true,
            data: oneNotif,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération de la notification :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération de la notification.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

    /* Afficher tous les utilisateurs */
    
    async getAllNotif(req, res) {
    
    try {
        const notifs = await Notification.findAll();

        res.status(200).json({
            success: true,
            count: notifs.length,
            data: notifs,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération des notifications :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération des notifications.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

    /* Ajouter une nouvelle notification */

    async createNotification(req, res) {

        try {
            console.log('Requête reçue :', req.body);
            const { title, message, link } = req.body;


            if(!title || !message || !link) {
                return res.status(400).json({
                    success: false,
                    message: 'Veuillez fournir un titre, message, et lien.',
                });
            }


            const newNotif = await Notification.create({
                title,
                message,
                link,
            });

            res.status(201).json({
                success: true,
                message: 'Notification créé avec succès',
                data: newNotif,
            });
        } catch(error) {
            console.error('Erreur lors de la création de la notification :', error);
            res.status(500).json({
                success: false,
                message: 'Erreur serveur lors de la création de la notification.',
            });
        }
    },

/*  ---------------------------------------------------------------------   */

    /* Modifier les informations d'un utilisateur */

    async updNotification(req, res) {
        
        try {
            const {id} = req.params;
            const { title, message, link } = req.body;

            const updNotif = await Notification.findByPk(id);
            if (!updNotif) {
                return res.status(404).json ({
                    success: false,
                    message: 'Notification non trouvé',
                });
            }

            if (title) updNotif.title = title;
            if (message) updNotif.message = message;
            if (link) updNotif.link = link;

            await updNotif.save();

            res.status(200).json({
                success: true,
                message: 'Notification mis à jour avec succès.',
                data: updNotif,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la notification :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la mise à jour de la notification.'
            });
        }
    },

    /*  ---------------------------------------------------------------------   */

    /* Supprimer un utilisateur */

    async deleteNotification(req, res) {

        try {
            const { id } = req.params;

            const dltNotif = await Notification.findByPk(id);

            if (!dltNotif) {
                return res.status(404).json({
                    success: false,
                    message: 'Notification non trouvé.',
                });
            }

            await dltNotif.destroy();

            res.status(200).json({
                success: true,
                message: 'Notification supprimé avec succès.',
            });
        } catch (error) {
            console.error("Erreur lors de la suppression de la notification :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la suppression de la notification.'
            });
        }
    }



};

export default notificationController;