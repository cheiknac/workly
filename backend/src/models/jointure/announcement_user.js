import 'dotenv/config';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../client/client.js';

class Announcement_user extends Model {}

Announcement_user.init (
    {
        id_announcement: {
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
        modelName: 'Announcement_user',
        tableName: 'announcements_users',
        timestamps: false,
    }
);

export default Announcement_user;