import User from '../models/user.js';


const userController = {

        /* Afficher un utilisateur */
    
    async getOneUser(req, res) {
    
    try {
        const { id } = req.params;

        const oneUser = await User.findByPk(id);

        if (!oneUser) {
            return res.status(404).json({
                success: false,
                message: "Utilisateur non trouvé.",
            })
        }

        res.status(200).json({
            success: true,
            data: oneUser,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération de utilisateur.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

    /* Afficher tous les utilisateurs */
    
    async getAllUsers(req, res) {
    
    try {
        const users = await User.findAll();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch(error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        res.status(500).json({
            success: false,
            message: 'Erreur serveur lors de la récupération des utilisateurs.',
        });
    }
},

/*  ---------------------------------------------------------------------   */

    /* Ajouter un nouvelle utilisateur */

    async createUser(req, res) {

        try {
            console.log('Requête reçue :', req.body);
            const { lastname, firstname, email, password_hash } = req.body;


            if(!lastname || !firstname || !email || !password_hash) {
                return res.status(400).json({
                    success: false,
                    message: 'Veuillez fournir un nom, prénom, email, password.',
                });
            }


            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: 'Un utilisateur avec cet email existe déjà.',
                });
            }

            const newUser = await User.create({
                lastname,
                firstname,
                email,
                password_hash,
            });

            res.status(201).json({
                success: true,
                message: 'Utlisateur créé avec succès',
                data: newUser,
            });
        } catch(error) {
            console.error('Erreur lors de la création de l’utilisateur :', error);
            res.status(500).json({
                success: false,
                message: 'Erreur serveur lors de la création de l’utilisateur.',
            });
        }
    },

/*  ---------------------------------------------------------------------   */

    /* Modifier les informations */

    async updateUser(req, res) {
        
        try {
            const {id} = req.params;
            const { lastname, firstname, email } = req.body;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json ({
                    success: false,
                    message: 'Utilisateur non trouvé',
                });
            }

            if (lastname) user.lastname = lastname;
            if (firstname) user.firstname = firstname;
            if (email) user.email = email;
            /* if (password) user.password_hash = await bcrypt.hash(password, 10); */

            await user.save();

            res.status(200).json({
                success: true,
                message: 'Utilisateur mis à jour avec succès.',
                data: user,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l’utilisateur :", error);
            res.status(500).json({
                succes: false,
                message: 'Erreur serveur lors de la mise à jour de l’utilisateur.'
            });
        }
    }
    

};


export default userController;