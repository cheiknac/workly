import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../client/client.js';

class Notification_event extends Model {}

Notification_event.init (
    {
        id_notification: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_event: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },

    {
        sequelize,
        modelName: 'Notification_event',
        tableName: 'notifications_events',
        timestamps: false,
    }
);

export default Notification_event;