import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../client/client.js';

class Event_group extends Model {}

Event_group.init (
    {
        id_event: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_group: {
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

export default Event_group;