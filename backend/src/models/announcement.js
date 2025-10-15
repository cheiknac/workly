import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../client/client.js';

class Announcement extends Model {}

Announcement.init (
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date_announcement: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        message: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },

    {
        sequelize,
        modelName: 'Announcement',
        tableName: 'announcement',
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at',
    }
);

export default Announcement;