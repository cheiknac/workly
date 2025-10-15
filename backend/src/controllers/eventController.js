import Announcement from "../models/announcement.js";
import Event from "../models/event.js";

const eventController = {

/* Afficher un évènement */
    
    async getOneEvent(req, res) {
    
    try {
        const { id } = req.params;

        const oneEvent = await Event.findByPk(id);

        if (!oneEvent) {
            return res.status(404).json({
                success: false,
                message: "Evénement non trouvé.",
            })
        }

        res.status(200).json({
            success: true,
            data: oneEvent,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération de l\'événement :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération de l\'événement.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

    /* Afficher tous les événement */
    
    async getAllEvent(req, res) {
    
    try {
        const events = await Event.findAll();

        res.status(200).json({
            success: true,
            count: events.length,
            data: events,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération des événements :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération des événements.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

    /* Ajouter d'un nouvelle événement */

    async createEvent(req, res) {

        try {

            const { title, date_event, name, address, zip_code, city, country, creator_id } = req.body;

            if(!title || !date_event || !name || !address || !zip_code || !city || !country || !creator_id) {
                return res.status(400).json({
                    success: false,
                    message: 'Veuillez fournir un titre, date, et adresse complète(nom, adresse, code postale, ville, et pays).',
                });
            }

            
            const existingEvent = await Event.findOne({ where: { title } });
            if (existingEvent) {
                return res.status(400).json({
                    success: false,
                    message: 'Un événement avec ce titre existe déjà.',
                });
            }

            /* empêcher la création d'événement hors de france */
            if (country.trim().toLowerCase() !== 'france' ) {
                return res.status(400).json({
                    success: false,
                    message: 'Vous ne pouvez pas créer un évènement hors de france.',
                })
            }


            const newEvent = await Event.create({
                title,
                date_event,
                name,
                address,
                zip_code,
                city,
                country,
                creator_id,
            });

            res.status(201).json({
                success: true,
                message: 'Annonce créé avec succès',
                data: newEvent,
            });
        } catch(error) {
            console.error('Erreur lors de la création de l’événement :', error);
            res.status(500).json({
                success: false,
                message: 'Erreur serveur lors de la création de l’événement.',
            });
        }
    },

    /*  ---------------------------------------------------------------------   */

    /* Modifier les informations d'un utilisateur */

    async updateEvent(req, res) {
        
        try {
            const {id} = req.params;
            const { title, date_event, name, address, zip_code, city, country, creator_id } = req.body;

            const updEvent = await Event.findByPk(id);
            if (!updEvent) {
                return res.status(404).json ({
                    success: false,
                    message: 'Evénement non trouvé',
                });
            }

            if (title) updEvent.title = title;
            if (date_event) updEvent.date_event= date_event;
            if (name) updEvent.name = name;
            if (address) updEvent.address = address;
            if (zip_code) updEvent.zip_code = zip_code;
            if (city) updEvent.city = city;
            if (country) updEvent.country = country;
            if (creator_id) updEvent.creator_id = creator_id;


            /* empêcher la création d'événement hors de france */
            if (country.trim().toLowerCase() !== 'france' ) {
                return res.status(400).json({
                    success: false,
                    message: 'Vous ne pouvez pas créer un évènement hors de france.',
                })
            }

            await updEvent.save();

            res.status(200).json({
                success: true,
                message: 'Evénement mis à jour avec succès.',
                data: updEvent,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l\’événement :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la mise à jour de l\’événement.'
            });
        }
    },

    /*  ---------------------------------------------------------------------   */

    /* Supprimer un évènement */

    async deleteEvent(req, res) {

        try {
            const { id } = req.params;

            const dltEvent = await Event.findByPk(id);

            if (!dltEvent) {
                return res.status(404).json({
                    success: false,
                    message: 'Evénement non trouvé.',
                });
            }

            await dltEvent.destroy();

            res.status(200).json({
                success: true,
                message: 'Evénement supprimé avec succès.',
            });
        } catch (error) {
            console.error("Erreur lors de la suppression de l\'événement :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la suppression de l\'événement.'
            });
        }
    }



};

export default eventController;