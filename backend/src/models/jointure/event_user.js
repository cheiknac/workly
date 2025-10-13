import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../client/client.js';

class Event_user extends Model {}

Event_user.init (
    {
        id_event: {
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
        modelName: 'Event_user',
        tableName: 'events_users',
        timestamps: false,
    }
);

export default Event_user;