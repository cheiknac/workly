import 'dotenv/config';
import { Datatypes, Model } from 'sequelize';
import sequelize from '../client/client.js';


class User extends Model {}

User.init( 
    {
        lastname: {
            type: Datatypes.STRING,
            allowNull: false,
        },

        firstname: {
            type: Datatypes.STRING,
            allowNull: false,
        },

        email: {
            type: Datatypes.STING,
            allowNull: false,
            unique: true,
            valide: {
                isEmail: true,
            },
        },

        password_hash: {
            type: Datatypes.STRING,
            allowNull: false,
        },

        role: {
            type: Datatypes.STRING,
            allowNull: false,
        },

        status: {
            type: Datatypes.ENUM("en_attente", "valide", "bloqué"),
            allowNull: false,
            defaultValue: 'en_attente',
        },
    },
    {
        sequelize,
        modeleName: 'User',
        tableName: 'users',
        timestamps: true,
    }
);

export default User;