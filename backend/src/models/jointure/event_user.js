import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../client/client.js';

class Event_user extends Model {}

Event_user.init (
    {
        id_event: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    },

    {
        sequelize,
        modelName: 'Event_user',
        tableName: 'event_user',
        timestamps: false,
    }
);

export default Event_user;