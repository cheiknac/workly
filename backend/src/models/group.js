import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../client/client.js';

class Group extends Model {}

Group.init (
    {   
        group_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },

    {
        sequelize,
        modelName: 'Group',
        tableName: 'groups',
        timestamps: true,
        createdAt: 'created_at', 
        updatedAt: 'updated_at',
    }
);

export default Group;