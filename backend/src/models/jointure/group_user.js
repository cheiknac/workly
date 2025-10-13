import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../client/client.js';

class Group_user extends Model {}

Group_user.init (
    {
        id_group: {
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
        modelName: 'Group_user',
        tableName: 'groups_users',
        timestamps: false,
    }
);

export default Group_user;