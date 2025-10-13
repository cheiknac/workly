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
                type: DataTypes.ENUM('lu', 'non-lu'),
                allowNull: false,
                defaultValue: false,
        },

        type: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 'annonce',
        },

        link: {
                type: DataTypes.STRING,
                allowNull: false,
        },

    },

        {
            sequelize,
            modelName: 'Notification',
            tableName: 'notifications',
            timestamps: true,
            createdAt: 'created_at', 
            updatedAt: 'updated_at',
        },
        
);

export default Notification;
