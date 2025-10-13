import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../client/client.js';

class Notification_announcement extends Model {}

Notification_announcement.init (
    {
        id_notification: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_announcement: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },

    {
        sequelize,
        modelName: 'Notification_announcement',
        tableName: 'notification_announcement',
        timestamps: false,
    }
);

export default Notification_announcement;