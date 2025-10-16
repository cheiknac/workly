import Group from "../models/Group.js";
import User from "../models/User.js";

const groupController = {

    /* Afficher tous les groupe */
    
    async getAllGroup(req, res) {
    
    try {
        const groups = await Group.findAll({
            include: {
                model: User,
                through: { attributes: [] }
            }
        });

        res.status(200).json({
            success: true,
            count: groups.length,
            data: groups,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération du groupe :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération du groupe.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

        /* Afficher un groupe */
    
    async getOneGroup(req, res) {
    
    try {
        const { id } = req.params;

        const oneGroup = await Group.findByPk(id, {
            include: {
                model: User,
                through: { attributes: [] }
            }
        });

        if (!oneGroup) {
            return res.status(404).json({
                success: false,
                message: "Groupe non trouvé.",
            })
        }

        res.status(200).json({
            success: true,
            data: oneGroup,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération du groupe :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération du groupe.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

    /* Ajouter un nouveau groupe */

    async createGroup(req, res) {

        try {

            const { group_name } = req.body;

            if(!group_name) {
                return res.status(400).json({
                    success: false,
                    message: 'Veuillez fournir un nom de groupe.',
                });
            }

            const existingGroup = await Group.findOne({ where: { group_name } });
            if (existingGroup) {
                return res.status(400).json({
                    success: false,
                    message: 'Un groupe avec ce nom existe déjà.',
                });
            }

            const newGroup = await Group.create({
                group_name,
                include: {
                    model: User,
                    through: { attributes: [] }
                }
            });

            res.status(201).json({
                success: true,
                message: 'Notification créé avec succès',
                data: newGroup,
            });
        } catch(error) {
            console.error('Erreur lors de la création du groupe :', error);
            res.status(500).json({
                success: false,
                message: 'Erreur serveur lors du groupe.',
            });
        }
    },

/*  ---------------------------------------------------------------------   */

    /* Modifier un groupe */

    async updGroup(req, res) {
        
        try {
            const {id} = req.params;
            const { group_name } = req.body;

            const updGroup = await Group.findByPk(id);
            if (!updGroup) {
                return res.status(404).json ({
                    success: false,
                    message: 'Groupe non trouvé',
                });
            }

            if (group_name) updGroup.group_name = group_name;

            await updGroup.save();

            res.status(200).json({
                success: true,
                message: 'Groupe mis à jour avec succès.',
                data: updGroup,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du groupe :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la mise à jour du groupe.'
            });
        }
    },

/*  ---------------------------------------------------------------------   */

    /* Supprimer un utilisateur */

    async deleteGroup(req, res) {

        try {
            const { id } = req.params;

            const dltGroup = await Group.findByPk(id);

            if (!dltGroup) {
                return res.status(404).json({
                    success: false,
                    message: 'Groupe non trouvé.',
                });
            }

            await dltGroup.destroy();

            res.status(200).json({
                success: true,
                message: 'Groupe supprimé avec succès.',
            });
        } catch (error) {
            console.error("Erreur lors de la suppression du groupe :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la suppression du groupe.'
            });
        }
    }




};

export default groupController;