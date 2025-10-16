import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../client/client.js';

class Notification extends Model {}

Notification.init (
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        message: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        
        send_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
        },

        is_view: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
        },

        type: {
                type: DataTypes.ENUM('annonce', 'événement', 'global'),
                allowNull: false,
                defaultValue: 'global',
        },

        link: {
                type: DataTypes.STRING,
                allowNull: false,
        },

    },

        {
            sequelize,
            modelName: 'Notification',
            tableName: 'notification',
            timestamps: true,
            createdAt: 'created_at', 
            updatedAt: 'updated_at',
        },
        
);

export default Notification;
