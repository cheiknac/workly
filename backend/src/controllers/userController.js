import User from '../models/user.js';


const userController = {
    
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
            message: 'Erreur serveur lors de la récupérable des utilisateurs.',
        });
    }
},

};


export default userController;