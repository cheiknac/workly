import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../client/client.js';

class Event extends Model {}

Event.init (
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date_event: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        zip_code: {
            type: DataTypes.STRING(5),
            allowNull: false,
            validate: {
                is: /^\d{5}$/,
            },
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        country: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 

        status: {
            type: DataTypes.ENUM('en_attente', 'valide', 'bloqué'),
            defaultValue: 'en attente',
        },

        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },

    {
        sequelize,
        modelName: 'Event',
        tableName: 'event',
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at',
    }
);

export default Event;