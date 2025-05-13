const Sequelize = require('sequelize');
const sequelize = new Sequelize('cursos_EAD', 'root', 'cimatec', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;