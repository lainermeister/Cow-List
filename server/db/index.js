const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    database: 'cowlist'
});

sequelize.authenticate()
    .then(() => console.log("DB successfully connected."))
    .catch((err) => console.log("DB connection not successful. " + err))


module.exports = sequelize.define('cow', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

