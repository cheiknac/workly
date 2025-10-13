import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../client/client.js';

class Notification_user extends Model {}

Notification_user.init (
    {
        id_notification: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },

    {
        sequelize,
        modelName: 'Notification_user',
        tableName: 'notifications_users',
        timestamps: false,
    }
);

export default Notification_user;