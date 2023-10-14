const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    // 'nodejs2',
    // 'root', 
    // '123456', 
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST ,
        dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
        logging: false, // ẩn cái log của ông nội sequelize|| muốn thì tắt nó đi cho đỡ rối || logging giống clg
});

const connectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectionDB;


