import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../client/client.js';


class User extends Model {}

User.init( 
    {
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },

        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
        },

        status: {
            type: DataTypes.ENUM('en_attente', 'valide', 'bloqué'),
            allowNull: false,
            defaultValue: 'en_attente',
        },
    },
    {
        sequelize,
        modeleName: 'User',
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at',
    }
);

export default User;