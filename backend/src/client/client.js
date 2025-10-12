import { sequelize } from 'sequelize';

if (!config.PG_URL) {
    throw new Error ("config.PG_URL est manquant !");
}

const sequelize = new sequelize(config.PG_URL, {
    dialect: 'postgres',
    logging: 'false',
});

export { sequelize };