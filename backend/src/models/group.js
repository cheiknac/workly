import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../client/client.js';

class Group extends Model {}

Group.init (
    {
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize,
        modelName: 'Group',
        tableName: 'groups',
    }
);

export default Group;